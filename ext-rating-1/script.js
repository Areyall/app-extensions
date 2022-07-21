const reviewBarsContainer = document.querySelector('.review-bar');
const averageReviewElem = document.querySelector('[data-avarage-review]');
const reviewRowsContainer = document.querySelector('.review-rows');
const starIcon = `<svg
    class="star-icon"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 47.94 47.94"
    style="enable-background: new 0 0 47.94 47.94"
    xml:space="preserve"
  >
    <path
      class="icon-path"
      d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
C22.602,0.567,25.338,0.567,26.285,2.486z"
    />
  </svg>`;

const REVIEWS = {
  5: 120,
  4: 40,
  3: 20,
  2: 0,
  1: 0,
};
const totalReviews = Object.values(REVIEWS).reduce((sum, value) => {
  return sum + value;
}, 0);
const averageReview =
  Object.entries(REVIEWS).reduce((sum, [value, quantityity]) => {
    return sum + value * quantityity;
  }, 0) / totalReviews;

averageReviewElem.dataset.endValue = Math.round(averageReview * 10) / 10;

averageReviewElem.textContent = 0;

Object.entries(REVIEWS)
  .sort(([a], [b]) => b - a)
  .forEach(([val, quantity]) => {
    const reviewNum = document.createElement('div');
    reviewNum.textContent = val;
    reviewNum.classList.add('review-number');
    reviewRowsContainer.append(reviewNum);

    const starIconWraper = document.createElement('div');
    starIconWraper.innerHTML = starIcon;
    reviewRowsContainer.append(starIconWraper);

    const reviewBar = document.createElement('div');
    reviewBar.dataset.endValue = (quantity / totalReviews) * 100;
    reviewBar.classList.add('review-bar');

    reviewBar.classList.toggle('empty', quantity === 0);
    reviewRowsContainer.append(reviewBar);

    const reviewCount = document.createElement('div');
    reviewCount.dataset.endValue = quantity;
    reviewCount.textContent = 0;
    reviewCount.classList.add('review-count');
    reviewRowsContainer.append(reviewCount);
  });

let timeOffSet;
const DURATION = 1000;
function update(time) {
  if (timeOffSet != null) {
    const timeElapsed = time - timeOffSet;
    const newAverage = getNewValue(
      averageReviewElem.dataset.endValue,
      timeElapsed
    );
    averageReviewElem.textContent = Math.round(newAverage * 10) / 10;
    const countElems = document.querySelectorAll(
      '.review-count[data-end-value]'
    );

    countElems.forEach((elem) => {
      const endValue = elem.dataset.endValue;
      const newCurrentValue = Math.min(
        Math.round((endValue * timeElapsed) / DURATION),
        endValue
      );
      elem.textContent = Math.round(
        getNewValue(elem.dataset.endValue, timeElapsed)
      );
    });

    const reviewBars = document.querySelectorAll(
      '.review-bar[data-end-value]'
    );
    reviewBars.forEach((elem) => {
      elem.style.setProperty(
        '--width',
        `${getNewValue(elem.dataset.endValue, timeElapsed)}%`
      );
    });

    if (timeElapsed >= DURATION) return;
    requestAnimationFrame(update);
  } else {
    timeOffSet = time;
    requestAnimationFrame(update);
  }
}
function getNewValue(endValue, timeElapsed) {
  return Math.min((endValue * timeElapsed) / DURATION, endValue);
}

requestAnimationFrame(update);

//   `${}%`
// );
