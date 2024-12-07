document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        if (name && email && message) {
            feedback.textContent = `Thank you, ${name}. Your message has been sent!`;
            feedback.style.color = 'green';
            form.reset();
        } else {
            feedback.textContent = 'Please fill out all fields!';
            feedback.style.color = 'red';
        }
    });
});
