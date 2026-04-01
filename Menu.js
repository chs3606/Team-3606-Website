// Grab the elements from the HTML by their IDs so we can control them with JavaScript

const menu = document.getElementById('menu');
// "menu" is the hamburger button in the topbar

const dropdown = document.getElementById('dropdown');
// "dropdown" is the navigation menu that opens when the hamburger is clicked

const pastyearsBtn = document.getElementById('pastyears-btn');
// "pastyears-btn" is the "Past Years" row inside the dropdown

const subdropdown = document.getElementById('subdropdown');
// "subdropdown" is the nested year list that appears when Past Years is clicked


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


// When the "Past Years" row is clicked, toggle the subdropdown open or closed
pastyearsBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  // Stops this click from bubbling to the document listener, which would close everything

  pastyearsBtn.classList.toggle('open');
  // Adds/removes "open" on .pastyearsmenu, which rotates the .arrow in Home.css

  subdropdown.classList.toggle('open');
  // Adds/removes "open" on .subdropdown, which shows or hides the year list via Home.css
});


// When the user clicks anywhere else on the page, close all menus
document.addEventListener('click', () => {
  menu.classList.remove('open');
  // Resets the hamburger icon back to three bars

  dropdown.classList.remove('open');
  // Hides the dropdown nav menu

  pastyearsBtn.classList.remove('open');
  // Resets the .arrow on Past Years back to pointing right

  subdropdown.classList.remove('open');
  // Hides the year subdropdown
});