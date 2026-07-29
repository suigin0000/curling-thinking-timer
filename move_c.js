// タブのボタン切り替え,その他動作
'use strict';

window.addEventListener("load", () => {
  // 関数呼び出し
  showTab(0);  
  showSwitch(0);
  redCountDownTimer();
  yellowCountDownTimer();
  exRedCountDownTimer();
  exYellowCountDownTimer();
});

// ここでタブの切り替え
// タブの表示・非表示(使用しているタイマーの表示、非表示)
function showTab(index){
  const tabs = document.querySelectorAll('.tabContent');
  tabs.forEach((tab, i) => {
    if (i === index){
      tab.classList.add('active');
    } else{
      tab.classList.remove('active');
    }
  });
}

// 必要に応じてアクション内容の表示・非表示
// スイッチの表示と非表示、使うスイッチの選択
function showSwitch(index){
  const tabs = document.querySelectorAll('.actionContent');
  tabs.forEach((tabs, i) => {
    if (i === index){
      tabs.classList.add('sActive');
    } else{
      tabs.classList.remove('sActive');
    }
  });
}

document.addEventListener("DOMContentLoaded",() => {
    let buttons = document.querySelectorAll('.offTimer');
    buttons.forEach((button) => {
        button.addEventListener('click',() => push(button));
    })
});

const push = (object) => {
  let that = object;
  let buttons = document.querySelectorAll('.offTimer');

  buttons.forEach(button => {
      button.dataset.pushed = "false";
  });

  that.dataset.pushed="true";
};



// ここから追加項目↓
document.addEventListener("DOMContentLoaded", () => {
  // --- トラベルタイム（タイムアウト）の増減ロジック ---
  const travelShow = document.getElementById("travelTimeShow");
  const travelMinus = document.getElementById("travelMinus");
  const travelPlus = document.getElementById("travelPlus");

  if (travelShow && travelMinus && travelPlus) {
    // 矢印クリックで10秒ずつ増減
    travelMinus.addEventListener("click", () => {
      // タイマーが動作中（startFToがtrue）の時は何もしない
      if (startFTo) {
        console.log("タイマー動作中のため、トラベルタイムは変更できません");
        return;
      }

      if (travelTime > 0) {
        travelTime -= 10;
        travelShow.textContent = travelTime;
        resetTimeoutTimer(); // 画面のタイマー表示も更新
      }
    });

    travelPlus.addEventListener("click", () => {
      // タイマーが動作中（startFToがtrue）の時は何もしない
      if (startFTo) {
        console.log("タイマー動作中のため、トラベルタイムは変更できません");
        return;
      }

      travelTime += 10;
      travelShow.textContent = travelTime;
      resetTimeoutTimer(); // 画面のタイマー表示も更新
    });
  }
  // --- ルール選択ボタンとメインタイマーへの自動遷移 ---
  const btn8 = document.getElementById("set8");
  const btn10 = document.getElementById("set10");
  const btnMD = document.getElementById("setMD");

  const transitionToMainTimer = () => {
    // 1. メインタイマー（インデックス0）に切り替え
    showTab(0);
    showSwitch(0);

    // 2. 左側メニューのボタンの見た目（青背景）をメインタイマーに同期
    const menuButtons = document.querySelectorAll('.offTimer');
    menuButtons.forEach(button => {
      if (button.id === "onTimer") {
        button.dataset.pushed = "true";
      } else {
        button.dataset.pushed = "false";
      }
    });
  };

  if (btn8) {
    btn8.addEventListener("click", () => {
      setMainTimerDuration(30); // 8エンド: 30分
      transitionToMainTimer();
    });
  }
  if (btn10) {
    btn10.addEventListener("click", () => {
      setMainTimerDuration(38); // 10エンド: 38分
      transitionToMainTimer();
    });
  }
  if (btnMD) {
    btnMD.addEventListener("click", () => {
      setMainTimerDuration(22); // MD: 22分
      transitionToMainTimer();
    });
  }
});

// --- ルール選択ボタンとメインタイマー・エクストラタイマーへの自動連動 ---
  const btn8 = document.getElementById("set8");
  const btn10 = document.getElementById("set10");
  const btnMD = document.getElementById("setMD");

  if (btn8) {
    btn8.addEventListener("click", () => {
      setMainTimerDuration(30);       // 8エンド: メイン30分
      setExtraTimerDuration(4, 30);   // エクストラ: 4分30秒
      transitionToMainTimer();
    });
  }
  if (btn10) {
    btn10.addEventListener("click", () => {
      setMainTimerDuration(38);       // 10エンド: メイン38分
      setExtraTimerDuration(4, 30);   // エクストラ: 4分30秒
      transitionToMainTimer();
    });
  }
  if (btnMD) {
    btnMD.addEventListener("click", () => {
      setMainTimerDuration(22);       // MD: メイン22分
      setExtraTimerDuration(3, 0);    // MD: エクストラ3分00秒
      transitionToMainTimer();
    });
  }
