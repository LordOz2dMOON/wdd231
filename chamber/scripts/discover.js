// Set copyright year and last modified date
document.getElementById('copyrightYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Global variable to store discover data
        let discoverData = [];

        // Visitor tracking functionality
        function displayVisitorMessage() {
            const lastVisit = localStorage.getItem('lastVisit');
            const currentDate = Date.now();
            const messageElement = document.getElementById('visitor-message');
            
            if (!lastVisit) {
                messageElement.innerHTML = '<p class="welcome-message">🌟 Welcome! Let us know if you have any questions.</p>';
            } else {
                const daysDifference = Math.floor((currentDate - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));
                
                if (daysDifference < 1) {
                    messageElement.innerHTML = '<p class="return-message">🎉 Back so soon! Awesome!</p>';
                } else {
                    const dayText = daysDifference === 1 ? 'day' : 'days';
                    messageElement.innerHTML = `<p class="return-message">👋 You last visited ${daysDifference} ${dayText} ago.</p>`;
                }
            }
            
            // Store current visit
            localStorage.setItem('lastVisit', currentDate.toString());
        }

        // Load discover data from JSON file
        async function loadDiscoverData() {
            try {
                const response = await fetch('data/discover.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                discoverData = await response.json();
                return discoverData;
            } catch (error) {
                console.error('Error loading discover data:', error);
                // Fallback error message
                const grid = document.getElementById('discover-grid');
                grid.innerHTML = `
                    <div class="error-message">
                        <h2>Unable to load content</h2>
                        <p>We're sorry, but we couldn't load the discover content at this time. Please try refreshing the page or contact us if the problem persists.</p>
                    </div>
                `;
                return [];
            }
        }
        // Load discover cards
        function loadDiscoverCards() {
            const grid = document.getElementById('discover-grid');
            
            // Clear existing content
            grid.innerHTML = '';
            
            if (discoverData.length === 0) {
                grid.innerHTML = '<p class="no-data">No discover content available at this time.</p>';
                return;
            }
            
            discoverData.forEach(item => {
                const card = document.createElement('article');
                card.className = 'discover-card';
                card.setAttribute('data-id', item.id);
                
                card.innerHTML = `
                    <h2>${item.name}</h2>
                    <figure>
                        <img src="${item.image}" alt="${item.alt}" loading="lazy">
                    </figure>
                    <address>${item.address}</address>
                    <p>${item.description}</p>
                    <button class="learn-more-btn">Learn More</button>
                `;
                
                grid.appendChild(card);
            });
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', async function() {
            displayVisitorMessage();
            
            // Show loading state
            const grid = document.getElementById('discover-grid');
            grid.innerHTML = '<div class="loading-message">Loading discover content...</div>';
            
            // Load data and then render cards
            await loadDiscoverData();
            loadDiscoverCards();
            
            // Add click event listeners to Learn More buttons
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('learn-more-btn')) {
                    const card = e.target.closest('.discover-card');
                    const itemId = card.getAttribute('data-id');
                    const item = discoverData.find(d => d.id == itemId);
                    if (item) {
                        alert(`Learn more about ${item.name}!\n\nIn a real website, this would link to detailed information or contact forms.`);
                    }
                }
            });
        });