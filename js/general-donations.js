document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with your public key
    (function() {
        emailjs.init("7nMusyPQ7wGHede4V"); // Your EmailJS user ID
    })();
  
    // Listener for the donate form submission
    document.getElementById("general-form").addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
  
        // Collect the form data
        const fullName = document.getElementById('name').value.trim();
        const clientEmail = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        // const comment = document.querySelector('.comment-input').value.trim();
  
        // Validate the form fields
        if (!fullName || !clientEmail || !message) {
            alert('Please fill all fields before submitting!');
            return; // Exit if any field is empty
        }
  
        // Send the data via Email.js
        emailjs.send("service_4bx6sd2", "template_ch8y8yf", { 
            full_name: fullName,
            client_email: clientEmail,
            message: message,
        
        }).then(function(response) {
            // Success message
            alert('Thank you for your message! We will get back to you as soon as possible');
            console.log('SUCCESS!', response); // Log success response
        }, function(error) {
            // Error message
            alert('Failed to send. Please try again.');
            console.error('FAILED...', error); // Log error response
        });
    });
  });
  
  
  
  