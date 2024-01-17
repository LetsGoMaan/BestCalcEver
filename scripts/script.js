let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');
let toggleBtn= document.querySelector('.toggleBtn');
let body = document.querySelector('body')
for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        if(this.innerHTML == '=') {
            value.innerHTML = getResult(value.innerHTML);
        } else {
            if(this.innerHTML == 'Clear') {
                value.innerHTML = '';
            } else if (this.innerHTML === '%') {
                value.innerHTML = calculatePercentage(value.innerHTML);
            } else if (this.innerHTML === '+/-') {
                value.innerHTML = negateValue(value.innerHTML);
            } else {
                value.innerHTML += this.innerHTML;
            }
        }
    })
}
function getResult(expression) {
    try {
        const result = Function(`'use strict'; return (${expression});`)();
        return result;
    } catch (error) {
        console.error('Error evaluating expression:', error);
        return expression;
    }
}
function calculatePercentage(expression) {
    try {
        const parts = expression.split('-');
        if (parts.length === 2) {
            const number = parseFloat(parts[0]);
            const percent = parseFloat(parts[1]);
            if (!isNaN(number) && !isNaN(percent)) {
                const result = number * (percent / 100);
                return result;
            }
        }
        throw new Error('Invalid expression');
    } catch (error) {
        console.error('Error calculating percentage:', error);
        return expression;
    }
}

function negateValue(expression) {
    try {
        const result = getResult(`-1 * (${expression})`);
        return result;
    } catch (error) {
        console.error('Error negating value:', error);
        return expression;
    }
}
toggleBtn.onclick = function () {
    body.classList.toggle('dark');
}
