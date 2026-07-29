// タイムアウトタイマー
'use strict';

// 設定可能なトラベルタイム（デフォルト30秒）
let travelTime = 30; 
// タイムアウト本体（カーリング規定で60秒）
const TIMEOUT_DURATION = 60;

let countTimeout = travelTime;
let isTravelPhase = true; // 現在トラベルタイム中かどうか
let startFTo = false;
let timeoutIntervalID = null;

const startBtnTo = document.getElementById("tStart");
const resetTmrTo = document.getElementById("timeOut");

const timeoutTimer = () => {
  const display = document.getElementById("timeOutTimer");

  const min_sec_show = (seconds) => {
    const sec = seconds % 60;
    const min = Math.floor(seconds / 60);
    display.innerHTML = String(min).padStart(2, "0") + '：' + String(sec).padStart(2, "0");
  };

  // トラベルタイムのカウントダウン
  const count_down_travel = () => {
    timeoutIntervalID = setInterval(() => {
      if (countTimeout > 0) {
        countTimeout--;
        min_sec_show(countTimeout);
      } else {
        // トラベルタイム終了 -> タイムアウト（60秒）を開始
        clearInterval(timeoutIntervalID);
        isTravelPhase = false;
        countTimeout = TIMEOUT_DURATION;
        min_sec_show(countTimeout);
        count_down_timeout();
      }
    }, 1000);
  };

  // タイムアウト本体のカウントダウン
  const count_down_timeout = () => {
    timeoutIntervalID = setInterval(() => {
      if (countTimeout > 0) {
        countTimeout--;
        min_sec_show(countTimeout);
      } else {
        // タイムアウト終了
        clearInterval(timeoutIntervalID);
        startFTo = false;
        isTravelPhase = true;
      }
    }, 1000);
  };

  if (!startFTo) {
    startFTo = true;
    // トラベルタイム設定が0秒の場合は直接タイムアウトを開始
    if (travelTime > 0) {
      isTravelPhase = true;
      countTimeout = travelTime;
      count_down_travel();
    } else {
      isTravelPhase = false;
      countTimeout = TIMEOUT_DURATION;
      count_down_timeout();
    }
  }
};

startBtnTo.addEventListener("click", () => {
  timeoutTimer();
});

// リセット処理
const resetTimeoutTimer = () => {
  clearInterval(timeoutIntervalID);
  startFTo = false;
  isTravelPhase = true;
  countTimeout = travelTime;
  
  const display = document.getElementById("timeOutTimer");
  if (display) {
    // トラベルタイムを表示（トラベル0秒なら01:00）
    const initialSec = travelTime > 0 ? travelTime : TIMEOUT_DURATION;
    const sec = initialSec % 60;
    const min = Math.floor(initialSec / 60);
    display.innerHTML = String(min).padStart(2, "0") + '：' + String(sec).padStart(2, "0");
  }
};

resetTmrTo.addEventListener("click", () => {
  if (!startFTo){
    resetTimeoutTimer();
    console.log("reset");
  } else {
    console.log("タイマーは動作しているためリセットできないよー");
  }
});
