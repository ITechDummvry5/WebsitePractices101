// const button = document.getElementById("myBtn");
// button.onclick = function () {
//   alert("First JS Integrate HTML CSS");
// }; // No01 Seperate JS Like No0 in  Html 

const button = document.getElementById("myBtnEvent");
button.addEventListener("click", function () {
  alert("First JS Integrate HTML CSS Via EventListner");
}); // No02 Seperate JS With Event Listener Better Way 


const btnCart = document.getElementById("addtocart");
btnCart.addEventListener("click", function () {
  alert("Added To Cart");
}); // [EX]

const btnBuy = document.getElementById("buy");
btnBuy.addEventListener("click", function () {
  alert("Purchased");
}); // [EX]

// const btnBuy = document.getElementById("buy");
// btnBuy.addEventListener("click", function () {
//   btnBuy.textContent = "Loading...";
//   btnBuy.disabled = true; 
//   setTimeout(function () {
//     alert("Purchased");
//     btnBuy.textContent = "Buy Now";
//     btnBuy.disabled = false;
//   }, 1500); 
// });  //{Customn}
