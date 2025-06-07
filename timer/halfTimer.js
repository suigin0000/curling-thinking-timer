// ハーフタイムタイマー
'use strict';

let countBreakH = 300;
let startFBH = false;
let countThroughH = 10;

const startBtn_half = document.getElementById("hStart");

const halftimer = () => {

  const display = document.getElementById("midGameTimer");

  const min_sec_show = (seconds) => {
    const sec = seconds % 60;
    const min = Math.floor(seconds / 60);
    display.innerHTML = String(min).padStart(2, "0") + '：' + String(sec).padStart(2, "0");
  };
  
  const count_down_break = () => {
    const intervalID = setInterval(() => {
      if (countBreakH > 0) {
        countBreakH--;
        min_sec_show(countBreakH);
      } else {
        clearInterval(intervalID);
        min_sec_show(countThroughH);
        count_down_through();
      }
    }, 1000);
  };
  
  const count_start_h = () => {
    if (!startFBH) {
      count_down_break();
      startFBH = true;
    }
  };
  
  const count_down_through = () => {
    const intervalID = setInterval(() => {
      if (countThroughH > 0) {
        countThroughH--;
        min_sec_show(countThroughH);
      } else {
        clearInterval(intervalID);
      }
    }, 1000);
  };

  count_start_h();
};
  
startBtn_half.addEventListener("click", () => {
  if (!startFBH){
    console.log("ugoita");
    halftimer();
  } else {
    console.log("タイマ－はすでに動作していますよー")
  }
});
