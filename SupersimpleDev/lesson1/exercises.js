// ex 1
document.getElementById("text").textContent = "Good Morning";
// ex 2
document.querySelector(".name").textContent = "Charles Andrei Ignacio";
// ex 3 using id
let tshirt = 10;
let socks = 8;
let dinner = 20;

let Totalcost = tshirt + socks + dinner;
document.getElementById("totalid").textContent = "$" + Totalcost;

//ex 4 using class name
let account = 100;
let lunch = 20;
let job = 200;

let Totalspend = account - lunch + job;
document.querySelector(".totalname").textContent = "$" + Totalspend;

// ex 5 Dissapear
//  document.body.innerHTML = "";

// mine change text on click
function changeText() {
  const items = document.getElementsByClassName("item");

  // Loop through all elements with class "item"
  for (let i = 0; i < items.length; i++) {
    items[i].textContent = "Fruit";
  }
}
// min change color automaticly
document.addEventListener("DOMContentLoaded", () => {
  const items = document.getElementsByClassName("item");

  for (let i = 0; i < items.length; i++) {
    items[i].style.color = "green";
  }
});


