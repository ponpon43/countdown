document.getElementById('startButton').addEventListener('click', startCountdown);

let countdown;
let targetDate = new Date(new Date().getTime() + 10 * 60 * 1000); // 10分後の日時を設定

function startCountdown() {
  if (countdown) {
    clearInterval(countdown); // 既存のカウントダウンを停止(変更)
  }

  countdown = setInterval(updateCountdown, 1000); // 1秒ごとに更新

  function updateCountdown() {
    let now = new Date();
    let remainingTime = targetDate - now;

    if (remainingTime <= 0) {
      clearInterval(countdown); // タイマーが終了したら停止
      document.getElementById('countdown').innerHTML = "タイムアップ!";
    } else {
      let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      document.getElementById('countdown').innerHTML = minutes + "分 " + seconds + "秒";
    }
  }
}
