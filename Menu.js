// Grab the elements from the HTML by their IDs so we can control them with JavaScript

const menu = document.getElementById('menu');
// "menu" is the hamburger button in the topbar

const dropdown = document.getElementById('dropdown');
// "dropdown" is the navigation menu that opens when the hamburger is clicked

const historyBtn = document.getElementById('history-btn');
// "history-btn" is the "History" row inside the dropdown

const subdropdown = document.getElementById('subdropdown');
// "subdropdown" is the nested year list that appears when History is clicked


// When the hamburger button is clicked, toggle the menu open or closed
menu.addEventListener('click', (e) => {
  e.stopPropagation();
  // e.stopPropagation() prevents this click from bubbling up to the document listener below
  // Without it, the document listener would immediately close the menu right after opening it

  menu.classList.toggle('open');
  // Adds "open" to .menu if it's not there, removes it if it is
  // The "open" class in Home.css animates the three bars into an X shape

  dropdown.classList.toggle('open');
  // Adds/removes "open" on .dropdown, which shows or hides the nav menu via Home.css
});


// When the "History" row is clicked, toggle the subdropdown open or closed
historyBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  // Stops this click from bubbling to the document listener, which would close everything

  historyBtn.classList.toggle('open');
  // Adds/removes "open" on .historymenu, which rotates the .arrow in Home.css

  subdropdown.classList.toggle('open');
  // Adds/removes "open" on .subdropdown, which shows or hides the year list via Home.css
});


// When the user clicks anywhere else on the page, close all menus
document.addEventListener('click', () => {
  menu.classList.remove('open');
  // Resets the hamburger icon back to three bars

  dropdown.classList.remove('open');
  // Hides the dropdown nav menu

  historyBtn.classList.remove('open');
  // Resets the .arrow on History back to pointing right

  subdropdown.classList.remove('open');
  // Hides the year subdropdown
});
// =====================
// THEME TOGGLE LOGIC
// =====================

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');
const screenshot = document.getElementById('screenshot');

function applyTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark');
    themeToggle.checked = true;
    themeText.textContent = 'Dark Mode';
    screenshot.src = 'Gallery/Other/3606LogoDark.png';
  } else {
    document.body.classList.remove('dark');
    themeToggle.checked = false;
    themeText.textContent = 'Light Mode';
    screenshot.src = 'Gallery/Other/3606Logo.png';
  }
}

// On page load, restore the saved preference from localStorage
const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme === 'dark');

// When the toggle is clicked, flip the theme and save the preference
themeToggle.addEventListener('change', (e) => {
  const isDark = e.target.checked;
  applyTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Prevent the theme row click from closing the dropdown
document.getElementById('theme-row').addEventListener('click', (e) => {
  e.stopPropagation();
});