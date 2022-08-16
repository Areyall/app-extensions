const startNumber = 5;
const flipCard = document.querySelector('.flip-card');
const topHalf = flipCard.querySelector('top');
const bottomHalf = flipCard.querySelector('bottom');

[...flipCard.children].forEach((child) => {
  child.textContent = startNumber;
});

flipCard.dataset.currentNumber = startNumber;
flipCard.dataset.nextNumber = startNumber - 1;


flipCard.addEventListener('animationstart', (e) => {
    topHalf.textContent = startNumber - 1
});
flipCard.addEventListener('animationend', (e) => {
    topHalf.textContent = startNumber - 1
});


flipCard.classList.add('flip');