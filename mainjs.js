// JavaScript code for comment submission and display
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('comment-name').value;
    let content = document.getElementById('comment-content').value;
    if (name && content) {
        let commentItem = document.createElement('li');
        commentItem.innerHTML = `<strong>${name}:</strong> ${content}`;
        document.getElementById('comments-list').appendChild(commentItem);
        document.getElementById('comment-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// JavaScript code for login/register functionality
document.getElementById('login-btn').addEventListener('click', function() {
    // Add code for login functionality
});

document.getElementById('register-btn').addEventListener('click', function() {
    // Add code for registration functionality
});
