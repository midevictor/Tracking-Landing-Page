const btnClose = document.querySelector('.close-icon');
const btnOpen = document.querySelector('.hamburger-icon');
const nav = document.querySelector('.list');

btnOpen.addEventListener('click', () => {
  nav.style.display = 'block';
  btnClose.style.display = 'block';
  btnOpen.style.display = 'none';
} );
btnClose.addEventListener('click', () => {
  nav.style.display = 'none';
  btnClose.style.display = 'none';
  btnOpen.style.display = 'block';
} );
