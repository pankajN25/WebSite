document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const images = slides.querySelectorAll("img");
    const totalImages = images.length;
  
    let currentIndex = 0;
  
    function showNextSlide() {
      currentIndex++;
      if (currentIndex >= totalImages) {
        currentIndex = 0; // Reset to the first image
      }
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    // Change slide every 3 seconds
    setInterval(showNextSlide, 3000);
  });
  // slider for to p property.........
  let index = 0;
        function showSlide1() {
            const slider1 = document.getElementById("slider1");
            slider1.style.transform = `translateX(${-index * (window.innerWidth - 40)}px)`;
        }
        function prevSlide1() {
            index = (index > 0) ? index - 1 : 6;
            showSlide1();
        }
        function nextSlide1() {
            index = (index < 6) ? index + 1 : 0;
            showSlide1();
        }
        window.addEventListener("resize", showSlide1);s



// client review
// JavaScript for Sliding Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.review-slide');
const totalSlides = slides.length;

// Function to show the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

// Next Button
document.getElementById('next-btn').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

// Previous Button
document.getElementById('prev-btn').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

// Show the first slide initially
showSlide(currentSlide);


// request to call back form
document.getElementById('callBackBtn').addEventListener('click', function() {
  console.log('Button clicked!'); // Check if this appears in the console
  var formContainer = document.getElementById('callBackFormContainer');
  if (formContainer.style.display === 'none' || formContainer.style.display === '') {
    formContainer.style.display = 'block';
  } else {
    formContainer.style.display = 'none';
  }});

// login drop down button button 

document.getElementById("loginButtonUnique").addEventListener("click", function () {
  var dropdownMenu = document.getElementById("dropdownMenuUnique");
  dropdownMenu.classList.toggle("show-unique");
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('#loginButtonUnique')) {
      var dropdowns = document.getElementsByClassName("dropdown-content-unique");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show-unique')) {
              openDropdown.classList.remove('show-unique');
          }
      }
  }
};

// Toggle Form Visibility

// document.getElementById('callBackBtn').addEventListener('click', function() {
//   var formContainer = document.getElementById('callBackFormContainer');
//   if (formContainer.style.display === 'none' || formContainer.style.display === '') {
//     formContainer.style.display = 'block';
//   } else {
//     formContainer.style.display = 'none';
//   }
// });

// // Handle Form Submission
// document.querySelector('.callback-form').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the form from submitting the traditional way

//   // Get form data
//   var name = document.getElementById('cbName').value;
//   var phone = document.getElementById('cbPhone').value;
//   var email = document.getElementById('cbEmail').value;
//   var message = document.getElementById('cbMessage').value;

//   // Validate inputs (basic example)
//   if (!name || !phone || !email) {
//     alert('Please fill out all required fields.');
//     return;
//   }

//   // Send data to your server (using Fetch API)
//   fetch('/submit-callback-request', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ name: name, phone: phone, email: email, message: message }),
//   })
//   .then(response => response.json())
//   .then(data => {
//     alert('Thank you! We will call you back soon.');
//     document.getElementById('callBackFormContainer').style.display = 'none'; // Hide the form after submission
//     document.querySelector('.callback-form').reset(); // Clear the form fields
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     alert('Something went wrong. Please try again.');
//   });
// })