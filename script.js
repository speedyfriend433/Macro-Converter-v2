// Dark mode toggle functionality
function initTheme() {
  const toggleBtn = document.createElement('button');
  toggleBtn.classList.add('theme-toggle');
  toggleBtn.innerHTML = '🌓';
  document.body.appendChild(toggleBtn);

  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// Add fade-in animation to elements
function addAnimations() {
  const elements = document.querySelectorAll('.container, button, input, select, textarea');
  elements.forEach(element => {
    element.classList.add('fade-in');
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  addAnimations();
});