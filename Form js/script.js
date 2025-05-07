const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const phonenumber = document.getElementById('phonenumber').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!firstname) {
        document.getElementById('firstname-error').textContent = 'First Name is required';
        isValid = false;
    }

    if (!lastname) {
        document.getElementById('lastname-error').textContent = 'Last Name is required';
        isValid = false;
    }

    if (!phonenumber) {
        document.getElementById('phonenumber-error').textContent = 'Phone Number is required';
        isValid = false;
    } else if (!/^\d{10,15}$/.test(phonenumber)) {
        document.getElementById('phonenumber-error').textContent = 'Phone Number must be 10-15 digits';
        isValid = false;
    }

    if (!email) {
        document.getElementById('email-error').textContent = 'Email is required';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('email-error').textContent = 'Email is not valid';
        isValid = false;
    }

    if (!message) {
        document.getElementById('message-error').textContent = 'Message is required';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('message-error').textContent = 'Message must be at least 10 characters';
        isValid = false;
    }

    if (isValid) {
        form.submit();
    }
});