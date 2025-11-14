const box = document.querySelector('.box');

document.getElementById('redBtn').addEventListener('click', () => {
  box.style.backgroundColor = 'red';
});

document.getElementById('greenBtn').addEventListener('click', () => {
  box.style.backgroundColor = 'green';
});

document.getElementById('blueBtn').addEventListener('click', () => {
  box.style.backgroundColor = 'blue';
});

document.getElementById('yellowBtn').addEventListener('click', () => {
  box.style.backgroundColor = 'yellow';
});