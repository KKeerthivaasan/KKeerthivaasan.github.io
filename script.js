// Greeting on load
window.onload = function () {
  alert("Welcome to Keerthivaasan's Engineering Portfolio!");
};

// Toggle theme
document.getElementById('themeToggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

// Collapsible projects
const coll = document.getElementsByClassName('collapsible');
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
  });
}

// Scroll animations
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Contact form (stub, replace with real backend or EmailJS)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("statusMsg").innerText = "Sending message...";
  
  setTimeout(() => {
    document.getElementById("statusMsg").innerText = "Thank you! Your message has been sent.";
    document.getElementById("contactForm").reset();
  }, 1500);
});
