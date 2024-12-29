document.addEventListener('DOMContentLoaded', () => {
  // Initialize EmailJS with your public key
  (function() {
      emailjs.init("sL8Nc8YyNj9KBFlVc"); // Your EmailJS user ID
  })();

  // Listener for the donate form submission
  document.getElementById("donation-form").addEventListener('submit', function(event) {
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
      emailjs.send("service_ty541sq", "template_o89u41n", { 
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



// document.addEventListener('DOMContentLoaded', () =>{
//     // Initialize Email.js
// (function() {
//     emailjs.init("sL8Nc8YyNj9KBFlVc"); // Replace with your Email.js Public Key
//   })();

//   // Handle form submission
//   document.getElementById("donation-form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form from reloading the page

//     // Collect form data
//     const formData = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       message: document.getElementById("message").value,
//     };
    
//     console.log("Form Data Sent: ", formData);

//     // Send form data using Email.js
//     emailjs.send("service_ty541sq", "template_o89u41n", formData)
//       .then(function(response) {
//         alert("Message sent successfully!");
//         console.log("SUCCESS!", response.status, response.text);
//       })
//       .catch(function(error) {
//         alert("Failed to send the message. Please try again.");
//         console.log("FAILED...", error);
//       });
//   });
// });

// // document.addEventListener('DOMContentLoaded', () =>{
// //     (function(){
// //         emailjs.init("mv36TlOze_qyLMwmk"); // Replace with your EmailJS user ID
// //        })();
// //        document.querySelector('.subscribe-container').addEventListener('submit', function(event) {
// //             event.preventDefault(); // Prevent the default form submission
    
// //             emailjs.sendForm('service_cv5v8st', 'template_kl7noza', this)
// //                 .then(function() {
// //                     alert('Thank you for subscribing!'); // Success message
// //                 }, function(error) {
// //                     alert('Failed to send. Please try again.'); // Error message
// //                     console.log('FAILED...', error);
// //                 });
// //         });


// // });