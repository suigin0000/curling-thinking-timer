// メインタイマー
'use strict';

let countR = 2280;
let minR = 0;
let secR = 0;
let start_fR = false;
let intervalR;

let countY = 2280;
let minY = 0;
let secY = 0;
let start_fY = false;
let intervalY;

const redCountDownTimer = () => {
  const start = document.getElementById('rStart');
  start.addEventListener('click', count_start_r);

  const stop = document.getElementById('stop');
  stop.addEventListener('click', count_stopR);
};

const yellowCountDownTimer = () => {
  const start = document.getElementById('yStart');
  start.addEventListener('click', count_start_y);

  const stop = document.getElementById('stop');
  stop.addEventListener('click', count_stopY);
};

const count_start_r = () => {
  if (!start_fR) {
    intervalR = setInterval(count_down_r, 1000);
    start_fR = true;
  }
};

const count_start_y = () => {
  if (!start_fY) {
    intervalY = setInterval(count_down_y, 1000);
    start_fY = true;
  }
};

const count_down_r = () => {
  if(countR > 0){
    countR--;
    secR = countR % 60;
    minR = Math.floor(countR / 60);
    const count_downR = document.getElementById("redTimer");
    count_downR.innerHTML = `${String(minR).padStart(2, "0")}：${String(secR).padStart(2, "0")}`;
  } else {
    clearInterval(intervalR);
    start_fR = false;
    document.getElementById("redTimer").innerHTML = "00：00";
  }
};

const count_down_y = () => {
  if (countY > 0){
    countY--;
    secY = countY % 60;
    minY = Math.floor(countY / 60);
    const count_downY = document.getElementById("yellowTimer");
    count_downY.innerHTML = `${String(minY).padStart(2, "0")}：${String(secY).padStart(2, "0")}`;
  } else {
    clearInterval(intervalY);
    start_fY = false;
    document.getElementById("yellowTimer").innerHTML = "00：00"
  }
};

const count_stopR = () => {
  clearInterval(intervalR);
  start_fR = false;
};

const count_stopY = () => {
  clearInterval(intervalY);
  start_fY = false;
};