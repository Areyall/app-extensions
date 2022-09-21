const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin-btn');
const finalValue = document.getElementById('final-value');
const rotationValues = [
  { minDegree: 0, maxDegree: 30, value: 2 },
  { minDegree: 31, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 150, value: 6 },
  { minDegree: 151, maxDegree: 210, value: 5 },
  { minDegree: 211, maxDegree: 270, value: 4 },
  { minDegree: 271, maxDegree: 330, value: 3 },
  { minDegree: 331, maxDegree: 360, value: 2 },
];

const data = [16, 16, 16, 16, 16, 16];

const pieColors = [
  '#8b35bc',
  '#b163da',
  '#8b35bc',
  '#b163da',
  '#8b35bc',
  '#b163da',
];

let wheelChart = new Chart(wheel, {
  plugins: [ChartDataLabels],
  type: 'pie',
  data: {
    labels: [1, 2, 3, 4, 5, 6],
    datasets: [
      {
        data: data,
        backgroundColor: pieColors,
      },
    ],
  },
  options: {
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      tooltip: false,
      legend: {
        display: false,
      },
      datalabels: {
        color: '#ffffff',
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});

const valueGenerator = (angleValue) => {
  for (const i of rotationValues) {
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};

let count = 0;
let resultValue = 101;

spinBtn.addEventListener('click', () => {
  spinBtn.disabled = true;
  finalValue.innerHTML = `<p>Good Luck!</p>`;
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);

  let rotationImterval = window.setInterval(() => {
    wheelChart.options.rotation = wheelChart.options.rotation + resultValue;
    wheelChart.update();
    if (wheelChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      wheelChart.options.rotation = 0;
    } else if (count > 15 && wheelChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationImterval);
      count = 0;
      resultValue = 101;
    }
  });

});
