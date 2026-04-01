document.querySelectorAll('.college-carousel-container').forEach(container => {
  const carousel = container.querySelector('.college-carousel');
  const leftBtn = container.querySelector('.scroll-btn.left');
  const rightBtn = container.querySelector('.scroll-btn.right');

  leftBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });
});


