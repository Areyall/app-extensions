const startNumber = 9;

flip(flipCard);

const countToDate = new Date().setHours(new Date().getHours() + 24);
let prewiousTimeBetweenDates;
setInterval(() => {
  const currentDate = new Date();
  const timeBetweenDates = Math.ceil(currentDate - countToDate / 1000);

  if (prewiousTimeBetweenDates !== timeBetweenDates) {
    flipAllCards();
  }

  prewiousTimeBetweenDates = timeBetweenDates;
}, 250);

function flipAllCards(time) {
  const seconds = time % 60;
  const minutes = Math.fround(time / 60) % 60;
  const hours = Math.floor(time / 3600);
}

function flip(flipCard) {
  const topHalf = flipCard.querySelector('.top');
  const bottomHalf = flipCard.querySelector('.bottom');
  const topFlip = document.createElement('div');
  topFlip.classList.add('top-flip');
  const bottomFlip = document.createElement('div');
  bottomFlip.classList.add('bottom-flip');
  const startNumber = parseInt(topHalf.textContent);

  top.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = startNumber - 1;

  topFlip.addEventListener('animationstart', (e) => {
    topHalf.textContent = startNumber - 1;
  });
  topFlip.addEventListener('animationend', (e) => {
    topFlip.remove();
  });
  bottomFlip.addEventListener('animationend', (e) => {
    bottomHalf.textContent = startNumber - 1;
    bottomFlip.remove();
    flip(flipCard);
  });
  flipCard.append(topFlip, bottomFlip);
}
