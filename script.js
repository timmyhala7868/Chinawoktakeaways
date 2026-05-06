// Function to handle the scroll reveal animation
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150; // Triggers when 150px of the element is visible

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
};

// Run on scroll
window.addEventListener('scroll', reveal);

// Run once on load (in case images are already in view)
window.addEventListener('load', reveal);

window.addEventListener('DOMContentLoaded', () => {
  fetch('menu.txt')
    .then(response => response.text())
    .then(data => {
      // Find the specific div in your HTML and put the text inside it
      const menuContainer = document.getElementById('menu-container1');
      if (menuContainer) {
        menuContainer.innerText = data;
      }
    })
    .catch(error => console.error('Could not load menu:', error));
});
