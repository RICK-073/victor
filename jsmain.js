// script.js

// Function to hide the loading screen and show the main content
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Hide the loading screen
    loadingScreen.style.display = 'none';

    // Show the main content
    mainContent.style.display = 'block';
}

// Event listener for the DOM content loaded event
document.addEventListener('DOMContentLoaded', function() {
    // Simulate a delay for loading (optional, for demonstration purposes)
    setTimeout(hideLoadingScreen, 2000);
});
