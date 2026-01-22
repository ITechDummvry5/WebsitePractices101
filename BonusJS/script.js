
//mine 3 Key Diference  textContent,innerText,innerText
function showContent() {
  const el1 = document.getElementById("example1");
  const el2 = document.getElementById("hidden");

  console.log("textContent:", el1.textContent); // Shows all text including raw tags
  console.log("innerText:", el1.innerText);     // Shows visible text only
  console.log("innerText:", el1.innerHTML);     // Shows HTML tags

  console.log("Hidden paragraph textContent:", el2.textContent); // Hidden text is visible
  console.log("Hidden paragraph innerText:", el2.innerText);     // Hidden text ignored
}

function changeTextContent() {
  const el1 = document.getElementById("example1");
  el1.textContent = "<i><b>This</b> textContent</i>"; // Shows raw text
}

function changeInnerText() {
  const el1 = document.getElementById("example1");
  el1.innerText = "<i><b>This</b> innerText</i>"; // Shows text, affected by CSS
}

function changeInnerHTML() {
  const el1 = document.getElementById("example1");
  el1.innerHTML = "<i><b>This</b> is innerHTML</i>"; // Renders italic text
}