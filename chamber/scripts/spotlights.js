async function loadSpotlights() {
    try {
        const response = await fetch('../chamber/data/members.json');
        const members = await response.json();
        displaySpotlights(members.filter(m => m.membershipLevel >= 2));
    } catch (error) {
        console.error('Error loading spotlights:', error);
    }
}

function displaySpotlights(members) {
    const container = document.getElementById('spotlight-container');
    // Display logic for spotlights
}

// Initialize
loadSpotlights();