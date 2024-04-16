document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
   
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    
    alert("Login successful");

    
    window.location.href = 'frontpage.html';
});
