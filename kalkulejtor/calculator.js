document.addEventListener('DOMContentLoaded', function () {
    const calculator = document.getElementById('calculator');
    let inputDisplay = document.getElementById('inputDisplay');
    let outputDisplay = document.getElementById('outputDisplay');
    let currentInput = '';
    let currentOperator = '';
    let previousInput = '';

    calculator.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            const value = event.target.value;

            if (!isNaN(value) || value === '.') {
                // If the clicked button is a number or a dot
                currentInput += value;
            } else if (value === 'C') {
                // Clear button
                currentInput = '';
                currentOperator = '';
                previousInput = '';
            } else if (value === '=') {
                // Equal button
                if (currentInput !== '' && previousInput !== '') {
                    currentInput = calculate(previousInput, currentInput, currentOperator);
                    currentOperator = '';
                    previousInput = '';
                }
            } else {
                // Operator button
                if (currentInput !== '') {
                    if (previousInput === '') {
                        previousInput = currentInput;
                        currentInput = '';
                        currentOperator = value;
                    } else {
                        previousInput = calculate(previousInput, currentInput, currentOperator);
                        currentInput = '';
                        currentOperator = value;
                    }
                }
            }

            // Update input and output displays
            inputDisplay.textContent = currentInput || previousInput || '0';
            outputDisplay.textContent = currentInput || previousInput || '0';
        }
    });

    function calculate(num1, num2, operator) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case 'x':
                return num1 * num2;
            case '÷':
                return num1 / num2;
            default:
                return num2;
        }
    }
});