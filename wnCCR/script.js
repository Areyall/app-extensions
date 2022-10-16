const buttons = document.querySelectorAll('.btnw');
const windows = document.querySelectorAll('.winImg');

// console.log(windows);

buttons.forEach((e) => e.addEventListener('click', choseWindowBtn));

function choseWindowBtn() {
  windows.forEach((e) => {
    if (e.classList.contains(this.classList[1]) && e.classList.contains('none')) {
      e.classList.remove('none');
    } else if( e.classList.contains(this.classList[1]) === false){
        e.classList.add('none');
    }
  });
}
