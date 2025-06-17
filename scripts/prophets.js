const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.getElementById('cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');

    //document.querySelector('h1').textContent = `${prophet.name} ${prophet.lastname}`;
        const birthDate = document.createElement('p');
        const birthPlace = document.createElement('p');
        //const age = document.createElement('p');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        //age.textContent = `Age: ${new Date().getFullYear() - new Date(prophet.birthdate).getFullYear()}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '200');

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        //card.appendChild(age);
        card.appendChild(portrait);

        cards.appendChild(card);
    })
}

getProphetData();
