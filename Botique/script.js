// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId); // Find the target section
        if (targetSection) {
            // Smoothly scroll to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dynamic header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.95)'; // Darker background when scrolled
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)'; // Original background when at the top
    }
});

// Form submission handler
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Simulate form submission (replace with actual API call or backend logic)
        console.log('Form submitted with data:', data);

        // Show a success message
        alert('Thank you for contacting us! We will get back to you soon.');

        // Reset the form
        this.reset();
    });
}

// Optional: Add a scroll-to-top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '↑';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.padding = '10px 15px';
scrollToTopButton.style.backgroundColor = '#ffd700';
scrollToTopButton.style.color = '#000';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '50%';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
scrollToTopButton.style.transition = 'background-color 0.3s ease, transform 0.3s ease';
scrollToTopButton.style.display = 'none'; // Hide by default
document.body.appendChild(scrollToTopButton);

// Show/hide scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Optional: Add hover effect to scroll-to-top button
scrollToTopButton.addEventListener('mouseenter', () => {
    scrollToTopButton.style.backgroundColor = '#c0a050';
    scrollToTopButton.style.transform = 'scale(1.1)';
});

scrollToTopButton.addEventListener('mouseleave', () => {
    scrollToTopButton.style.backgroundColor = '#ffd700';
    scrollToTopButton.style.transform = 'scale(1)';
});