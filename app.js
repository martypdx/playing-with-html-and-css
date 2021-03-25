
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


const incrementButton = document.getElementById('increment-button');
const decrementButton = document.getElementById('decrement-button');
const countDisplay = document.getElementById('count-display');

let count = 3;
countDisplay.textContent = count;

incrementButton.addEventListener('click', () => {
    // add one to the "count" state
    count = count + 1;

    if(count === 0) {
        decrementButton.disabled = true;
    }
    else {
        decrementButton.disabled = false;
    }

    // update count display
    countDisplay.textContent = count;
});

decrementButton.addEventListener('click', () => {
    if(count === 0) {
        alert('No negative count');
        return;
    }

    // add one to the "count" state
    count = count - 1;

    if(count === 0) {
        decrementButton.disabled = true;
    }
    else {
        decrementButton.disabled = false;
    }

    // update count display
    countDisplay.textContent = count;
});

const generateRobot = document.getElementById('generate-robot');
const robot = document.getElementById('robot');

generateRobot.addEventListener('click', () => {
    robot.src = 'https://robohash.org/' + Math.random() + '.png';
})