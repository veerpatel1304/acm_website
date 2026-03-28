document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navbar
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(link => {
        const href = link.getAttribute('href');
        // Handle root / empty and match with index.html
        if ((currentPage === '' && href === 'index.html') || currentPage === href) {
            link.classList.add('active');
            
            // Except for the button which might have a separate class
            if(link.classList.contains('btn-nav')) {
                link.classList.remove('active');
            }
        }
    });

    // Countdown Timer logic (for upcoming.html)
    const countdownEl = document.querySelector('.countdown');
    if (countdownEl) {
        // Set date to 30 days from now for demo
        const eventDate = new Date();
        eventDate.setDate(eventDate.getDate() + 30);
        
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = eventDate.getTime() - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').innerText = days.toString().padStart(2, '0');
            document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
            document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
        };
        
        setInterval(updateCountdown, 1000);
        updateCountdown();
    }
});
