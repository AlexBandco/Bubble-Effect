const hamburger = document.querySelector('.hamburger'), // кнопка - бургер
  navLinks = document.querySelector('.nav-links'), // ul 
  links = document.querySelectorAll('.nav-links li'); // li - лишки юэльки

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach(link => {
    link.classList.toggle('fade');
  });
});
