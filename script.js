// Darkmode

let checkbox = document.querySelector(".dmCheck");
let body = document.querySelector("body");

checkbox.addEventListener('change', function() {
  
  if (this.checked) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
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
          setTimeout(updateCount,30) //reload every 50ms
        }
        else {
          count.innerText = target;
        }
      }
      updateCount();
    });
});
