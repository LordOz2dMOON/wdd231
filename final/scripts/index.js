// Player Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    const slideCount = slides.length;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateCarousel();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    // Button events
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Indicator events
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });

    // Auto-advance (optional)
    // setInterval(nextSlide, 5000);
});

// Mobile Navigation
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        const mobileNav = document.getElementById('mobileNav');
        const closeMenu = document.getElementById('closeMenu');
        
        hamburgerMenu.addEventListener('click', () => {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeMenu.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Close mobile nav when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileNav.classList.contains('active')) {
                if (!mobileNav.contains(e.target) && e.target !== hamburgerMenu) {
                    mobileNav.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
        
        // Player Spotlight Rotation
        const players = document.querySelectorAll('.player-content');
        const prevBtn = document.getElementById('prevPlayer');
        const nextBtn = document.getElementById('nextPlayer');
        let currentPlayerIndex = 0;
        
        function showPlayer(index) {
            players.forEach(player => player.classList.remove('active'));
            players[index].classList.add('active');
        }
        
        prevBtn.addEventListener('click', () => {
            currentPlayerIndex--;
            if (currentPlayerIndex < 0) currentPlayerIndex = players.length - 1;
            showPlayer(currentPlayerIndex);
        });
        
        nextBtn.addEventListener('click', () => {
            currentPlayerIndex++;
            if (currentPlayerIndex >= players.length) currentPlayerIndex = 0;
            showPlayer(currentPlayerIndex);
        });
        
        // Auto-rotate player spotlight
        setInterval(() => {
            currentPlayerIndex++;
            if (currentPlayerIndex >= players.length) currentPlayerIndex = 0;
            showPlayer(currentPlayerIndex);
        }, 8000);
        
        // Data fetching simulation
        document.addEventListener('DOMContentLoaded', () => {
            // Simulate fetching data from an API
            console.log('Fetching data from Arsenal Analytics API...');
            
            setTimeout(() => {
                // This is where real API data would be processed
                console.log('Data loaded successfully');
                
                // Update UI with dynamic data
                document.querySelector('.stat-number:nth-child(1)').textContent = '88';
                document.querySelector('.stat-number:nth-child(2)').textContent = '18';
            }, 1500);
        });