const stickyButton = document.querySelector('.sticky-button');
const pricing2Section = document.querySelector('.pricing2-section');

function checkStickyButtonVisibility() {
  if (!stickyButton || !pricing2Section) return;
  
  const stickyButtonRect = stickyButton.getBoundingClientRect();
  const pricing2SectionRect = pricing2Section.getBoundingClientRect();
  
  const windowHeight = window.innerHeight;
  const pricing2Top = pricing2SectionRect.top;
  
  if (pricing2Top < windowHeight - 100) {
    stickyButton.classList.add('hide-sticky-button');
  } else {
    stickyButton.classList.remove('hide-sticky-button');
  }
}

window.addEventListener('scroll', checkStickyButtonVisibility);

document.addEventListener('DOMContentLoaded', checkStickyButtonVisibility);