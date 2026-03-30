const menu = document.getElementById('menu');
const dropdown = document.getElementById('dropdown');
const pastyearsBtn = document.getElementById('pastyears-btn');
const subdropdown = document.getElementById('subdropdown');

menu.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.toggle('open');
  dropdown.classList.toggle('open');
});

pastyearsBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  pastyearsBtn.classList.toggle('open');
  subdropdown.classList.toggle('open');
});

document.addEventListener('click', () => {
  menu.classList.remove('open');
  dropdown.classList.remove('open');
  pastyearsBtn.classList.remove('open');
  subdropdown.classList.remove('open');
});