document.addEventListener("DOMContentLoaded", function() {
    const toggler = document.getElementById("navbar-toggler");
    const navbarCollapse = document.getElementById("navbarSupportContent");

    toggler.addEventListener("click", function() {
        navbarCollapse.classList.toggle("show");
    });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in Effect on Scroll
const faders = document.querySelectorAll('.revel');
const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});