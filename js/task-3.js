const newInp = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

newInp.classList.add('styled-input');

newInp.addEventListener('input', (event) => {
  const value = event.currentTarget.value.trim();
  output.textContent = value === '' ? 'Anonymous' : value;
});