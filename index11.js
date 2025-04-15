document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

  
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;


    if (name === '') {
      document.getElementById('nameError').textContent = 'Name is required.';
      isValid = false;
    }

  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Enter a valid email.';
      isValid = false;
    }

  
    if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
      isValid = false;
    }

    // Confirm password
    if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
      isValid = false;
    }

  
    if (isValid) {
      alert('Form submitted successfully!');
    
    }
  });


