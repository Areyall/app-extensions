const buttons = document.querySelectorAll('.btnw');
const windows = document.querySelectorAll('.winImg');
const calcDiv = document.querySelector('.winCalcs');
calcDiv.style.display = 'none';
const totCost = document.querySelector('.totNum');

calcDiv.style.opacity = '1';

const ranSliders = document.querySelectorAll('input[type=range]');
let hightRange = ranSliders[0];
let widthRange = ranSliders[1];
const numInput = document.querySelectorAll('input[type=number]');
let hightInput = numInput[0];
let widthInput = numInput[1];

buttons.forEach((e) => e.addEventListener('click', choseWindowBtn));
ranSliders.forEach((e) => e.addEventListener('input', calculateSize));
numInput.forEach((e) => e.addEventListener('change', winSizeNum));

function winSizeNum(e) {
  e.preventDefault();
  hightRange.value = hightInput.value;
  widthRange.value = widthInput.value;
}

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

function calculateSize(e) {
  hightInput.value = hightRange.value;
  widthInput.value = widthRange.value;

  let totalParams = (.06 * (+hightRange.value + +widthRange.value)).toFixed(2);
  totCost.textContent = totalParams;
}
// function calculatePrice(e) {}

calculateSize();



