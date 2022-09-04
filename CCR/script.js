const sliders = document.querySelectorAll('input[type="range"]');
const billingInput = document.getElementById('bill');

sliders.forEach((e) => e.addEventListener('input', calculateTip));
billingInput.addEventListener('change', calculateTip);

function calculateTip() {
    
}
