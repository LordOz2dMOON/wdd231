// Match data
        const matches = [
            {
                id: 1,
                date: "Apr 23, 2024",
                opponent: "Chelsea",
                venue: "Emirates Stadium",
                competition: "Premier League",
                status: "upcoming",
                score: null,
                time: "20:00"
            },
            {
                id: 2,
                date: "Apr 28, 2024",
                opponent: "Tottenham",
                venue: "Tottenham Hotspur Stadium",
                competition: "Premier League",
                status: "upcoming",
                score: null,
                time: "14:00"
            },
            {
                id: 3,
                date: "May 4, 2024",
                opponent: "Bournemouth",
                venue: "Emirates Stadium",
                competition: "Premier League",
                status: "upcoming",
                score: null,
                time: "15:00"
            },
            {
                id: 4,
                date: "Apr 14, 2024",
                opponent: "Aston Villa",
                venue: "Emirates Stadium",
                competition: "Premier League",
                status: "recent",
                score: "0-2",
                result: "loss"
            },
            {
                id: 5,
                date: "Apr 9, 2024",
                opponent: "Bayern Munich",
                venue: "Allianz Arena",
                competition: "Champions League",
                status: "recent",
                score: "2-2",
                result: "draw"
            },
            {
                id: 6,
                date: "Apr 6, 2024",
                opponent: "Brighton",
                venue: "Amex Stadium",
                competition: "Premier League",
                status: "recent",
                score: "3-0",
                result: "win"
            }
        ];

        // DOM elements
        const matchesGrid = document.getElementById('matchesGrid');
        const fixtureButtons = document.querySelectorAll('.fixture-btn');
        const predictionForm = document.getElementById('predictionForm');
        const predictionsGrid = document.getElementById('predictionsGrid');
        const matchModal = document.getElementById('matchModal');
        const closeModal = document.getElementById('closeModal');
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        const mobileNav = document.getElementById('mobileNav');
        const closeMenu = document.getElementById('closeMenu');
        
        // Load predictions from localStorage
        let predictions = JSON.parse(localStorage.getItem('predictions')) || [];

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            renderMatches(matches);
            renderPredictions();
            setupEventListeners();
        });

        // Render match cards
        function renderMatches(matchesToRender) {
            matchesGrid.innerHTML = '';
            
            matchesToRender.forEach(match => {
                const card = document.createElement('div');
                card.className = 'match-card';
                card.dataset.id = match.id;
                
                let scoreContent = '';
                let predictionContent = '';
                let statusContent = '';
                
                if (match.status === 'upcoming') {
                    scoreContent = `<div class="match-score">${match.time}</div>`;
                    statusContent = `<div class="match-status upcoming">Upcoming</div>`;
                } else {
                    scoreContent = `<div class="match-score">${match.score}</div>`;
                    statusContent = `<div class="match-status ${match.result}">${match.result === 'win' ? 'Arsenal Win' : match.result === 'draw' ? 'Draw' : 'Arsenal Loss'}</div>`;
                    
                    // Check if there's a prediction for this match
                    const prediction = predictions.find(p => p.matchId == match.id);
                    if (prediction) {
                        predictionContent = `
                            <div class="match-prediction">
                                <div class="prediction-label">Your Prediction</div>
                                <div class="prediction-value">${prediction.arsenalScore}-${prediction.opponentScore} (${prediction.outcome})</div>
                            </div>
                        `;
                    }
                }
                
                card.innerHTML = `
                    <div class="match-card-header">
                        <div class="match-date">${match.date}</div>
                        <div class="match-competition">${match.competition}</div>
                    </div>
                    <div class="match-card-body">
                        <div class="match-teams">
                            <div class="team">
                                <div class="team-logo">🔴</div>
                                <div class="team-name">Arsenal</div>
                            </div>
                            <div class="vs">vs</div>
                            <div class="team">
                                <div class="team-logo">${match.opponent === 'Chelsea' ? '🔵' : match.opponent === 'Tottenham' ? '⚪' : '🔵'}</div>
                                <div class="team-name">${match.opponent}</div>
                            </div>
                        </div>
                        ${scoreContent}
                        ${predictionContent}
                        <div style="text-align: center;">
                            ${statusContent}
                        </div>
                    </div>
                `;
                matchesGrid.appendChild(card);
            });
        }

        // Render predictions
        function renderPredictions() {
            predictionsGrid.innerHTML = '';
            
            if (predictions.length === 0) {
                predictionsGrid.innerHTML = '<p>No predictions yet. Make your first prediction above!</p>';
                return;
            }
            
            predictions.slice(0, 4).forEach(prediction => {
                const match = matches.find(m => m.id == prediction.matchId);
                const isCorrect = prediction.outcome === (match?.result || 'upcoming');
                
                const card = document.createElement('div');
                card.className = 'prediction-card';
                card.innerHTML = `
                    <div class="prediction-header">
                        <div><strong>${match ? `Arsenal vs ${match.opponent}` : 'Match'}</strong></div>
                        <div class="prediction-result ${isCorrect ? 'correct' : 'incorrect'}">
                            ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                        </div>
                    </div>
                    <div><strong>Prediction:</strong> ${prediction.arsenalScore}-${prediction.opponentScore} (${prediction.outcome})</div>
                    <div><strong>Man of the Match:</strong> ${prediction.motm}</div>
                    ${prediction.comments ? `<div><strong>Comments:</strong> ${prediction.comments}</div>` : ''}
                    <div style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">
                        Submitted on ${prediction.date}
                    </div>
                `;
                predictionsGrid.appendChild(card);
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

            // Fixture filtering
            fixtureButtons.forEach(button => {
                button.addEventListener('click', () => {
                    fixtureButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    
                    const filter = button.dataset.filter;
                    let filteredMatches = matches;
                    
                    if (filter === 'upcoming') {
                        filteredMatches = matches.filter(match => match.status === 'upcoming');
                    } else if (filter === 'recent') {
                        filteredMatches = matches.filter(match => match.status === 'recent');
                    } else if (filter === 'premier') {
                        filteredMatches = matches.filter(match => match.competition === 'Premier League');
                    } else if (filter === 'europe') {
                        filteredMatches = matches.filter(match => match.competition === 'Champions League');
                    } else if (filter === 'domestic') {
                        filteredMatches = matches.filter(match => match.competition !== 'Premier League' && match.competition !== 'Champions League');
                    }
                    
                    renderMatches(filteredMatches);
                });
            });

            // Match card click for modal
            matchesGrid.addEventListener('click', (e) => {
                const matchCard = e.target.closest('.match-card');
                if (matchCard) {
                    matchModal.style.display = 'flex';
                }
            });

            // Close modal
            closeModal.addEventListener('click', () => {
                matchModal.style.display = 'none';
            });
            
            // Close modal when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target === matchModal) {
                    matchModal.style.display = 'none';
                }
            });

            // Form submission
            predictionForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Form validation
                const matchSelect = document.getElementById('matchSelect');
                const prediction = document.getElementById('prediction');
                const arsenalScore = document.getElementById('arsenalScore');
                const opponentScore = document.getElementById('opponentScore');
                const motm = document.getElementById('motm');
                
                if (!matchSelect.value || !prediction.value || !arsenalScore.value || !opponentScore.value || !motm.value) {
                    alert('Please fill in all required fields');
                    return;
                }
                
                // Create prediction object
                const newPrediction = {
                    id: Date.now(),
                    matchId: parseInt(matchSelect.value),
                    outcome: prediction.value,
                    arsenalScore: parseInt(arsenalScore.value),
                    opponentScore: parseInt(opponentScore.value),
                    motm: motm.options[motm.selectedIndex].text,
                    comments: document.getElementById('comments').value,
                    date: new Date().toLocaleDateString()
                };
                
                // Save to localStorage
                predictions.push(newPrediction);
                localStorage.setItem('predictions', JSON.stringify(predictions));
                
                // Update UI
                renderPredictions();
                
                // Reset form
                predictionForm.reset();
                
                // Show success message
                alert('Prediction submitted successfully!');
            });
        }