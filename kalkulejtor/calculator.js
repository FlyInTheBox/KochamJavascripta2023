document.addEventListener('DOMContentLoaded', function () {
    const calculator = document.getElementById('calculator');
    let inputDisplay = document.getElementById('inputDisplay');
    let outputDisplay = document.getElementById('outputDisplay');
    let currentInput = '';
    let currentOperator = '';
    let previousInput = '';
    let lastResult = '';

    calculator.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            const value = event.target.value;

            if (!isNaN(value)) {
                currentInput += value;
            } else if (value === 'C') {
                currentInput = '';
                currentOperator = '';
                previousInput = '';
                lastResult = '';
            } else if (value === '=') {
                if (currentInput !== '' && previousInput !== '' && currentOperator !== '') {
                    currentInput = calculate(previousInput, currentInput, currentOperator);
                    lastResult = currentInput;
                    currentOperator = '';
                    previousInput = '';
                    outputDisplay.innerText = currentInput || previousInput || '0';
                }
            } else {
                if (currentInput !== '') {
                    if (previousInput === '') {
                        previousInput = currentInput;
                        currentInput = '';
                        currentOperator = value;
                    } else {
                        currentInput = calculate(previousInput, currentInput, currentOperator);
                        lastResult = currentInput;
                        previousInput = currentInput;
                        currentInput = '';
                        currentOperator = value;
                    }
                }
            }

            inputDisplay.innerText = previousInput + currentOperator + currentInput;
        }
    });

    function calculate(num1, num2, operator) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (operator === '÷' && num2 === 0) {
            window.open('https://fakebsod.com/windows-8-and-10', '_blank',"toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=4000,height=4000");
            return 'No to masz problem';
        }

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