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
        formater: (_, context) => context.chart.data.labels[context.dataIndex],
        font: {size: 24},
      },
    },
  },
});
