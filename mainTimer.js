// メインタイマー
'use strict';

let countR = 1800;
let minR = 0;
let secR = 0;
let start_fR = false;
let intervalR;

let countY = 1800;
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

    // 赤が動いたので、黄色側を灰色にする
    document.getElementById("yellowTimer").classList.add("inactive-timer");
    // 赤側は確実に元の色にする
    document.getElementById("redTimer").classList.remove("inactive-timer");
  }
};

const count_start_y = () => {
  if (!start_fY) {
    intervalY = setInterval(count_down_y, 1000);
    start_fY = true;

    // 黄色が動いたので、赤側を灰色にする
    document.getElementById("redTimer").classList.add("inactive-timer");
    // 黄色側は確実に元の色にする
    document.getElementById("yellowTimer").classList.remove("inactive-timer");
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
  // ストップしたときは、両方とも元の色（灰色解除）に戻す場合
  document.getElementById("yellowTimer").classList.remove("inactive-timer");
};

const count_stopY = () => {
  clearInterval(intervalY);
  start_fY = false;
  // ストップしたときは、両方とも元の色（灰色解除）に戻す場合
  document.getElementById("redTimer").classList.remove("inactive-timer");
};

// ここから追加タイマーの設定関数
// --- mainTimer.js の末尾に追加 ---
// 初期時間を分単位でセットして画面表示を更新する関数
// --- mainTimer.js の末尾に追加 ---
const setMainTimerDuration = (minutes) => {
  const seconds = minutes * 60;
  countR = seconds;
  countY = seconds;
  
  const displayR = document.getElementById("redTimer");
  const displayY = document.getElementById("yellowTimer");
  
  if (displayR) displayR.innerHTML = `${String(minutes).padStart(2, "0")}：00`;
  if (displayY) displayY.innerHTML = `${String(minutes).padStart(2, "0")}：00`;
};
