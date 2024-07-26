'use-strict';
const menuBtn = document.querySelector('.switch');
const navBar = document.querySelector('.nav-bar');
const navHead = document.querySelector('.nav-head');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('fa-bars');
  menuBtn.classList.toggle('fa-xmark');
  mobileMenu.classList.toggle('hidden');
  //   overlay.classList.toggle('hidden');
});

// The plan is to make the navbar work and toggle when its toggled
