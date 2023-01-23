(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('YHPP3TWppQs7wuTmZ');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // these IDs from the previous steps
        emailjs.sendForm('service_pwjxwun', 'contact_form', this)
            .then(function() {
                let message = document.getElementById('success');
                message.classList.add("message-sent");
                message.innerHTML = "Your message has been sent. Thank you!";
                console.log('SUCCESS!');             
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}