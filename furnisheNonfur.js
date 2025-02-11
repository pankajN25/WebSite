// // Function to handle button clicks
// JavaScript to dynamically add more property types in the future
function addPropertyType(id, className, imageSrc, infoText) {
    const container = document.getElementById('property-container');
    const newProperty = document.createElement('div');
    newProperty.id = id;
    newProperty.className = className;
    newProperty.innerHTML = `
      <img src="${imageSrc}" alt="${id}">
      <p>${infoText}</p>
    `;
    container.querySelector('.property-section').appendChild(newProperty);
  }

  // Example: Add a new property type in the future
  // addPropertyType('luxury', 'property-item', 'luxury.jpg', 'Luxury Properties');
// function handleButtonClick(event) {
//     const sectionId = event.target.id.replace("-button", "-section");
//     const section = document.getElementById(sectionId);

//     if (section) {
//         alert(`You clicked on the "${section.querySelector('.property-type-heading').textContent}" section.`);
//         // You can add more functionality here, like redirecting to a property listing page.
//     }
// }

// // Add event listeners to buttons
// document.getElementById('furnished-button').addEventListener('click', handleButtonClick);
// document.getElementById('semi-furnished-button').addEventListener('click', handleButtonClick);
// document.getElementById('non-furnished-button').addEventListener('click', handleButtonClick);

// // Function to add new property types dynamically
// function addPropertyType(type, description) {
//     const container = document.querySelector('.property-types-container');

//     // Create new section
//     const newSection = document.createElement('div');
//     newSection.id = `${type.toLowerCase().replace(/\s+/g, '-')}-section`;
//     newSection.className = 'property-type-section';

//     // Add heading
//     const heading = document.createElement('h3');
//     heading.className = 'property-type-heading';
//     heading.textContent = `${type} Properties`;
//     newSection.appendChild(heading);

//     // Add description
//     const desc = document.createElement('p');
//     desc.className = 'property-type-description';
//     desc.textContent = description;
//     newSection.appendChild(desc);

//     // Add button
//     const button = document.createElement('button');
//     button.id = `${type.toLowerCase().replace(/\s+/g, '-')}-button`;
//     button.className = 'property-type-button';
//     button.textContent = `View ${type} Properties`;
//     button.addEventListener('click', handleButtonClick);
//     newSection.appendChild(button);

//     // Append new section to container
//     container.appendChild(newSection);
// }

// // Example: Add a new property type dynamically
// addPropertyType('Luxury', 'High-end properties with premium amenities.');