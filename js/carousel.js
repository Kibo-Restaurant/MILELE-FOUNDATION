function initializeCarousel() {
    let presentSlide = 0; // Tracks the current slide index
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    const placeholder = document.getElementById('carousel-placeholder');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // Show the first slide with the link to stories
    slides[presentSlide].classList.add('active');
    const slide1 = slides[0];
    const linkToStory = document.createElement('a');
    linkToStory.href = "#"; // Replace with the actual story link
    linkToStory.textContent = "Read More";
    linkToStory.style.position = "absolute";
    linkToStory.style.bottom = "20px";
    linkToStory.style.left = "20px";
    linkToStory.style.color = "white";
    linkToStory.style.textDecoration = "underline";
    linkToStory.style.fontSize = "18px";

    slide1.appendChild(linkToStory);

    // Function to show a specific slide
    function showSlide(index) {
        // Use a for loop to remove active class from all slides
        for (let i = 0; i < totalSlides; i++) {
            slides[i].classList.remove('active');
        }

        // Set the new slide index
        presentSlide = (index + totalSlides) % totalSlides;
        slides[presentSlide].classList.add('active');
    }

    // Function to handle manual navigation
    function moveSlide(n) {
        showSlide(presentSlide + n);
    }

    // Function to hide the placeholder
    function hidePlaceholder() {
        placeholder.style.display = 'none';
    }

    // Check if all images are loaded
    function checkImagesLoaded() {
        let imagesLoaded = 0;

        slides.forEach((slide, index) => {
            const img = slide.querySelector('img');
            if (img.complete) {
                imagesLoaded++;
            } else {
                img.onload = () => {
                    imagesLoaded++;
                    if (imagesLoaded === totalSlides) {
                        hidePlaceholder(); // Hide placeholder when all images are loaded
                    }
                };
                img.onerror = () => {
                    console.error(`Image failed to load: ${img.src}`);
                    imagesLoaded++;
                    if (imagesLoaded === totalSlides) {
                        hidePlaceholder(); // Hide placeholder even if some images fail
                    }
                };
            }
        });

        // If all images are cached and loaded, hide the placeholder immediately
        if (imagesLoaded === totalSlides) {
            hidePlaceholder();
        }
    }

    // Automatic slide rotation
    function autoSlide() {
        setTimeout(() => {
            moveSlide(1); // Move to the next slide
            autoSlide(); // Continue cycling automatically
        }, 3000); // 3-second interval
    }

    // Activate manual navigation buttons after auto-slide finishes
    function activateButtons() {
        if (prevButton) {
            prevButton.addEventListener('click', () => moveSlide(-1));
        }
        if (nextButton) {
            nextButton.addEventListener('click', () => moveSlide(1));
        }
    }

    // Initialize the carousel
    checkImagesLoaded(); // Start checking image load status
    hidePlaceholder(); // Immediately hide the placeholder if all images are loaded
    autoSlide(); // Start automatic slide rotation
    activateButtons(); // Enable manual navigation buttons
}

initializeCarousel();




// function initializeCarousel() {
//     // DYNAMICALLY SETTING THE CAROUSEL SLIDE SHOW
//     let presentSlide = 0; // Keeps track of the current slide index
//     const slides = document.querySelectorAll('.carousel-slide'); // Selection of all slides
//     const allSlides = slides.length; // Number of slides

//     console.log(`Counting slides to confirm: ${allSlides - 1}`);

//     // Show the placeholder initially
//     const placeholder = document.getElementById('carousel-placeholder');
//     placeholder.style.display = 'block';

//     function showSlide(index) {
//         if (index >= allSlides) {
//             presentSlide = 0; // Wrap around to the first slide
//         } else if (index < 0) {
//             presentSlide = allSlides - 1; // Wrap around to the last slide
//         } else {
//             presentSlide = index; // Show the requested slide
//         }
        
//         console.log('presentSlide: ', presentSlide);
        
//         // const carouselContainer = document.querySelector('.carousel-container');
//         // if (carouselContainer) {
//         //     carouselContainer.style.transform = `translateX(-${presentSlide * 100}%)`;
//         //     carouselContainer.offsetWidth; // Force reflow
//         // }
//     }

//     function moveSlide(n) {
//         showSlide(presentSlide + n); // Move to the next or previous slide
//     }

//     function autoSlideOnce() {
//         if (presentSlide < allSlides - 1) {
//             moveSlide(1);
//             setTimeout(autoSlideOnce, 3000); // Change slide every 3 seconds
//         } else {
//             showSlide(0); // Reset to the first slide after loop completion
//             activateButtons(); // Enable buttons for manual navigation
//             hidePlaceholder(); // Hide placeholder after auto sliding
//         }
//     }

//     function hidePlaceholder() {
//         placeholder.style.display = 'none'; // Hide the placeholder once slides are loaded
//     }

//     function checkImagesLoaded() {
//         let imagesLoaded = 0;
        
//         slides.forEach(slide => {
//             const img = slide.querySelector('img');
//             if (img.complete) {
//                 imagesLoaded++;
//             } else {
//                 img.onload = () => {
//                     imagesLoaded++;
//                     if (imagesLoaded === allSlides) {
//                         hidePlaceholder(); // Hide placeholder after all images are loaded
//                     }
//                 };
//                 img.onerror = () => {
//                     console.error(`Image failed to load: ${img.src}`);
//                     imagesLoaded++;
//                     if (imagesLoaded === allSlides) {
//                         hidePlaceholder(); // Hide placeholder even if some images fail
//                     }
//                 };
//             }
//         });

//         // If all images are already loaded (e.g., cached), hide placeholder immediately
//         if (imagesLoaded === allSlides) {
//             hidePlaceholder();
//         }
//     }

//     function activateButtons() {
//         const prevButton = document.querySelector('.prev');
//         const nextButton = document.querySelector('.next');
        
//         if (prevButton) {
//             prevButton.addEventListener('click', () => moveSlide(-1));
//         }
        
//         if (nextButton) {
//             nextButton.addEventListener('click', () => moveSlide(1));
//         }
//     }

//     // Initialize the carousel
//     showSlide(presentSlide); // Show the first slide
//     checkImagesLoaded(); // Check if images are loaded
//     autoSlideOnce(); // Start auto sliding
// } initializeCarousel();
            
