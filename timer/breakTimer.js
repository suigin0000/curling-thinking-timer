// エンド間タイマー
'use strict';

let countBreak = 60;
let countThrough = 10;
let startFB = false;

const startBtn = document.getElementById("bStart");
const resetTmr = document.getElementById("betweenEnd");

const breaktimer = () => {
  
  const display = document.getElementById("endBreakTimer");

  const min_sec_show = (seconds) => {
    const sec = seconds % 60;
    const min = Math.floor(seconds / 60);
    display.innerHTML = String(min).padStart(2, "0") + '：' + String(sec).padStart(2, "0");
  };
  
  const count_down_break = () => {
    const intervalID = setInterval(() => {
      if (countBreak > 0) {
        countBreak--;
        min_sec_show(countBreak);
      } else {
        clearInterval(intervalID);
        min_sec_show(countThrough);
        count_down_through();
      }
    }, 1000);
  };
  
  const count_start_h = () => {
    if (!startFB) {
      count_down_break();
      startFB = true;
    }
  };
  
  const count_down_through = () => {
    const intervalID = setInterval(() => {
      if (countThrough > 0) {
        countThrough--;
        min_sec_show(countThrough);
      } else {
        clearInterval(intervalID);
        startFB = false;
      }
    }, 1000);
  };

  count_start_h();
};
  
startBtn.addEventListener("click", () => {
  console.log("ugoita");
  breaktimer();
});

resetTmr.addEventListener("click", () => {
  if (!startFB){
    const display = document.getElementById("endBreakTimer");
    countBreak = 60;
    countThrough = 10;
    display.innerHTML = "01：00";
    console.log("reset");
    startFB = false;
  } else {
    console.log("タイマーは動作しているためリセットできないよー")
  }
});