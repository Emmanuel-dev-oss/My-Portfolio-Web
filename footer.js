document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year automatically
    const yearElement = document.getElementById('currentYear');
    yearElement.textContent = new Date().getFullYear();
    
    // Back to top functionality
    const backToTopButton = document.getElementById('backToTop');
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    // Initialize back to top button as hidden
    backToTopButton.style.opacity = '0';
    backToTopButton.style.visibility = 'hidden';
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        
        if (emailInput.value) {
            alert('Thank you for subscribing! You\'ll hear from me soon.');
            emailInput.value = '';
        }
    });
    
    // Simulate increasing visitor count
    const visitorCountElement = document.getElementById('visitorCount');
    let count = 1247;
    
    setInterval(() => {
        count += Math.floor(Math.random() * 3);
        visitorCountElement.textContent = count.toLocaleString();
    }, 60000);
});