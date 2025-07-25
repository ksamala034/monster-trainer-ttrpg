document.addEventListener('DOMContentLoaded', () => {
    const characterForm = document.getElementById('characterForm');
    const characterDisplay = document.getElementById('characterDisplay');

    characterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const characterData = {
            name: document.getElementById('name').value,
            race: document.getElementById('race').value,
            class: document.getElementById('class').value,
            level: parseInt(document.getElementById('level').value),
            abilityScores: {
                strength: parseInt(document.getElementById('strength').value),
                dexterity: parseInt(document.getElementById('dexterity').value),
                constitution: parseInt(document.getElementById('constitution').value),
                intelligence: parseInt(document.getElementById('intelligence').value),
                wisdom: parseInt(document.getElementById('wisdom').value),
                charisma: parseInt(document.getElementById('charisma').value)
            }
        };

        // Calculate modifiers
        const modifiers = {};
        Object.keys(characterData.abilityScores).forEach(score => {
            modifiers[score] = Math.floor((characterData.abilityScores[score] - 10) / 2);
        });

        // Calculate hit points (simplified for demonstration)
        const hitPoints = 10 + (modifiers.constitution * characterData.level);

        // Display character summary
        const characterSummary = `
            <div class="character-summary">
                <h3>${characterData.name}</h3>
                <p>${characterData.race} ${characterData.class}, Level ${characterData.level}</p>
                <p>Hit Points: ${hitPoints}</p>
                <h4>Ability Scores</h4>
                <ul>
                    ${Object.entries(characterData.abilityScores).map(([score, value]) => 
                        `<li>${score}: ${value} (${modifiers[score]})</li>`
                    ).join('')}
                </ul>
            </div>
        `;

        // Show character summary
        if (!document.getElementById('characterDisplay')) {
            const displayDiv = document.createElement('div');
            displayDiv.id = 'characterDisplay';
            displayDiv.className = 'character-display';
            document.querySelector('main').appendChild(displayDiv);
        }
        
        document.getElementById('characterDisplay').innerHTML = characterSummary;
    });
});
