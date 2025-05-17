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
/* Animations */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Project card with thumbnail */
.project {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  background: #fdfdfd;
}
.project img {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  margin-top: 10px;
}
form {
  max-width: 500px;
  margin-top: 20px;
}
input, textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
}
button[type="submit"] {
  padding: 10px 20px;
  border: none;
  background-color: #3498db;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
}
#statusMsg {
  margin-top: 10px;
  font-style: italic;
}
