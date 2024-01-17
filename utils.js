export function getResult(expression) {
  try {
      return Function(`'use strict'; return (${expression});`)();
  } catch (error) {
    console.error('Error evaluating expression:', error);
    return expression;
  }
}
