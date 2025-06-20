 // Player data
        const players = [
            {
                id: 1,
                name: "Bukayo Saka",
                position: "Forward",
                age: 22,
                nationality: "England",
                number: 7,
                appearances: 37,
                goals: 16,
                assists: 9,
                minutes: 3120,
                passAccuracy: 84,
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 200 250'%3E%3Crect width='200' height='250' fill='%23DC143C' opacity='0.2'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%231A1A2E'/%3E%3Crect x='60' y='120' width='80' height='100' fill='%23FFD700'/%3E%3C/svg%3E"
            },
            {
                id: 2,
                name: "Martin Ødegaard",
                position: "Midfielder",
                age: 25,
                nationality: "Norway",
                number: 8,
                appearances: 35,
                goals: 8,
                assists: 10,
                minutes: 2895,
                passAccuracy: 89,
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 200 250'%3E%3Crect width='200' height='250' fill='%23DC143C' opacity='0.2'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%231A1A2E'/%3E%3Crect x='60' y='120' width='80' height='100' fill='%23FFD700'/%3E%3C/svg%3E"
            },
            {
                id: 3,
                name: "William Saliba",
                position: "Defender",
                age: 23,
                nationality: "France",
                number: 2,
                appearances: 38,
                goals: 2,
                assists: 1,
                minutes: 3420,
                passAccuracy: 91,
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 200 250'%3E%3Crect width='200' height='250' fill='%23DC143C' opacity='0.2'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%231A1A2E'/%3E%3Crect x='60' y='120' width='80' height='100' fill='%23FFD700'/%3E%3C/svg%3E"
            },
            {
                id: 4,
                name: "Gabriel Jesus",
                position: "Forward",
                age: 27,
                nationality: "Brazil",
                number: 9,
                appearances: 32,
                goals: 8,
                assists: 7,
                minutes: 2180,
                passAccuracy: 82,
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 200 250'%3E%3Crect width='200' height='250' fill='%23DC143C' opacity='0.2'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%231A1A2E'/%3E%3Crect x='60' y='120' width='80' height='100' fill='%23FFD700'/%3E%3C/svg%3E"
            },
            {
                id: 5,
                name: "Declan Rice",
                position: "Midfielder",
                age: 25,
                nationality: "England",
                number: 41,
                appearances: 40,
                goals: 7,
                assists: 8,
                minutes: 3540,
                passAccuracy: 90,
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 200 250'%3E%3Crect width='200' height='250' fill='%23DC143C' opacity='0.2'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%231A1A2E'/%3E%3Crect x='60' y='120' width='80' height='100' fill='%23FFD700'/%3E%3C/svg%3E"
            },
            {
                id: 6,
                name: "Gabriel Magalhães",
                position: "Defender",
                age: 26,
                nationality: "Brazil",
                number: 6,
                appearances: 36,
                goals: 4,
                assists: 0,
                minutes: 3240,
                passAccuracy: 88,
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 200 250'%3E%3Crect width='200' height='250' fill='%23DC143C' opacity='0.2'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%231A1A2E'/%3E%3Crect x='60' y='120' width='80' height='100' fill='%23FFD700'/%3E%3C/svg%3E"
            },
            {
                id: 7,
                name: "Kai Havertz",
                position: "Forward",
                age: 24,
                nationality: "Germany",
                number: 29,
                appearances: 38,
                goals: 12,
                assists: 6,
                minutes: 2985,
                passAccuracy: 83,
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 200 250'%3E%3Crect width='200' height='250' fill='%23DC143C' opacity='0.2'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%231A1A2E'/%3E%3Crect x='60' y='120' width='80' height='100' fill='%23FFD700'/%3E%3C/svg%3E"
            },
            {
                id: 8,
                name: "Ben White",
                position: "Defender",
                age: 26,
                nationality: "England",
                number: 4,
                appearances: 37,
                goals: 2,
                assists: 4,
                minutes: 3330,
                passAccuracy: 86,
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 200 250'%3E%3Crect width='200' height='250' fill='%23DC143C' opacity='0.2'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%231A1A2E'/%3E%3Crect x='60' y='120' width='80' height='100' fill='%23FFD700'/%3E%3C/svg%3E"
            },
            {
                id: 9,
                name: "Aaron Ramsdale",
                position: "Goalkeeper",
                age: 26,
                nationality: "England",
                number: 1,
                appearances: 15,
                goals: 0,
                assists: 0,
                minutes: 1350,
                passAccuracy: 78,
                cleanSheets: 6,
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 200 250'%3E%3Crect width='200' height='250' fill='%23DC143C' opacity='0.2'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%231A1A2E'/%3E%3Crect x='60' y='120' width='80' height='100' fill='%23FFD700'/%3E%3C/svg%3E"
            },
            {
                id: 10,
                name: "Leandro Trossard",
                position: "Forward",
                age: 29,
                nationality: "Belgium",
                number: 19,
                appearances: 34,
                goals: 11,
                assists: 2,
                minutes: 1875,
                passAccuracy: 81,
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 200 250'%3E%3Crect width='200' height='250' fill='%23DC143C' opacity='0.2'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%231A1A2E'/%3E%3Crect x='60' y='120' width='80' height='100' fill='%23FFD700'/%3E%3C/svg%3E"
            },
            {
                id: 11,
                name: "Thomas Partey",
                position: "Midfielder",
                age: 30,
                nationality: "Ghana",
                number: 5,
                appearances: 18,
                goals: 1,
                assists: 2,
                minutes: 1260,
                passAccuracy: 89,
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 200 250'%3E%3Crect width='200' height='250' fill='%23DC143C' opacity='0.2'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%231A1A2E'/%3E%3Crect x='60' y='120' width='80' height='100' fill='%23FFD700'/%3E%3C/svg%3E"
            },
            {
                id: 12,
                name: "Jurriën Timber",
                position: "Defender",
                age: 23,
                nationality: "Netherlands",
                number: 12,
                appearances: 5,
                goals: 0,
                assists: 1,
                minutes: 375,
                passAccuracy: 87,
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 200 250'%3E%3Crect width='200' height='250' fill='%23DC143C' opacity='0.2'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%231A1A2E'/%3E%3Crect x='60' y='120' width='80' height='100' fill='%23FFD700'/%3E%3C/svg%3E"
            },
            {
                id: 13,
                name: "Emile Smith Rowe",
                position: "Midfielder",
                age: 23,
                nationality: "England",
                number: 10,
                appearances: 22,
                goals: 3,
                assists: 2,
                minutes: 875,
                passAccuracy: 85,
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 200 250'%3E%3Crect width='200' height='250' fill='%23DC143C' opacity='0.2'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%231A1A2E'/%3E%3Crect x='60' y='120' width='80' height='100' fill='%23FFD700'/%3E%3C/svg%3E"
            },
            {
                id: 14,
                name: "Oleksandr Zinchenko",
                position: "Defender",
                age: 27,
                nationality: "Ukraine",
                number: 35,
                appearances: 28,
                goals: 1,
                assists: 2,
                minutes: 2160,
                passAccuracy: 90,
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 200 250'%3E%3Crect width='200' height='250' fill='%23DC143C' opacity='0.2'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%231A1A2E'/%3E%3Crect x='60' y='120' width='80' height='100' fill='%23FFD700'/%3E%3C/svg%3E"
            },
            {
                id: 15,
                name: "David Raya",
                position: "Goalkeeper",
                age: 28,
                nationality: "Spain",
                number: 22,
                appearances: 30,
                goals: 0,
                assists: 1,
                minutes: 2700,
                passAccuracy: 82,
                cleanSheets: 14,
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 200 250'%3E%3Crect width='200' height='250' fill='%23DC143C' opacity='0.2'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%231A1A2E'/%3E%3Crect x='60' y='120' width='80' height='100' fill='%23FFD700'/%3E%3C/svg%3E"
            }
        ];

        // Selected players for comparison
        let selectedPlayers = [];
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        // DOM elements
        const playersGrid = document.getElementById('playersGrid');
        const playerSearch = document.getElementById('playerSearch');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const selectedCount = document.getElementById('selectedCount');
        const comparisonModal = document.getElementById('comparisonModal');
        const closeModal = document.getElementById('closeModal');
        const playersComparison = document.getElementById('playersComparison');
        const comparisonStats = document.getElementById('comparisonStats');
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        const mobileNav = document.getElementById('mobileNav');
        const closeMenu = document.getElementById('closeMenu');
        const showComparisonBtn = document.getElementById('showComparisonBtn');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            renderPlayers(players);
            updateSelectedCount();
            setupEventListeners();
            restoreFavorites();
        });

        // Render player cards
        function renderPlayers(playersToRender) {
            playersGrid.innerHTML = '';
            
            playersToRender.forEach(player => {
                const isFavorite = favorites.includes(player.id);
                const isSelected = selectedPlayers.includes(player.id);
                
                const card = document.createElement('div');
                card.className = 'player-card';
                card.innerHTML = `
                    <div class="player-card-header">
                        <div class="player-number">${player.number}</div>
                        <img src="${player.image}" alt="${player.name}" class="player-image" loading="lazy">
                    </div>
                    <div class="player-card-body">
                        <h3 class="player-name">${player.name}</h3>
                        <div class="player-position">${player.position} | ${player.age} years</div>
                        <div class="player-stats">
                            <div class="player-stat">
                                <div class="stat-value">${player.appearances}</div>
                                <div class="stat-label">Apps</div>
                            </div>
                            <div class="player-stat">
                                <div class="stat-value">${player.goals}</div>
                                <div class="stat-label">Goals</div>
                            </div>
                            <div class="player-stat">
                                <div class="stat-value">${player.assists}</div>
                                <div class="stat-label">Assists</div>
                            </div>
                            <div class="player-stat">
                                <div class="stat-value">${player.passAccuracy}%</div>
                                <div class="stat-label">Pass Acc</div>
                            </div>
                        </div>
                        <div class="player-actions">
                            <button class="compare-btn ${isSelected ? 'selected' : ''}" data-id="${player.id}">
                                ${isSelected ? '✓ Selected' : '⚖️ Compare'}
                            </button>
                            <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${player.id}">
                                ${isFavorite ? '★ Favorited' : '☆ Favorite'}
                            </button>
                        </div>
                    </div>
                `;
                playersGrid.appendChild(card);
            });
        }

        // Set up event listeners
        function setupEventListeners() {
            // Mobile navigation
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

            // Search functionality
            playerSearch.addEventListener('input', () => {
                const searchTerm = playerSearch.value.toLowerCase();
                const filteredPlayers = players.filter(player => 
                    player.name.toLowerCase().includes(searchTerm)
                );
                renderPlayers(filteredPlayers);
            });

            // Filter buttons
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Toggle active class
                    if (button.dataset.filter === 'all') {
                        filterButtons.forEach(btn => btn.classList.remove('active'));
                        button.classList.add('active');
                        renderPlayers(players);
                    } else {
                        const [key, value] = button.dataset.filter.split(':');
                        
                        // Remove active class from "All Players" button
                        document.querySelector('[data-filter="all"]').classList.remove('active');
                        
                        // Toggle active class on clicked button
                        button.classList.toggle('active');
                        
                        // Check if any filter is active
                        const activeFilters = document.querySelectorAll('.filter-btn.active');
                        if (activeFilters.length === 0) {
                            document.querySelector('[data-filter="all"]').classList.add('active');
                            renderPlayers(players);
                            return;
                        }
                        
                        // Apply filters
                        let filteredPlayers = players;
                        
                        activeFilters.forEach(filter => {
                            const [filterKey, filterValue] = filter.dataset.filter.split(':');
                            
                            if (filterKey === 'position') {
                                filteredPlayers = filteredPlayers.filter(player => 
                                    player.position === filterValue
                                );
                            } else if (filterKey === 'age') {
                                if (filterValue === 'U23') {
                                    filteredPlayers = filteredPlayers.filter(player => player.age < 24);
                                } else if (filterValue === '24-30') {
                                    filteredPlayers = filteredPlayers.filter(player => player.age >= 24 && player.age <= 30);
                                } else if (filterValue === '31+') {
                                    filteredPlayers = filteredPlayers.filter(player => player.age > 30);
                                }
                            } else if (filterKey === 'nationality') {
                                if (filterValue === 'Other') {
                                    const topNationalities = ['England', 'Brazil', 'France'];
                                    filteredPlayers = filteredPlayers.filter(player => 
                                        !topNationalities.includes(player.nationality)
                                    );
                                } else {
                                    filteredPlayers = filteredPlayers.filter(player => 
                                        player.nationality === filterValue
                                    );
                                }
                            }
                        });
                        
                        renderPlayers(filteredPlayers);
                    }
                });
            });

            // Event delegation for player actions
            playersGrid.addEventListener('click', (e) => {
                const compareBtn = e.target.closest('.compare-btn');
                const favoriteBtn = e.target.closest('.favorite-btn');
                
                if (compareBtn) {
                    const playerId = parseInt(compareBtn.dataset.id);
                    togglePlayerSelection(playerId, compareBtn);
                }
                
                if (favoriteBtn) {
                    const playerId = parseInt(favoriteBtn.dataset.id);
                    toggleFavorite(playerId, favoriteBtn);
                }
            });

            // Comparison button
            showComparisonBtn.addEventListener('click', showComparison);

            // Modal controls
            closeModal.addEventListener('click', () => {
                comparisonModal.style.display = 'none';
            });
            
            // Close modal when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target === comparisonModal) {
                    comparisonModal.style.display = 'none';
                }
            });
        }

        // Toggle player selection for comparison
        function togglePlayerSelection(playerId, button) {
            const index = selectedPlayers.indexOf(playerId);
            
            if (index === -1) {
                if (selectedPlayers.length < 2) {
                    selectedPlayers.push(playerId);
                    button.textContent = '✓ Selected';
                    button.classList.add('selected');
                } else {
                    alert('You can only compare two players at a time. Please deselect one first.');
                }
            } else {
                selectedPlayers.splice(index, 1);
                button.textContent = '⚖️ Compare';
                button.classList.remove('selected');
            }
            
            updateSelectedCount();
            
            // Toggle comparison button visibility
            if (selectedPlayers.length === 2) {
                showComparisonBtn.style.display = 'flex';
            } else {
                showComparisonBtn.style.display = 'none';
            }
        }

        // Toggle favorite
        function toggleFavorite(playerId, button) {
            const index = favorites.indexOf(playerId);
            
            if (index === -1) {
                favorites.push(playerId);
                button.textContent = '★ Favorited';
                button.classList.add('active');
            } else {
                favorites.splice(index, 1);
                button.textContent = '☆ Favorite';
                button.classList.remove('active');
            }
            
            // Save to localStorage
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }

        // Restore favorites on page load
        function restoreFavorites() {
            favorites.forEach(playerId => {
                const btn = document.querySelector(`.favorite-btn[data-id="${playerId}"]`);
                if (btn) {
                    btn.textContent = '★ Favorited';
                    btn.classList.add('active');
                }
            });
        }

        // Update selected players count
        function updateSelectedCount() {
            selectedCount.textContent = selectedPlayers.length;
        }

        // Show player comparison
        function showComparison() {
            if (selectedPlayers.length !== 2) return;
            
            const player1 = players.find(p => p.id === selectedPlayers[0]);
            const player2 = players.find(p => p.id === selectedPlayers[1]);
            
            if (!player1 || !player2) return;
            
            // Render player comparison
            playersComparison.innerHTML = `
                <div class="player-comparison-card">
                    <img src="${player1.image}" alt="${player1.name}" class="comparison-image">
                    <h3>${player1.name}</h3>
                    <div>${player1.position} | #${player1.number}</div>
                    <div>${player1.age} years | ${player1.nationality}</div>
                </div>
                <div class="player-comparison-card">
                    <img src="${player2.image}" alt="${player2.name}" class="comparison-image">
                    <h3>${player2.name}</h3>
                    <div>${player2.position} | #${player2.number}</div>
                    <div>${player2.age} years | ${player2.nationality}</div>
                </div>
            `;
            
            // Render stats comparison
            comparisonStats.innerHTML = '';
            
            const statsToCompare = [
                { label: 'Appearances', key: 'appearances' },
                { label: 'Goals', key: 'goals' },
                { label: 'Assists', key: 'assists' },
                { label: 'Minutes Played', key: 'minutes' },
                { label: 'Pass Accuracy', key: 'passAccuracy', suffix: '%' }
            ];
            
            statsToCompare.forEach(stat => {
                const row = document.createElement('div');
                row.className = 'stat-row';
                
                const value1 = player1[stat.key];
                const value2 = player2[stat.key];
                let difference = '';
                let diffClass = '';
                
                if (typeof value1 === 'number' && typeof value2 === 'number') {
                    const diff = value1 - value2;
                    if (diff > 0) {
                        difference = `+${diff}${stat.suffix || ''}`;
                        diffClass = 'positive';
                    } else if (diff < 0) {
                        difference = `${diff}${stat.suffix || ''}`;
                        diffClass = 'negative';
                    } else {
                        difference = 'Equal';
                    }
                }
                
                row.innerHTML = `
                    <div class="stat-label">${stat.label}</div>
                    <div class="stat-value">${value1}${stat.suffix || ''}</div>
                    <div class="stat-value">${value2}${stat.suffix || ''}</div>
                    <div class="stat-difference ${diffClass}">${difference}</div>
                `;
                
                comparisonStats.appendChild(row);
            });
            
            // Show the modal
            comparisonModal.style.display = 'flex';
        }