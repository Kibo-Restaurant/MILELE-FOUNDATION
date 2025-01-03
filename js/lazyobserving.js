document.addEventListener('DOMContentLoaded', ()=>{
   const lazyImages = document.querySelectorAll('.lazyload');
    const ImageObserver = new IntersectionObserver((entries, ImageObserver) =>{
        for(let i = 0; i <entries.length; i++){
            const entry = entries[i];
            if(entry.isIntersecting){
                const img = entry.target;
                const highResSrc = img.getAttribute('src');
                img.setAttribute('src', highResSrc); // Set the actual image source

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
    


    function lazyLoadImages() {
        const images = document.querySelectorAll('.slow-load'); // Target images in carousel
    
        const observer = new IntersectionObserver((entries, observer) => {
            for (let i = 0; i < entries.length; i++) {
                const entry = entries[i];
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const realSrc = img.getAttribute('data-src'); // Get the actual image source
                    img.setAttribute('src', realSrc); // Set the actual image source
                    // img.onload = () => {
                    //     img.classList.add('loaded'); // Optional: Fade-in effect after image is loaded
                    // };
                    observer.unobserve(img); // Stop observing once the image is loaded
                }
            }
        }, { threshold: 0.1 }); // Trigger when 10% of the image is visible
    
        for (let i = 0; i < images.length; i++) {
            observer.observe(images[i]); // Start observing each image
        }
    }
    
    // Initialize lazy loading
    lazyLoadImages();

});


