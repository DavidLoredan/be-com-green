let checkbox = document.querySelector(".dmCheck");
let body = document.querySelector("body");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});
