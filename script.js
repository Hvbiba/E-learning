document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Email validation
    let emailInput = document.getElementById('mail');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(emailInput.value);

    // Password validation
    let passInput = document.getElementById('pass');
    let password = passInput.value;
    const numberPattern = /\d/; // Regular expression for at least one digit in password

    // Check if email is empty
    if (emailInput.value === '') {
        console.log("Email is empty");
    } else if (!isValidEmail) { // Check if email is not valid
        alert('Invalid email! Please enter a valid email address.');
    }

    // Check if password is empty
    if (password === '') {
        console.log("Password is empty");
    } else if (!numberPattern.test(password)) { // Check if password does not contain a number
        alert("Password should contain at least one number.");
    }
});

document.getElementById('showPasswordCheckbox').addEventListener('change', function() {
    // Get the password input element
    let passwordInput = document.getElementById('pass');
    // If the checkbox is checked, show the password as plain text
    // If the checkbox is unchecked, hide the password (default behavior of password input)
    passwordInput.type = this.checked ? 'text' : 'password';
});
