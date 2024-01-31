document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents the default form submission behavior

    // Validate the form inputs
    var isValid = validateForm();

    if (isValid) {
        // If the form is valid, show a success message using SweetAlert
        swal("Good job!", "Register success!", "success");
    }  
});

function validateForm() {
    var isValid = true;

    // Validate Nama Depan
    var username = document.getElementById('username').value;
    if (username.trim() === '') {
        setErrorFor('username', 'Nama Depan tidak boleh kosong');
        isValid = false;
    } else {
        setSuccessFor('username');
    }

    // Validate Nama Belakang
    var lastname = document.getElementById('lastname').value;
    if (lastname.trim() === '') {
        setErrorFor('lastname', 'Nama Belakang tidak boleh kosong');
        isValid = false;
    } else {
        setSuccessFor('lastname');
    }

    // Validate Email
    var email = document.getElementById('email').value;
    if (!isValidEmail(email)) {
        setErrorFor('email', 'Email tidak valid');
        isValid = false;
    } else {
        setSuccessFor('email');
    }

    // Validate Password
    var password = document.getElementById('password').value;
    if (password.trim() === '') {
        setErrorFor('password', 'Password tidak boleh kosong');
        isValid = false;
    } else {
        setSuccessFor('password');
    }

    // Validate Confirm Password
    var cpassword = document.getElementById('cpassword').value;
    if (cpassword !== password) {
        setErrorFor('cpassword', 'Konfirmasi Password tidak sesuai');
        isValid = false;
    } else {
        setSuccessFor('cpassword');
    }

    return isValid;
}

function setErrorFor(inputId, message) {
    var inputElement = document.getElementById(inputId);
    var smallElement = inputElement.nextElementSibling.nextElementSibling; // Selecting the <small> element

    inputElement.className = 'error';
    smallElement.innerText = message;
}

function setSuccessFor(inputId) {
    var inputElement = document.getElementById(inputId);
    inputElement.className = 'success';
}

function isValidEmail(email) {
    // Simple email validation, you may want to use a more robust solution
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
