document.getElementById('visitForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('visit-form-name').value.trim();
    const email = document.getElementById('visit-form-email').value.trim();
    const phone = document.getElementById('visit-form-phone').value.trim();
    const date = document.getElementById('visit-form-date').value;
    const time = document.getElementById('visit-form-time').value;
    const property = document.getElementById('visit-form-property').value;

    // Simple validation
    if (!name || !email || !phone || !date || !time || !property) {
        alert('Please fill out all fields.');
        return;
    }

    // Display success message
    const successMessage = document.getElementById('visit-form-success-message');
    successMessage.textContent = `Thank you, ${name}! Your visit to ${property} on ${date} at ${time} has been scheduled. We'll contact you shortly.`;
    successMessage.style.display = 'block';

    // Clear form fields
    document.getElementById('visitForm').reset();
});