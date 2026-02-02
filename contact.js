document.addEventListener("DOMContentLoaded", function() {

  // Initialize EmailJS with your PUBLIC user ID
  emailjs.init("Ps0_RJi0sQPei9b5S"); // Your public User ID

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  // Only run if form exists on this page
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Send form using EmailJS
      emailjs.sendForm('service_3ycncjf', 'template_sz06q1u', this)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          status.style.color = "green";
          status.textContent = "Message sent successfully!";
          form.reset();
        }, function(error) {
          console.log('FAILED...', error);
          status.style.color = "red";
          status.textContent = "Oops! Something went wrong. Try again later.";
        });
    });
  }

});
