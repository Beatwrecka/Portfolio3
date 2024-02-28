let index = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-images img');
  slides[index].style.display = 'none';
  index = (index + step + slides.length) % slides.length;
  slides[index].style.display = 'block';
}
