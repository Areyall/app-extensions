const startNumber = 5;
const flipCard = document.querySelector('.flip-card');

[...flipCard.children].forEach((child) => {
  child.textContent = startNumber;
});
flipCard.classList.add('flip');
