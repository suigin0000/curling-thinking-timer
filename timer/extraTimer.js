// エクストラエンドタイマー
'use strict';

let exCountR = 270;
let exMinR = 0;
let exSecR = 0;
let exStartFR = false;
let exIntervalR;

let exCountY = 270;
let exMinY = 0;
let exSecY = 0;
let exStartFY = false;
let exIntervalY;

const exRedCountDownTimer = () => {
  const start = document.getElementById('exRStart');
  start.addEventListener('click', exCountStartR);

  const stop = document.getElementById('exStop');
  stop.addEventListener('click', exCountStopR);
};

const exYellowCountDownTimer = () => {
  const start = document.getElementById('exYStart');
  start.addEventListener('click', exCountStartY);

  const stop = document.getElementById('exStop');
  stop.addEventListener('click', exCountStopY);
};

const exCountStartR = () => {
  if (!exStartFR) {
    exIntervalR = setInterval(exCountDownR, 1000);
    exStartFR = true;
  }
};

const exCountStartY = () => {
  if (!exStartFY) {
    exIntervalY = setInterval(exCountDownY, 1000);
    exStartFY = true;
  }
};

const exCountDownR = () => {
  if(exCountR > 0){
    exCountR--;
    exSecR = exCountR % 60;
    exMinR = Math.floor(exCountR / 60);
    const count_downR = document.getElementById("exRedTimer");
    count_downR.innerHTML = `${String(exMinR).padStart(2, "0")}：${String(exSecR).padStart(2, "0")}`;
  } else {
    clearInterval(exIntervalR);
    exStartFR = false;
    document.getElementById("exRedTimer").innerHTML = "00：00";
  }
};

const exCountDownY = () => {
  if(exCountY > 0){
    exCountY--;
    exSecY = exCountY % 60;
    exMinY = Math.floor(exCountY / 60);
    const count_downY = document.getElementById("exYellowTimer");
    count_downY.innerHTML = `${String(exMinY).padStart(2, "0")}：${String(exSecY).padStart(2, "0")}`;
  } else {
    clearInterval(exIntervalY);
    exStartFY = false;
    document.getElementById("exYellowTimer").innerHTML = "00：00";
  }
};

const exCountStopR = () => {
  clearInterval(exIntervalR);
  exStartFR = false;
};

const exCountStopY = () => {
  clearInterval(exIntervalY);
  exStartFY = false;
};