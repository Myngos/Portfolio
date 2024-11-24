// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

function toggleTheme() {
    body.classList.toggle('dark');
    themeIcon.classList.toggle('uil-sun');
    themeIcon.classList.toggle('uil-moon');
    
    // Save theme preference
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
}

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    toggleTheme();
}

themeToggle.addEventListener('click', toggleTheme);

// Project Data
const projects = [
    {
        title: 'AI-Powered Analytics Platform',
        description: 'A machine learning platform that analyzes user behavior and provides actionable insights using vanilla JavaScript.',
        tech: ['JavaScript', 'Python', 'TensorFlow', 'AWS'],
        github: 'https://github.com',
        live: 'https://example.com'
    },
    {
        title: 'E-commerce Solution',
        description: 'Full-stack e-commerce platform with real-time inventory management and payment processing.',
        tech: ['JavaScript', 'Node.js', 'MongoDB'],
        github: 'https://github.com',
        live: 'https://example.com'
    },
    {
        title: 'Social Media Dashboard',
        description: 'Comprehensive dashboard for managing multiple social media accounts with analytics and scheduling.',
        tech: ['JavaScript', 'Express', 'PostgreSQL'],
        github: 'https://github.com'
    },
    {
        title: 'Real-time Collaboration Tool',
        description: 'WebSocket-based collaboration tool for remote teams with document sharing and video chat.',
        tech: ['JavaScript', 'WebSocket', 'WebRTC'],
        github: 'https://github.com',
        live: 'https://example.com'
    }
];

// Render Projects
const projectsContainer = document.getElementById('projects-container');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-stack">
            ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
            ${project.github ? `
                <a href="${project.github}" target="_blank" rel="noopener noreferrer">
                    <i class="uil uil-github"></i>
                </a>
            ` : ''}
            ${project.live ? `
                <a href="${project.live}" target="_blank" rel="noopener noreferrer">
                    <i class="uil uil-external-link-alt"></i>
                </a>
            ` : ''}
        </div>
    `;
    
    projectsContainer.appendChild(projectCard);
});

// Update Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate sections on scroll
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});