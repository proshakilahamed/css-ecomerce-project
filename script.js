
// JavaScript code for slider functionality

// Get all the slide elements
const slides = Array.from(document.querySelectorAll('.slide'));

// Get all the control buttons
const controls = Array.from(document.querySelectorAll('.slider-controls button'));

// Function to show a slide
function showSlide(index) {
  // Remove the active class from all slides and control buttons
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  controls.forEach((control) => {
    control.classList.remove('active');
  });

  // Add the active class to the selected slide and control button
  slides[index].classList.add('active');
  controls[index].classList.add('active');
}

// Event listener for control button clicks
controls.forEach((control, index) => {
  control.addEventListener('click', () => {
    showSlide(index);
  });
});

// Show the initial slide
showSlide(0);
