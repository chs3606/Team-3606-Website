const img = document.getElementById('slide-img');
const title = document.getElementById('slide-title');
const counter = document.getElementById('slide-counter');

const slides = [
  { title: "Working on the Robot at 2026 Competition 1", src: "Gallery/2026/2026WorkComp1.jpeg" },
  { title: "Working on the Robot at 2026 Competition 2", src: "Gallery/2026/2026WorkComp2.jpeg" },
  { title: "Working on the Robot at 2026 Competition 3", src: "Gallery/2026/2026WorkComp3.jpeg" },
  { title: "Working on the Robot at 2026 Competition 4", src: "Gallery/2026/2026WorkComp4.jpeg" },
  { title: "Working on the Robot at 2026 Competition 5", src: "Gallery/2026/2026WorkComp5.jpeg" },
  { title: "Working on the 2026 Robot", src: "Gallery/2026/2026WorkHome.jpeg" },
  { title: "2026 FRC Team 1", src: "Gallery/2026/2026Team1.jpeg" },
  { title: "2026 FRC Team 2", src: "Gallery/2026/2026Team2.jpeg" },
  { title: "2026 Rebuilt Match", src: "Gallery/2026/2026Play.jpeg" },
  { title: "2026 Chassis", src: "Gallery/2026/2026Chassis.jpg" },
  { title: "2026 Bumpers", src: "Gallery/2026/2026Bumpers.jpeg" },
  { title: "2026 Bot 1", src: "Gallery/2026/2026Bot1.jpeg" },
  { title: "2026 Bot 2", src: "Gallery/2026/2026Bot2.jpeg" },
  { title: "2026 Bot 3", src: "Gallery/2026/2026Bot3.jpeg" },

];

let cur = 0;

function go(n) {
  cur = (n + slides.length) % slides.length;
  img.src = slides[cur].src;
  title.textContent = slides[cur].title;
  counter.textContent = `${cur + 1} / ${slides.length}`;
}

document.getElementById('prev').onclick = () => go(cur - 1);
document.getElementById('next').onclick = () => go(cur + 1);