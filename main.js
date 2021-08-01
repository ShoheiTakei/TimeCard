// 定義
const goBtn = document.getElementById('goBtn');
const backBtn = document.getElementById('backBtn');
const orderBtn = document.getElementById('orderBtn');
const result = document.getElementById('result');
const RealtimeClockArea = document.getElementById('RealtimeClockArea');
const body = document.querySelector('body');
let time;

// 秒数を、時間で表記するために変換している関数っぽい
function setfig(num) {
    // 桁数が1桁だったら先頭に0を加えて2桁に調整する
    let ret;
    if (num < 10) {
        ret = "0" + num;
    } else {
        ret = num;
    }
    return ret;
}

//時:分:秒を取得する
function showClock() {
    const nowTime = new Date();
    const nowHour = setfig(nowTime.getHours());
    const nowMin = setfig(nowTime.getMinutes());
    const nowSec = setfig(nowTime.getSeconds());
    const msg = nowHour + ":" + nowMin + ":" + nowSec;
    RealtimeClockArea.innerHTML = msg;
    time = nowHour + "時" + nowMin + "分";
}

// 1秒ごとに時間を更新
setInterval('showClock()', 1000);

// ----------------------------------------------------------------------------

const check = (state) => {
    const name = document.getElementById('name');
    const a = document.createElement("a");
    if (name.value === "") {
        alert('名前が未入力です');
    } else {
        alert(`${name.value}さんは、${time}に${state}しました。`)
        a.innerHTML = `${name.value}さんは、${time}に${state}しました。\n`
        result.appendChild(a);
        name.value = "";
    }
}

// 出勤ボタン処理
goBtn.addEventListener('click', () => {
    check("出勤")
});

// 退勤ボタン処理
backBtn.addEventListener('click', () => {
    check("退勤");
});
