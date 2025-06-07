// エンド間タイマー
'use strict';

let countTimeout = 150;
let startFTo = false;

const startBtnTo = document.getElementById("tStart");
const resetTmrTo = document.getElementById("timeOut");

const timeoutTimer = () => {
  
  const display = document.getElementById("timeOutTimer");

  const min_sec_show = (seconds) => {
    const sec = seconds % 60;
    const min = Math.floor(seconds / 60);
    display.innerHTML = String(min).padStart(2, "0") + '：' + String(sec).padStart(2, "0");
  };
  
  const count_down_break = () => {
    const intervalID = setInterval(() => {
      if (countTimeout > 0) {
        countTimeout--;
        min_sec_show(countTimeout);
      } else {
        clearInterval(intervalID);
        min_sec_show(0);
        startFTo = false;
      }
    }, 1000);
  };
  
  const count_start_h = () => {
    if (!startFTo) {
      count_down_break();
      startFTo = true;
    }
  };

  count_start_h();
};
  
startBtnTo.addEventListener("click", () => {
  console.log("ugoita");
  timeoutTimer();
});

resetTmrTo.addEventListener("click", () => {
  if (!startFTo){
    const display = document.getElementById("timeOutTimer");
    countTimeout = 150;
    display.innerHTML = "02：30";
    console.log("reset");
    startFTo = false;
  } else {
    console.log("タイマーは動作しているためリセットできないよー")
  }
});