
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form'); // Select the form element
    console.log(form); // Check if the form is selected
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        const query = document.getElementById("search-box").value.trim(); // Get the search query
        console.log(`Here it is: ${query}`); // Debugging
        if (query) {
            window.location.href = `results.html?query=${encodeURIComponent(query)}`; // Redirect to results
        } else {
            alert("Please enter a search term!"); // Show alert if query is empty
        }
    });
    
});
//  document.addEventListener('DOMContentLoaded', function() {
  
//     const query = document.getElementById("search-box").value.trim();
//     console.log(`Here it is: ${query}`);
//     if (query) {
//       window.location.href = `results.html?query=${encodeURIComponent(query)}`;
//     } else {
//       alert("Please enter a search term!");
//     }
//  });

