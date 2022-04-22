const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

// setinterval starts at the start of the page. no matter it is called or not
// func name and time interval i.e. 30 milliseconds
let interval = setInterval(blurring, 30);
function blurring() {
  load++;

  //   to stop interval going on for unlimited iterations
  if (load > 99) clearInterval(interval);

  loadText.innerText = `${load}%`;
  //   increase loading from 1 to 100 and decreasing opacity from 1 to 0
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  //   blurring from 30px to 0 px. filter uses blur in css so we implemented here too!
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// A stackoverflow function
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
