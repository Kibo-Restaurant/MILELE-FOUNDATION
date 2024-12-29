document.addEventListener('DOMContentLoaded', () =>{
    (function(){
        emailjs.init("sL8Nc8YyNj9KBFlVc"); // Replace with your EmailJS user ID
       })();
       document.querySelector('.subscribe-container').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
   
    
            emailjs.sendForm('service_ty541sq', 'template_tlizadm', this)
                .then(function() {
                    alert('Thank you for subscribing!'); // Success message
                }, function(error) {
                    alert('Failed to send. Please try again.'); // Error message
                    console.log('FAILED...', error);
                });
        });


});



