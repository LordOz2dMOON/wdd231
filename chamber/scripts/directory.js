// DOM Elements
const gridView = document.getElementById('gridView');
const listView = document.getElementById('listView');
const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Fetch member data from JSON file
async function fetchMemberData() {
    try {
        const response = await fetch('../chamber/data/members.json');
        console.log('Response status:', response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching member data:', error);
        return [
            {
                name: "Idaho Websites",
                address: "2115 S Vista Avenue, Boise ID 83705",
                phone: "(208) 342-9386",
                website: "https://idahowebsites.com/",
                image: "https://placehold.co/300x200?text=Idaho+Websites",
                membershipLevel: 3,
                description: "Fallback data - Professional web design and development services"
            }
        ];
    }
}

// Display members in grid view
function displayGrid(memberData) {
    console.log('Displaying grid with:', memberData);
    gridView.innerHTML = '';
    memberData.forEach(member => {
        const levelClass = getLevelClass(member.membershipLevel);
        const levelText = getLevelText(member.membershipLevel);
        
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `
            <div class="card-header">
                <h3>${member.name}</h3>
            </div>
            <div class="card-body">
                <img src="${member.image}" alt="${member.name}" style="width:100%; margin-bottom:1rem;">
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">Visit Site</a></p>
                ${member.description ? `<p>${member.description}</p>` : ''}
                <span class="member-level ${levelClass}">${levelText}</span>
            </div>
        `;
        gridView.appendChild(card);
    });
}

// Display members in list view
function displayList(memberData) {
    console.log('Displaying list with:', memberData);
    listView.innerHTML = '';
    memberData.forEach(member => {
        const levelClass = getLevelClass(member.membershipLevel);
        const levelText = getLevelText(member.membershipLevel);
        
        const item = document.createElement('div');
        item.className = 'member-item';
        item.innerHTML = `
            <div class="member-info">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                ${member.description ? `<p>${member.description}</p>` : ''}
                <span class="member-level ${levelClass}">${levelText}</span>
            </div>
            <div class="member-contact">
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Website</a></p>
            </div>
        `;
        listView.appendChild(item);
    });
}

// Helper function to get membership level class
function getLevelClass(level) {
    switch(level) {
        case 1: return 'level-member';
        case 2: return 'level-silver';
        case 3: return 'level-gold';
        default: return 'level-member';
    }
}

// Helper function to get membership level text
function getLevelText(level) {
    switch(level) {
        case 1: return 'Member';
        case 2: return 'Silver Member';
        case 3: return 'Gold Member';
        default: return 'Member';
    }
}

// Initialize the page
async function initializePage() {
    // Set copyright year and last modified date
    document.getElementById('copyrightYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
    
    // Fetch and display member data
    const memberData = await fetchMemberData();
    displayGrid(memberData);
    displayList(memberData);
    
    // Toggle between grid and list views
    gridBtn.addEventListener('click', () => {
        gridView.style.display = 'grid';
        listView.style.display = 'none';
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    });
    
    listBtn.addEventListener('click', () => {
        gridView.style.display = 'none';
        listView.style.display = 'block';
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
    });
    
    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Start the page
initializePage();