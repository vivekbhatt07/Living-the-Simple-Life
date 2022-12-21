const button = document.querySelector(".btn");

function rippleBtn(event) {
  console.log("hello");
  console.log(event);
}

button.addEventListener("click", function clickHandler(event) {
  rippleBtn(event);
});
