// Hide/show navbar on scroll
let lastScrollTop = 0;
let scrollTimeout;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    // Clear the timeout throughout the scroll
    clearTimeout(scrollTimeout);
    
    // Set a timeout to run after scrolling ends
    scrollTimeout = setTimeout(function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            // Hide navbar when scrolled past 50px
            header.classList.add('hidden');
        } else {
            // Show navbar only when at the top
            header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, 0); // Wait 50ms after scroll stops
}, false);
