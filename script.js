function toggleDescription(projectId) {
    var projectDescription = document.getElementById(projectId);
    projectDescription.style.display = (projectDescription.style.display === 'none' || projectDescription.style.display === '') ? 'block' : 'none';
}

function validateForm(event) {
    event.preventDefault();

    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    if (!isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    // Add logic to submit the form data to your server or another service
}

function isValidEmail(email) {
    // Add your email validation logic here (can be a simple regex or more complex checks)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
