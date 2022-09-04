const sliders = document.querySelectorAll('[data-range]');
const billingInput = document.getElementById('bill');
console.log(sliders)

sliders.forEach((e) => e.addEventListener('input', calculateTip));
billingInput.addEventListener('change', calculateTip);

function calculateTip() {

}
