document.addEventListener("DOMContentLoaded", () => {
    // Smooth focus animations
    const inputs = document.querySelectorAll("input, select, textarea");
    inputs.forEach(input => {
      input.addEventListener("focus", () => {
        input.style.transition = "box-shadow 0.3s ease";
        input.style.boxShadow = "0 0 8px rgba(0, 123, 255, 0.7)";
      });
      input.addEventListener("blur", () => {
        input.style.boxShadow = "none";
      });
    });
  
    // Real-time character count for notes
    const notesField = document.getElementById("notes");
    const charCounter = document.createElement("small");
    charCounter.style.display = "block";
    charCounter.style.textAlign = "right";
    charCounter.style.color = "#555";
    notesField.parentNode.appendChild(charCounter);
    notesField.addEventListener("input", () => {
      const maxChars = 250;
      const remaining = maxChars - notesField.value.length;
      charCounter.textContent = `${remaining} characters remaining`;
      charCounter.style.color = remaining < 0 ? "red" : "#555";
      notesField.style.borderColor = remaining < 0 ? "red" : "#ddd";
    });
  
    // Date picker enhancements
    const dateField = document.getElementById("date");
    const today = new Date().toISOString().split("T")[0];
    dateField.setAttribute("min", today);
  
    // Form validation before submission
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Validate phone number pattern
      const phoneField = document.getElementById("phone");
      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(phoneField.value)) {
        alert("Please enter a valid 10-digit phone number.");
        phoneField.focus();
        return;
      }
  
      // Validation passed, simulate form submission
      alert("Thank you for scheduling your visit! We will get back to you shortly.");
      form.reset();
      charCounter.textContent = ""; // Reset the character counter
    });
  
    // Subtle hover effect on the button
    const submitButton = document.querySelector("button");
    submitButton.addEventListener("mouseover", () => {
      submitButton.style.transform = "scale(1.05)";
      submitButton.style.boxShadow = "0 6px 10px rgba(0, 123, 255, 0.3)";
    });
    submitButton.addEventListener("mouseout", () => {
      submitButton.style.transform = "scale(1)";
      submitButton.style.boxShadow = "none";
    });
  
    // Dynamic dropdown animation
    const propertyDropdown = document.getElementById("property");
    propertyDropdown.addEventListener("change", () => {
      const selection = propertyDropdown.value;
      if (selection) {
        propertyDropdown.style.backgroundColor = "#e9f7fe";
      } else {
        propertyDropdown.style.backgroundColor = "#fff";
      }
    });
  });
  
  // changing nav img 
  document.addEventListener("DOMContentLoaded", function () {
    let index1 = 0;
    const slides1 = document.querySelectorAll(".slide1");
    const totalSlides1 = slides1.length;
    const prevButton1 = document.querySelector(".prev1");
    const nextButton1 = document.querySelector(".next1");
    function showSlide1() {
        const slider1 = document.getElementById("slider1");
        const slideWidth1 = document.querySelector(".slider-container1").clientWidth;
        slider1.style.transform = `translateX(${-index1 * slideWidth1}px)`;
    }
    function prevSlide1() {
        index1 = (index1 > 0) ? index1 - 1 : totalSlides1 - 1;
        showSlide1();
    }
    function nextSlide1() {
        index1 = (index1 < totalSlides1 - 1) ? index1 + 1 : 0;
        showSlide1();
    }
    window.addEventListener("resize", showSlide1);
    showSlide1();
    prevButton1.addEventListener("click", prevSlide1);
    nextButton1.addEventListener("click", nextSlide1);
  });