
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

const numberInput = document.getElementById('number-input');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

addButton.addEventListener('click', () => {
    const number = Number(numberInput.value);
    console.log(number);
    addResult.textContent = number + 20;
});


