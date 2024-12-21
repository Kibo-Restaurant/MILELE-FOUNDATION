document.addEventListener('DOMContentLoaded', ()=>{
   const lazyImages = document.querySelectorAll('.lazyload');
    const ImageObserver = new IntersectionObserver((entries, ImageObserver) =>{
        for(let i = 0; i <entries.length; i++){
            const entry = entries[i];
            if(entry.isIntersecting){
                const img = entry.target;
                const highResSrc = img.getAttribute('src');

                img.onload = () => {
                    img.classList.add('loaded');
                };
                  // If the image is already cached, onload won't trigger, so check manually
              if (img.complete) {
               img.classList.add('loaded');
              }
                ImageObserver.unobserve(img);
            }
        }
    });
    
    for(let i = 0; i < lazyImages.length; i++){
        ImageObserver.observe(lazyImages[i]);
    }
});