const UL = document.querySelector('.list');
const btn = UL.querySelectorAll('li');
const box = document.querySelectorAll('.content > div');
const con = document.querySelector('.con');

let bg = document.createElement('span');
bg.classList.add('bg');
con.prepend(bg);

const bgBar = document.querySelector('.bg');
console.log('bgBar----', bgBar);

console.log(UL);
console.log(btn);
console.log('---', box);

btn.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    // btn
    btn.forEach((a) => {
      a.classList.remove('on');
    });
    e.target.classList.add('on');

    // box
    box.forEach((a) => {
      a.classList.remove('on');
    });
    box[i].classList.add('on');

    moveBgBar(i);
  });
});

function moveBgBar(index) {
  // bgBar
  let newLeft = btn[index].offsetLeft;
  let newWidth = btn[index].offsetWidth;
  // console.log('offsetLeft', newLeft);
  // console.log('offsetWidth', newWidth);
  bgBar.style.left = newLeft + 'px';
  bgBar.style.width = `${newWidth}px`;
}
