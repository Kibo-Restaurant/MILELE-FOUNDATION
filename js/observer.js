
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) =>{
        for(let i = 0; i <entries.length; i++){
          const entry = entries[i];
          if (entry.isIntersecting){
            const element = entry.target;
            const animation = element.getAttribute('data-animate');
            element.classList.add(animation);
            element.classList.remove('hidden');
            observer.unobserve(element); // Stop observing once the animation is triggered
          }
        }
      });
      const elementsToAnimate = document.querySelectorAll('.animate');
       for(let i = 0; i < elementsToAnimate.length; i++){
        observer.observe(elementsToAnimate[i]);
        console.log(`Observing elements at index ${i}`)
       }
   
  });

  //use  class="animate hidden" data-animate="slide-in" 
  //class="animate hidden" data-animate="fade-in"
  //and (for images) class="animate hidden" data-animate="zoom-in" TESTING
