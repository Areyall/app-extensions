const sliders = document.querySelectorAll('[data-range]');
const billingInput = document.getElementById('bill');
// console.log(sliders);

sliders.forEach((e) => e.addEventListener('input', calculateTip));
billingInput.addEventListener('change', calculateTip);

function calculateTip() {
  let bill = parseFloat(billingInput.value);
  let tipPercent = document.getElementById('tip').value;
  let noOfPeople = document.getElementById('no-of-people').value;
//   console.log(bill, tipPercent, noOfPeople);


}
