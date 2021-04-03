// 날짜, 시간 함수
let d = new Date();
let year = d.getFullYear();
let month = d.getMonth() + 1;
let date = d.getDate();
function time() {
  let d = new Date();
  let day = document.getElementById("day");
  let time = document.getElementById("time");
  let hour = d.getHours();
  let min = d.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  let sec = d.getSeconds();
  if (sec < 10) {
    sec = "0" + min;
  }
  let currentDate = year + "/" + month + "/" + date;
  let currentClock = hour + ":" + min + ":" + sec;
  day.innerHTML = currentDate;
  time.innerHTML = currentClock;
}

// 시간 갱신
function timeGo() {
  time();
  setInterval(time, 1000);
}
timeGo();

let todo_check = document.getElementById("todo_check");
let todo_time = document.getElementById("todo_time");
let inputList = document.getElementById("inputList");
let def_day = document.getElementById("def_day");
let btn = document.getElementById("switch");
let cnt_check = 1;
let cnt_time = 1;

// 기간없음 위치와 기간제한 위치 정하는 스위치
let i = document.getElementById("switch");
function switchTodo() {
  if (i.className == "far fa-clipboard") {
    i.className = "far fa-clock";
    def_day.style.display = "block";
    btn.style.top = "23%";
    inputList.placeholder = "디데이 선택 후 엔터를 치세요 (16글자가 최대)";
    inputList.focus();
  } else if (i.className == "far fa-clock") {
    i.className = "far fa-clipboard";
    def_day.style.display = "none";
    btn.style.top = "50%";
    inputList.placeholder = "할 일을 입력 후 엔터를 치세요 (16글자가 최대)";
    inputList.focus();
  }
}

// 리스트 생성
function createlist() {
  let year_def = def_day.valueAsDate.getFullYear();
  let month_def = def_day.valueAsDate.getMonth() + 1;
  let date_def = def_day.valueAsDate.getDate();
  let time_year = year - year_def;
  let time_month = month - month_def;
  let time_date = date - date_def;

  var temp = document.createElement("li");
  if (i.className == "far fa-clipboard") {
    temp.setAttribute("class", "list");
    temp.setAttribute("id", "list_check" + cnt_check);
  } else if (i.className == "far fa-clock") {
    temp.setAttribute("class", "list");
    temp.setAttribute("id", "list_time" + cnt_time);
  }

  let d_day = time_year * 365 + time_month * 30 + time_date;
  d_day = Math.abs(d_day);
  temp.innerHTML = "D-" + d_day + "    ";
  temp.innerHTML += inputList.value;

  if (i.className == "far fa-clipboard") {
    temp.innerHTML += "<button type='button' onclick='remove_check(" + cnt_check + ")'>삭제</button>";
    todo_check.appendChild(temp);
  } else if (i.className == "far fa-clock") {
    temp.innerHTML += "<button type='button' onclick='remove_time(" + cnt_time + ")'>삭제</button>";
    todo_time.appendChild(temp);
  }
}

// 리스트(기한없음) 제거
function remove_check(cnt_check) {
  let li = document.getElementById("list_check" + cnt_check);
  todo_check.removeChild(li);
}

// 리스트(기간제한) 제거
function remove_time(cnt_time) {
  let li = document.getElementById("list_time" + cnt_time);
  todo_time.removeChild(li);
}

// 엔터 입력 리스너
function enterkey() {
  if (window.event.keyCode == 13) {
    console.log(inputList.value);
    createlist();
    inputList.value = "";
    inputList.focus();
  }
}
