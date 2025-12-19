// Typing animation
const titles = ["Computer engineer", "Software engineer", "full-stack Dev.", "lover of AI", "Problem-solver", "Creative-Coder"];
const typingElement = document.getElementById('typing-text');
const cursor = document.querySelector('.cursor');

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let deletingDelay = 50;
let pauseDelay = 2000;

function type() {
const currentTitle = titles[titleIndex];

if (isDeleting) {
    // Remove characters
    typingElement.textContent = currentTitle.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = deletingDelay;
} else {
    // Add characters
    typingElement.textContent = currentTitle.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 100;
}

// Check if complete
if (!isDeleting && charIndex === currentTitle.length) {
    typingDelay = pauseDelay;
    isDeleting = true;
} else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex++;
    if (titleIndex === titles.length) titleIndex = 0;
    typingDelay = 500;
}

setTimeout(type, typingDelay);
}

// Initialize typing effect
setTimeout(type, 1000);

// Create particles
const particlesContainer = document.getElementById('particles');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
const particle = document.createElement('div');
particle.classList.add('particle');

// Random properties
const size = Math.random() * 4 + 1;
const posX = Math.random() * 100;
const posY = Math.random() * 100;
const delay = Math.random() * 5;
const duration = Math.random() * 5 + 5;

particle.style.width = `${size}px`;
particle.style.height = `${size}px`;
particle.style.left = `${posX}%`;
particle.style.top = `${posY}%`;
particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

particlesContainer.appendChild(particle);
}

// Add floating animation for particles
const style = document.createElement('style');
style.textContent = `
@keyframes float {
    0%, 100% { transform: translate(0, 0); opacity: 0.7; }
    25% { transform: translate(30px, -30px); opacity: 0.4; }
    50% { transform: translate(-20px, 20px); opacity: 0.6; }
    75% { transform: translate(-30px, 30px); opacity: 0.4; }
}
`;
document.head.appendChild(style);

// Mouse move effect for background
document.addEventListener('mousemove', (e) => {
const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

const glow = document.querySelector('.glow');
glow.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;

const particles = document.querySelectorAll('.particle');
particles.forEach(particle => {
    const speed = parseInt(particle.style.width) * 1;
    particle.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
});
});


//== Animation for elements when they come into view ==//
function animateOnScroll() {
    const elements = document.querySelectorAll('.section-title, .about-text h3, .about-text p, .animated, .project-head, .project-card, .filter-bar, .skills-header, .skill-filter-btn, .tech-graph, .contact, .contact-header, .contact-content, .contact-info, .connect-text, .contact-details, .social-icons, .contact-form, .form-group, .btn-submit, .map-section, footer, .footer-info, .footer-links, .footer-skills, .recent-posts, .footer-newsletter, .visitor-count');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;


        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';

        }
    });
}// Set initial state for animated elements
document.querySelectorAll('.section-title, .about-text h3, .about-text p, .animated, .project-head, .project-card, .filter-bar, .skills-header, .skill-filter-btn, .tech-graph, .contact, .contact-header, .contact-content, .contact-info, .connect-text, .contact-details, .social-icons, .contact-form, .form-group, .btn-submit, .map-section, footer, .footer-info, .footer-links, .footer-skills, .recent-posts, .footer-newsletter, .visitor-count').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(40px)';
    element.style.transition = 'all 0.6s ease-out';
});// Run on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.trait-item, .tech-skills-container');

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateX(0px)';
            card.style.transition = 'all 0.6s ease-out';
        }
    })
});
document.querySelectorAll('.trait-item, .tech-skills-container').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateX(-40px)';
    card.style.transition = 'all 0.6s ease-out';
})



//== Scroll effect for navbar ==//
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



//== Get all nav-links and sections ==//
const navLink = document.querySelectorAll('.nav-link');
// const mobileLink = document.querySelectorAll('.mobile-links a');
const sections = document.querySelectorAll('section');
    // Function to update active links
    function updateActiveNav() {
        let current = '';

        // Check which section is in veiw
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - 200 && 
               window.scrollY < sectionTop + sectionHeight - 200) {
            current = section.getAttribute('id');
        }
    });
    
    // Update nav links
    navLink.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    //Update mobile links
    mobileLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`){
            link.classList.add('active');
        }
    });
} // Run on page load and scroll
window.addEventListener('load', updateActiveNav);
window.addEventListener('scroll', updateActiveNav);


//== Mobile menu functionality ==//
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent body scrolling when menu is open
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.mobile-links a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = 'auto';
    hamburger.focus();
    if (mobileMenu.classList.toggle('active')) {
        mobileMenu.classList.remove('active');
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // Tab key cycles through focusable elements
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        hamburger.focus();
    }
});

// Add focus styles for accessibility
const focusableElements = document.querySelectorAll('a, button, [tabindex]');
focusableElements.forEach(el => {
    el.addEventListener('focus', () => {
        el.style.outline = `2px solid var(--accent)`;
        el.style.outlineOffset = '2px';
    });
    
    el.addEventListener('blur', () => {
        el.style.outline = 'none';
    });
});



//== Animate timeline items when they come into view ==//
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    animateTimeline();
    
    // Animate skill progress bars on hover
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const progressBar = item.querySelector('.skill-progress-bar');
            progressBar.style.transform = 'scaleX(1)';
        });
        
        item.addEventListener('mouseleave', () => {
            const progressBar = item.querySelector('.skill-progress-bar');
            progressBar.style.transform = 'scaleX(0)';
            progressBar.style.transition = 'transform 0.5s ease';
        });
    });
});

//Show more and show less functionality for categories
const showMoreBtn = document.getElementById('showMoreBtn');
const hiddenCategories = document.querySelectorAll('.hidden-category');
let showAllCategories = false;

showMoreBtn.addEventListener('click', () => {
   showAllCategories = !showAllCategories;

   if (showAllCategories) {
      hiddenCategories.forEach(category => {
         category.style.display = 'flex';
      })
      showMoreBtn.innerHTML = '<span>Show less</span><i class="fas fa-chevron-up"></i>';
   } else {
      hiddenCategories.forEach(category => {
         category.style.display = 'none';
      })
      showMoreBtn.innerHTML = '<span>Show more</span><i class="fas fa-chevron-down"></i>';
   }
});

// //== Projeect Filter ==//
// const filterBtns = document.querySelectorAll(".filter-btn");
// const projectCards = document.querySelectorAll(".filtered-card");

// filterBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         filterBtns.forEach(b => b.classList.remove("active"));
//         btn.classList.add("active");

//         const tech = btn.dataset.tech;

//         // Show all if "all" is selected
//         if (tech === "all") {
//           projectCards.forEach(card => {
//             card.style.display = "block";
//           });
//           return;
//         }

//         projectCards.forEach(card => {
//           const cardTech = card.dataset.tech;

//           if (cardTech.includes(tech) ) {
//             card.style.display = "block";
//           } else {
//             card.style.display = "none";
//           }
//         });
//     });
// });