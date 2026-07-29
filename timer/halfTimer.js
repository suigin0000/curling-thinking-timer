// ハーフタイムタイマー
'use strict';

let countBreakH = 300;
let countThroughH = 10;
let startFBH = false;

const startBtn_half = document.getElementById("hStart");

const halftimer = () => {
  const display = document.getElementById("midGameTimer");

  const min_sec_show = (seconds) => {
    const sec = seconds % 60;
    const min = Math.floor(seconds / 60);
    display.innerHTML = String(min).padStart(2, "0") + '：' + String(sec).padStart(2, "0");
  };

  // 5分（ハーフタイム）のカウントダウン
  const count_down_break = () => {
    const intervalID = setInterval(() => {
      if (countBreakH > 0) {
        countBreakH--;
        min_sec_show(countBreakH);
      } else {
        clearInterval(intervalID);
        // --- 10秒タイマー（スルータイム）開始：白背景 × 黒文字に切り替え ---
        display.classList.add("through-phase");
        min_sec_show(countThroughH);
        count_down_through();
      }
    }, 1000);
  };

  // 10秒（スルータイム）のカウントダウン
  const count_down_through = () => {
    const intervalID = setInterval(() => {
      if (countThroughH > 0) {
        countThroughH--;
        min_sec_show(countThroughH);
      } else {
        clearInterval(intervalID);
        startFBH = false;
        // 終了したら深緑背景に戻す
        display.classList.remove("through-phase");
      }
    }, 1000);
  };

  const count_start_h = () => {
    if (!startFBH) {
      count_down_break();
      startFBH = true;
    }
  };

  count_start_h();
};

startBtn_half.addEventListener("click", () => {
  if (!startFBH){
    console.log("ugoita");
    halftimer();
  } else {
    console.log("タイマーはすでに動作していますよー");
  }
});
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
