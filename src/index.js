'use-strict';
const menuBtn = document.querySelector('.switch');
const navBar = document.querySelector('.nav-bar');
const navHead = document.querySelector('.nav-head');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('fa-bars');
  menuBtn.classList.toggle('fa-xmark');
  navBar.classList.toggle('hidden');
  navBar.classList.toggle('bg-babyblue');
  navBar.classList.toggle('flex');
  navBar.classList.toggle('flex-col');
  navBar.classList.toggle('items-start');
  navBar.classList.toggle('absolute');
  navBar.classList.toggle('top-0');
  navBar.classList.toggle('left-0');
  navHead.classList.toggle('top-0');
  navHead.classList.toggle('left-0');
  navBar.classList.toggle('space-x-14');
  navBar.classList.toggle('space-y-14');
  navBar.classList.toggle('my-5');
  navBar.classList.toggle('py-5');
  navHead.classList.toggle('w-full');
  navBar.classList.toggle('w-full');
  navHead.classList.toggle('overflow-y-visible');
  //   overlay.classList.toggle('hidden');
});

// The plan is to make the navbar work and toggle when its toggled
