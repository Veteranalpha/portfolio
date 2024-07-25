'use-strict';
const menuBtn = document.querySelector('.switch');
console.log(menuBtn);

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('fa-bars');
  menuBtn.classList.toggle('fa-xmark');
});
