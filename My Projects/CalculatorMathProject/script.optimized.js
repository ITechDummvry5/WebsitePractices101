"use strict";

/* =====================================================
   MATRIX GRID UTILITIES
===================================================== */

function createMatrixGrid(container, rows, cols) {
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${cols}, 60px)`;

  const frag = document.createDocumentFragment();
  const inputs = [];

  for (let i = 0; i < rows * cols; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.value = 0;
    frag.appendChild(input);
    inputs.push(input);
  }

  container.appendChild(frag);
  container.inputs = inputs; // cache inputs for fast access
}

// Read matrix from cached inputs
function readMatrix(container, rows, cols) {
  const matrix = [];
  let idx = 0;
  const inputs = container.inputs;
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) row.push(Number(inputs[idx++].value));
    matrix.push(row);
  }
  return matrix;
}

// Write matrix to cached inputs
function writeMatrix(container, matrix) {
  const inputs = container.inputs;
  let idx = 0;
  for (const row of matrix) for (const val of row) inputs[idx++].value = val;
}

/* =====================================================
   ENTER NAVIGATION (Delegated)
===================================================== */

function enableEnterNavigation(container) {
  container.addEventListener("keydown", e => {
    if (e.key !== "Enter") return;

    e.preventDefault();
    const inputs = container.inputs;
    const index = inputs.indexOf(e.target);
    if (index === -1) return;

    let nextIndex = index + 1;
    while (nextIndex < inputs.length && inputs[nextIndex].value !== "") nextIndex++;
    if (nextIndex >= inputs.length) nextIndex = inputs.length - 1;

    inputs[nextIndex].focus();
    inputs[nextIndex].select();
  });
}

/* =====================================================
   MATRIX OPERATIONS
===================================================== */

const Matrix = {
  add(A, B) {
    const rows = A.length, cols = A[0].length;
    const result = [];
    const steps = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        const val = A[i][j] + B[i][j];
        row.push(val);
        steps.push(`R[${i+1}][${j+1}] = ${A[i][j]} + ${B[i][j]} = ${val}`);
      }
      result.push(row);
    }
    return { result, steps };
  },

  subtract(A, B) {
    const rows = A.length, cols = A[0].length;
    const result = [];
    const steps = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        const val = A[i][j] - B[i][j];
        row.push(val);
        steps.push(`R[${i+1}][${j+1}] = ${A[i][j]} - ${B[i][j]} = ${val}`);
      }
      result.push(row);
    }
    return { result, steps };
  },

  multiply(A, B) {
    const rows = A.length, cols = B[0].length, inner = B.length;
    const result = [];
    const steps = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        let sum = 0;
        const sumParts = [];
        for (let k = 0; k < inner; k++) {
          sum += A[i][k] * B[k][j];
          sumParts.push(`${A[i][k]}*${B[k][j]}`);
        }
        row.push(sum);
        steps.push(`R[${i+1}][${j+1}] = ${sumParts.join(" + ")} = ${sum}`);
      }
      result.push(row);
    }
    return { result, steps };
  },

  transpose(A) {
    const rows = A[0].length, cols = A.length;
    const result = A[0].map((_, i) => A.map(r => r[i]));
    const steps = [`Transposed from ${A.length}x${A[0].length} to ${rows}x${cols}`];
    return { result, steps };
  }
};

/* =====================================================
   DETERMINANT & INVERSE
===================================================== */

function determinant(matrix) {
  const n = matrix.length;
  if (n !== matrix[0].length) throw "Matrix must be square";

  if (n === 1) return { value: matrix[0][0], steps: [`det([${matrix[0][0]}]) = ${matrix[0][0]}`] };
  if (n === 2) {
    const [[a, b], [c, d]] = matrix;
    const detVal = a*d - b*c;
    return { value: detVal, steps: [`det([[${a}, ${b}],[${c},${d}]]) = ${a}*${d} - ${b}*${c} = ${detVal}`] };
  }

  let detVal = 0;
  const steps = [`det(${JSON.stringify(matrix)}) =`];
  for (let j = 0; j < n; j++) {
    const subMatrix = matrix.slice(1).map(r => r.filter((_, idx) => idx !== j));
    const subDet = determinant(subMatrix);
    const cofactor = ((j % 2 === 0 ? 1 : -1) * matrix[0][j] * subDet.value);
    detVal += cofactor;
    steps.push(`+ (${(j % 2 === 0 ? "+" : "-")}${matrix[0][j]}) * det(subMatrix) = ${cofactor}`);
    steps.push(...subDet.steps.map(s => "  " + s));
  }
  steps.push(`det = ${detVal}`);
  return { value: detVal, steps };
}

function inverse(matrix) {
  const n = matrix.length;
  const detObj = determinant(matrix);
  const det = detObj.value;
  if (det === 0) throw "Matrix is singular and cannot be inverted";

  const steps = [...detObj.steps, `Determinant = ${det}`];

  // Compute cofactor matrix
  const cofactors = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      const sub = matrix
        .filter((_, r) => r !== i)
        .map(r => r.filter((_, c) => c !== j));
      const { value: subDet, steps: subSteps } = determinant(sub);
      const cofactor = ((i + j) % 2 === 0 ? 1 : -1) * subDet;
      row.push(cofactor);

      steps.push(`Cofactor C[${i+1}][${j+1}] = (${i}+${j} % 2 === 0 ? 1 : -1) * det(submatrix) = ${cofactor}`);
      steps.push(...subSteps.map(s => "  " + s));
    }
    cofactors.push(row);
  }

  // Adjugate (transpose of cofactor matrix)
  const adj = cofactors[0].map((_, i) => cofactors.map(r => r[i]));
  steps.push("Adjugate (transpose of cofactor matrix):");
  steps.push(formatMatrix(adj));

  // Divide by determinant
  const inv = adj.map(row => row.map(val => val / det));
  steps.push(`Divide each element of adjugate by determinant (${det}):`);
  steps.push(formatMatrix(inv.map(r => r.map(v => v.toFixed(4)))));

  return { result: inv, steps };
}




/* =====================================================
   DOM References
===================================================== */

const AGrid = document.getElementById("matrixA");
const BGrid = document.getElementById("matrixB");
const rowsA = document.getElementById("rowsA");
const colsA = document.getElementById("colsA");
const rowsB = document.getElementById("rowsB");
const colsB = document.getElementById("colsB");
const result = document.getElementById("result");
const feedbackEl = document.getElementById("feedback");

/* =====================================================
   INITIALIZATION
===================================================== */

function initGrid(container, rows, cols) {
  createMatrixGrid(container, rows, cols);
  enableEnterNavigation(container);
}

initGrid(AGrid, rowsA.value, colsA.value);
initGrid(BGrid, rowsB.value, colsB.value);

/* =====================================================
   GRID RESIZE HANDLERS
===================================================== */
[rowsA, colsA].forEach(el => el.onchange = () => createMatrixGrid(AGrid, rowsA.value, colsA.value));
[rowsB, colsB].forEach(el => el.onchange = () => createMatrixGrid(BGrid, rowsB.value, colsB.value));

/* =====================================================
   UTILITY
===================================================== */
function formatMatrix(matrix) {
  return matrix.map(r => r.join(" ")).join("\n");
}

function updateResult(matrix, steps=[]) {
  result.textContent = formatMatrix(matrix);
  feedbackEl.textContent = steps.join("\n");
}

/* =====================================================
   BUTTON HANDLERS (with full step feedback)
===================================================== */

document.getElementById("addBtn").onclick = () => {
  const A = readMatrix(AGrid, rowsA.value, colsA.value);
  const B = readMatrix(BGrid, rowsB.value, colsB.value);
  const { result: R, steps } = Matrix.add(A, B);
  updateResult(R, steps);
};

document.getElementById("subtractBtn").onclick = () => {
  const A = readMatrix(AGrid, rowsA.value, colsA.value);
  const B = readMatrix(BGrid, rowsB.value, colsB.value);
  const { result: R, steps } = Matrix.subtract(A, B);
  updateResult(R, steps);
};

document.getElementById("multiplyBtn").onclick = () => {
  const A = readMatrix(AGrid, rowsA.value, colsA.value);
  const B = readMatrix(BGrid, rowsB.value, colsB.value);
  const { result: R, steps } = Matrix.multiply(A, B);
  updateResult(R, steps);
};

document.getElementById("transposeBtn").onclick = () => {
  const A = readMatrix(AGrid, rowsA.value, colsA.value);
  const { result: AT, steps } = Matrix.transpose(A);
  [rowsA.value, colsA.value] = [colsA.value, rowsA.value];
  createMatrixGrid(AGrid, rowsA.value, colsA.value);
  writeMatrix(AGrid, AT);
  updateResult(AT, steps);
};

document.getElementById("transposeBBtn").onclick = () => {
  const B = readMatrix(BGrid, rowsB.value, colsB.value);
  const { result: BT, steps } = Matrix.transpose(B);
  [rowsB.value, colsB.value] = [colsB.value, rowsB.value];
  createMatrixGrid(BGrid, rowsB.value, colsB.value);
  writeMatrix(BGrid, BT);

  updateResult(BT, steps);
};

document.getElementById("detBtn").onclick = () => {
  const A = readMatrix(AGrid, rowsA.value, colsA.value);
  const detObj = determinant(A);
  result.textContent = `det(A) = ${detObj.value}`;
  feedbackEl.textContent = detObj.steps.join("\n");
};

document.getElementById("detBBtn").onclick = () => {
  const B = readMatrix(BGrid, rowsB.value, colsB.value);
  const detObj = determinant(B);
  result.textContent = `det(B) = ${detObj.value}`;
  feedbackEl.textContent = detObj.steps.join("\n");
};

document.getElementById("inverseBtn").onclick = () => {
  const A = readMatrix(AGrid, rowsA.value, colsA.value);
  try {
    const { result: invA, steps } = inverse(A);
    updateResult(invA, steps);
  } catch(e) {
    result.textContent = "Error: " + e;
    feedbackEl.textContent = "";
  }
};

/* =====================================================
   SWAP MATRICES A ↔ B
===================================================== */
document.getElementById("swapBtn").onclick = () => {
  try {
    const A = readMatrix(AGrid, rowsA.value, colsA.value);
    const B = readMatrix(BGrid, rowsB.value, colsB.value);

    // Swap dimensions
    [rowsA.value, rowsB.value] = [rowsB.value, rowsA.value];
    [colsA.value, colsB.value] = [colsB.value, colsA.value];

    // Rebuild grids
    createMatrixGrid(AGrid, rowsA.value, colsA.value);
    createMatrixGrid(BGrid, rowsB.value, colsB.value);

    // Write swapped data
    writeMatrix(AGrid, B);
    writeMatrix(BGrid, A);

    // Feedback
    const steps = [
      "Matrices swapped.",
      "Matrix A is now previous Matrix B:",
      formatMatrix(B),
      "Matrix B is now previous Matrix A:",
      formatMatrix(A)
    ];
    result.textContent = "Matrices swapped successfully.";
    feedbackEl.textContent = steps.join("\n");
  } catch (e) {
    result.textContent = "Error: " + e;
    feedbackEl.textContent = "";
  }
};
