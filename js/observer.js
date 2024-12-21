document.addEventListener('DOMContentLoaded', () => {
  // Create the Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      if (entry.isIntersecting) {
      //   entry.target.classList.add('scrolled'); // Add the animation class
      //   observer.unobserve(entry.target); // Stop observing once animated
      if(entry.target.classList.contains('slide-up')){
        entry.target.classList.add('scrolled');
      }else if(entry.target.classList.contains('from-left')){
        entry.target.classList.add('slide-left');
      }else if(entry.target.classList.contains('from-right')){
        entry.target.classList.add('slide-right');
      }else if(entry.target.classList.contains('go-up')){
        entry.target.classList.add('fade-scale-up')
      }
      observer.unobserve(entry.target);
      }
      
    }
  });

  // Select all elements you want to animate
  const elementsToAnimate = document.querySelectorAll('.animated');

  // Observe each element using a for loop
  for (let i = 0; i < elementsToAnimate.length; i++) {
    observer.observe(elementsToAnimate[i]);
    console.log(`Observing element at index ${i}`); // Debugging: shows the index being observed
  }
});






// document.addEventListener('DOMContentLoaded', () => {
//     const observer = new IntersectionObserver((entries) =>{
//         for(let i = 0; i <entries.length; i++){
//           const entry = entries[i];
//           if (entry.isIntersecting){
//             const element = entry.target;
//             const animation = element.getAttribute('data-animate');
//             element.classList.add(animation);
//             element.classList.remove('hidden');
//             observer.unobserve(element); // Stop observing once the animation is triggered
//           }
//         }
//       });
//       const elementsToAnimate = document.querySelectorAll('.animate');
//        for(let i = 0; i < elementsToAnimate.length; i++){
//         observer.observe(elementsToAnimate[i]);
//         console.log(`Observing elements at index ${i}`)
//        }
   
//   });

  //use  class="animate hidden" data-animate="slide-in" 
  //class="animate hidden" data-animate="fade-in"
  //and (for images) class="animate hidden" data-animate="zoom-in" TESTING
  //FADE IN, SCALE UP, FLIP, SLIDE
 //