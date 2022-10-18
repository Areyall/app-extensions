const buttons = document.querySelectorAll('.btnw');
const windows = document.querySelectorAll('.winImg');
const calcDiv = document.querySelector('.winCalcs');
calcDiv.style.display = 'none';

const ranSliders = document.querySelectorAll('input[type=range]');
const numInput = document.querySelectorAll('input[type=number]');
// console.log(ranSliders[0].value);

buttons.forEach((e) => e.addEventListener('click', choseWindowBtn));
ranSliders.forEach((e) => e.addEventListener('input', calculatePrice));
numInput.forEach((e) =>
  e.addEventListener('change', (e) => {
    e.preventDefault();
    ranSliders[0].value = numInput[0].value;
  })
);

function choseWindowBtn() {
  if (calcDiv.style.display == 'none') {
    calcDiv.style.display = 'flex';
  }
  setTimeout(() => {
    if (calcDiv.style.opacity == '') {
      calcDiv.style.opacity = '1';
    }
  }, 1);

  windows.forEach((e) => {
    if (
      e.classList.contains(this.classList[1]) &&
      e.classList.contains('none')
    ) {
      e.classList.remove('none');
    } else if (e.classList.contains(this.classList[1]) === false) {
      e.classList.add('none');
    }
  });
}

function calculatePrice() {
  if (numInput[0].value) {
    numInput[0].value = ranSliders[0].value;
  }
}

calculatePrice();
