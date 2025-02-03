// Select the toggle button and icon
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Function to toggle the theme
function toggleTheme() {
 // Check the current theme
 const currentTheme = document.documentElement.getAttribute('data-theme');
 const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

 // Set the new theme
 document.documentElement.setAttribute('data-theme', newTheme);

 // Update the icon based on the new theme
 themeIcon.textContent = newTheme === 'dark' ? '🌞' : '🌙';

 // Save the user's preference to localStorage
 localStorage.setItem('theme', newTheme);
}

// Event listener for the button
themeToggle.addEventListener('click', toggleTheme);

// Load the saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
 const savedTheme = localStorage.getItem('theme') || 'light';
 document.documentElement.setAttribute('data-theme', savedTheme);
 themeIcon.textContent = savedTheme === 'dark' ? '🌞' : '🌙';
});
