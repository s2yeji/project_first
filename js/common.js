let nav = document.querySelector('nav');
let ham = nav.querySelector('.ham');
const btnPortfolio = nav.querySelector('.goPortfolio');
const section = document.querySelectorAll('main > section');
console.log(section);

// ham.addEventListener('click', function () {
//   ham.classList.toggle('open');
//   if (ham.classList.contains('open')) {
//     nav.classList.add('on');
//   } else {
//     nav.classList.remove('on');
//   }
// });

btnPortfolio.addEventListener('click', (e) => {
  section[3].scrollIntoView({
    behavior: 'smooth',
  });
});

ham.addEventListener('click', () => {
  const isOpen = ham.classList.toggle('open'); // true, false
  console.log(isOpen);
  nav.classList.toggle('on', isOpen);
  //코드설명 : isOpen이 true면 on을 추가, false면 on을 제거
});

// window.addEventListener('resize', function () {
//   let windowSize = window.innerWidth;

//   const sec3 = document.querySelector('.sec3');
//   if (windowSize <= 850) {
//     sec3.classList.add('mw');
//   } else {
//     sec3.classList.remove('mw');
//   }

//   if (windowSize <= 800) {
//     ham.style.display = 'flex';
//   } else {
//     ham.style.display = 'none';
//   }
// });

// 강사수정
window.addEventListener('resize', function () {
  let windowSize = window.innerWidth;

  const sec3 = document.querySelector('.sec3');
  sec3.classList.toggle('mw', windowSize <= 850);
  // 코드설명 : windowSize가 850보다 작으면 'mw'를, 아니면 'mw'를 제거

  ham.style.display = windowSize <= 800 ? 'flex' : 'none';
  // 코드설명 : windowSize가 800보다 작으면 'flex'를, 아니면 'none'을 적용
});
