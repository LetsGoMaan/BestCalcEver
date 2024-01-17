export function getResult (expression) {
    try {
        const result = Function(`'use strict'; return (${expression});`)();
        return result;
    } catch (error) {
        console.error('Error evaluating expression:', error);
        return expression;
    }
}
