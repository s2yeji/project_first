let nav = document.querySelector('nav');
let ham = nav.querySelector('.ham');

ham.addEventListener('click', function () {
  ham.classList.toggle('open');
  if (ham.classList.contains('open')) {
    nav.classList.add('on');
  } else {
    nav.classList.remove('on');
  }
});

window.addEventListener('resize', function () {
  let windowSize = window.innerWidth;

  const sec3 = document.querySelector('.sec3');
  if (windowSize <= 850) {
    sec3.classList.add('mw');
  } else {
    sec3.classList.remove('mw');
  }

  if (windowSize <= 800) {
    ham.style.display = 'flex';
  } else {
    ham.style.display = 'none';
  }
});
