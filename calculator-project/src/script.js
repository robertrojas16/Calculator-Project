let displayValue = '';

function updateDisplay() {
    document.getElementById('display').textContent = displayValue || '0';
}

function appendNumber(number) {
    if (displayValue === '0' && number === '0') return; 
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue === '') return; 
    const lastChar = displayValue[displayValue.length - 1];
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        displayValue = displayValue.slice(0, -1); 
    }
    displayValue += operator;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function deleteDigit() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
       
        displayValue = String(eval(displayValue));
        updateDisplay();
    } catch (error) {
        alert('Invalid expression');
    }
}