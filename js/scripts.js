/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



document.addEventListener('DOMContentLoaded', () =>{
    function initializeNavbar() {
        
        
        //TRANFORMING THE HAMBURGER BUTTON INTO AN X
     const toggler = document.getElementById('custom-toggler');
     const navbarContent = document.querySelector('.navbar-collapse');
     
    
     
     toggler.addEventListener('click', () => {
       toggler.classList.toggle('active');
       navbarContent.classList.toggle('show');
     });

   
    // Collapse the navbar when clicking outside of it
    window.addEventListener('click', (event) => {
      // Check if the clicked element is outside the navbar and the toggler
      if (!navbarContent.contains(event.target) && !toggler.contains(event.target)) {
          navbarContent.classList.remove('show');
          toggler.classList.remove('active');
      }
   
    });
    // Select dropdown buttons and menus
     
    
    };
    
     initializeNavbar()
    });


  





     // // OPENING AND CLOSING THE SEARCH INPUT AND CLOSE BUTTON
    // const searchContainer = document.querySelector('.search-container');
    // const searchInput = document.querySelector('.search-input');
    // const searchButton = document.querySelector('.search-btn');
    // const closeButton = document.querySelector ('.close-btn');
    
    // searchButton.addEventListener('click', () =>{
    //   searchContainer.classList.toggle('active');
    //   searchInput.classList.toggle('show');
    //   closeButton.classList.toggle('show');
    // });
    
    // closeButton.addEventListener('click', function () {
    //   searchContainer.classList.remove('active');
    //   searchInput.classList.remove('show');
    //   closeButton.classList.remove('show');
    
    // });
    //BACK TO TOP BUTTON
     // Add this to your JavaScript file or inside a <script> tag
    //  const backToTopButton = document.getElementById('back-to-top');
     
    
     
     // Scroll to the top when the button is clicked
    //  backToTopButton.addEventListener('click', function() {
    //    window.scrollTo({ top: 0, behavior: 'smooth' });
    //  });