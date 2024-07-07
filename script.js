document.addEventListener('DOMContentLoaded', () => {
    const playerButtons = document.querySelectorAll('button');
    const selectedPlayerInput = document.getElementById('selectedPlayer');
    const selectedPlayersList = document.createElement('ul');
    const rightBar = document.querySelector('.width-rightbar');

    rightBar.insertBefore(selectedPlayersList, rightBar.children[1]);

    playerButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const playerName = event.target.previousElementSibling.alt;
            const listItem = document.createElement('li');
            listItem.textContent = playerName;
            selectedPlayersList.appendChild(listItem);
        });
    });

    const addPlayerForm = document.querySelector('form');
    addPlayerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const playerName = selectedPlayerInput.value;
        if (playerName) {
            const listItem = document.createElement('li');
            listItem.textContent = playerName;
            selectedPlayersList.appendChild(listItem);
            selectedPlayerInput.value = '';
        }
    });
});