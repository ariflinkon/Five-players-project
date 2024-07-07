document.addEventListener('DOMContentLoaded', () => {
    const selectButtons = document.querySelectorAll('.select-button');
    const selectedPlayersList = document.getElementById('selected-players-title');
    const budgetPerPlayerInput = document.getElementById('BudgetPerPlayer');
    const managerBudgetInput = document.getElementById('managerBudget');
    const coachBudgetInput = document.getElementById('CoachBudget');
    const calculateBudgetButton = document.querySelector('#budget-form button');
    const totalCalculateButton = document.querySelector('#coach-budget-form button');
    let selectedPlayers = [];

    selectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const playerCard = button.closest('.player-card');
            const playerName = playerCard.querySelector('.player-name').textContent;

            if (button.textContent === 'Select') {
                if (selectedPlayers.length < 5) {
                    button.textContent = 'Selected';
                    button.classList.remove('bg-blue-500');
                    button.classList.add('bg-gray-500');
                    selectedPlayers.push(playerName);
                    updateSelectedPlayersList();
                } else {
                    alert('You can only select up to 5 players.');
                }
            } else {
                button.textContent = 'Select';
                button.classList.remove('bg-gray-500');
                button.classList.add('bg-blue-500');
                selectedPlayers = selectedPlayers.filter(player => player !== playerName);
                updateSelectedPlayersList();
            }
        });
    });

    calculateBudgetButton.addEventListener('click', (e) => {
        e.preventDefault();
        const budgetPerPlayer = parseFloat(budgetPerPlayerInput.value);
        if (!isNaN(budgetPerPlayer)) {
            const totalBudget = selectedPlayers.length * budgetPerPlayer;
            const budgetDisplay = document.createElement('p');
            budgetDisplay.textContent = `Total budget for players: ${totalBudget}`;
            budgetDisplay.classList.add('total-budget');
            budgetPerPlayerInput.insertAdjacentElement('beforebegin', budgetDisplay);
        }
    });

    totalCalculateButton.addEventListener('click', (e) => {
        e.preventDefault();
        const budgetPerPlayer = parseFloat(budgetPerPlayerInput.value);
        const managerBudget = parseFloat(managerBudgetInput.value);
        const coachBudget = parseFloat(coachBudgetInput.value);
        if (!isNaN(budgetPerPlayer) && !isNaN(managerBudget) && !isNaN(coachBudget)) {
            const totalBudgetForPlayers = selectedPlayers.length * budgetPerPlayer;
            const totalCost = totalBudgetForPlayers + managerBudget + coachBudget;
            const totalCostDisplay = document.createElement('p');
            totalCostDisplay.textContent = `Total Cost Amount: ${totalCost}`;
            totalCostDisplay.classList.add('total-cost');
            coachBudgetInput.insertAdjacentElement('beforebegin', totalCostDisplay);
        }
    });

    function updateSelectedPlayersList() {
        const selectedPlayersContainer = document.createElement('div');
        selectedPlayersContainer.classList.add('selected-players-container');
        selectedPlayers.forEach(player => {
            const playerItem = document.createElement('p');
            playerItem.textContent = player;
            selectedPlayersContainer.appendChild(playerItem);
        });
        const existingContainer = document.querySelector('.selected-players-container');
        if (existingContainer) {
            existingContainer.replaceWith(selectedPlayersContainer);
        } else {
            selectedPlayersList.insertAdjacentElement('afterend', selectedPlayersContainer);
        }
    }
});