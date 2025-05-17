// Greet on page load
window.onload = function () {
  alert("Welcome to Keerthivaasan's Engineering Portfolio!");
};

// Theme toggle
document.getElementById('themeToggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

// Collapsible sections
const coll = document.getElementsByClassName('collapsible');
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}
