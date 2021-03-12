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


// counting up numbers

const counters = document.querySelectorAll('.counter');
const nbStep = 100 ;

// counters.forEach(counter => {
//   const updateCount = () => {
//     const target = +counter.getAttribute('data-target')
//     const count = +counter.innerText;

//     const increment = Math.floor(target / speed);

//     if (count < target) {
//       counter.innerText = count + increment;
//       setTimeout(updateCount,1) //reload every 1ms
//     }
//     else {
//       count.innerText = target;
//     }
//   }
//   updateCount();
// });

//animate on scroll

let animationHasPlayed = false;
// const page = document.querySelector('body');


window.addEventListener('scroll', function(){
  if (window.scrollY < 450 && animationHasPlayed === false) {
    return;
  }
    animationHasPlayed = true;
    console.log("hello");

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target')
        const count = +counter.innerText;
    
        const increment = Math.floor(target / nbStep);
    
        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount,50) //reload every 1ms
        }
        else {
          count.innerText = target;
        }
      }
      updateCount();
    });
});
