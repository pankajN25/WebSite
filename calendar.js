document.addEventListener("DOMContentLoaded", () => {
    const openCalendar = document.getElementById("openCalendar");
    const modal = document.getElementById("calendarModal");
    const closeBtn = document.querySelector(".close");
    const saveDate = document.getElementById("saveDate");
    const visitDate = document.getElementById("visitDate");
  
    openCalendar.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  
    saveDate.addEventListener("click", () => {
      const selectedDate = visitDate.value;
      if (selectedDate) {
        alert(`Your visit date is set to: ${selectedDate}`);
        modal.style.display = "none";
      } else {
        alert("Please select a date.");
      }
    });
  });

  // contact us coding

  document.querySelectorAll("#contactusP a").forEach((link) => {
    link.addEventListener("click", (event) => {
      console.log(`Navigating to: ${event.target.href}`);
    });
  });


  // top property............

  const slider = document.getElementById("propertySlider");
  const properties = document.querySelectorAll(".top_property");
  const propertyWidth = properties[0].offsetWidth + 20; // Including gap
  let currentIndex = 0;

  function updateSlider() {
    slider.style.transform = `translateX(${-currentIndex * propertyWidth}px)`;
  }

  function nextSlide() {
    if (currentIndex < properties.length - 1) {
      currentIndex++;
      updateSlider();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  }

  // Add auto-slide functionality
  // setInterval(() => {
  //   if (currentIndex < properties.length - 1) {
  //     nextSlide();
  //   } else {
  //     currentIndex = 0;
  //     updateSlider();
  //   }
  // }, 3000);
  