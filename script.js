// Darkmode

let checkbox = document.querySelector(".dmCheck");
let body = document.querySelector("body");
let logo = document.querySelector(".img-logo")

checkbox.addEventListener('change', function() {
  
  if (this.checked) {
    body.classList.add("dark");
    logo.src = "Assets/greenDark.png"
  } else {
    body.classList.remove("dark");
    logo.src = "Assets/green.png"
  }
});


//animate on scroll
//counting up numbers

const counters = document.querySelectorAll('.counter');
const nbStep = 100 ;

let animationHasPlayed = false;

window.addEventListener('scroll', function(){
  if (window.scrollY < 450 && animationHasPlayed === false) {
    return;
  }
    animationHasPlayed = true;

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target') // get the value of the set target in html and change the type to number
        const count = +counter.innerText; 
    
        const increment = Math.floor(target / nbStep); // get integer from the division on target and nbStep
    
        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount,30) //run updateCount every x ms
        }
        else {
          count.innerText = target;
        }
      }
      updateCount();
    });
});


// Menu burger 

const input = document.querySelector("#menuToggle");
const link = document.querySelectorAll(".link");


const closeBurger = ()=>{
  document.getElementById("menuToggle").checked = false;
  return;
}

for (let i =0;i <link.length;i++){
  link[i].addEventListener('click', function(){
    closeBurger();
  });
}