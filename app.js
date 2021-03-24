
// 1. create variables for each 
// element we need to interact with
const greetingInput = document.getElementById('greeting-input');
const changeButton = document.getElementById('change-button');
const greetingDisplay = document.getElementById('greeting-display');

// 2. add listeners for events we care about
changeButton.addEventListener('click', () => {
    // 3. do the action
    greetingDisplay.textContent = greetingInput.value;
});

// // Example of syncing on input change (any text change):
// greetingInput.addEventListener('input', () => {
//     // 3. do the action
//     greetingDisplay.textContent = greetingInput.value;
// });
