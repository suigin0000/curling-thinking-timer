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