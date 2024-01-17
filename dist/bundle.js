(() => {
  document.querySelector('.buttons');
  let n = document.querySelectorAll('span'),
    e = document.getElementById('value'),
    r = document.querySelector('.toggleBtn'),
    t = document.querySelector('body');
  for (let r = 0; r < n.length; r++)
    n[r].addEventListener('click', function () {
      '=' === this.innerHTML
        ? (e.innerHTML = o(e.innerHTML))
        : 'Clear' === this.innerHTML
          ? (e.innerHTML = '')
          : '%' === this.innerHTML
            ? (e.innerHTML = i(e.innerHTML))
            : '+/-' === this.innerHTML
              ? (e.innerHTML = c(e.innerHTML))
              : (e.innerHTML += this.innerHTML);
    });
  function o(n) {
    try {
      return Function(`'use strict'; return (${n});`)();
    } catch (e) {
      return console.error('Error evaluating expression:', e), n;
    }
  }
  function i(n) {
    try {
      const e = n.split('-');
      if (2 === e.length) {
        const n = parseFloat(e[0]),
          r = parseFloat(e[1]);
        if (!isNaN(n) && !isNaN(r)) return n * (r / 100);
      }
      throw new Error('Invalid expression');
    } catch (e) {
      return console.error('Error calculating percentage:', e), n;
    }
  }
  function c(n) {
    try {
      return o(`-1 * (${n})`);
    } catch (e) {
      return console.error('Error negating value:', e), n;
    }
  }
  r.onclick = function () {
    t.classList.toggle('dark');
  };
})();
