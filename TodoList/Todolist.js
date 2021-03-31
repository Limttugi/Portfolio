let day = document.getElementById("day");
let time = document.getElementById("time");
let d = new Date();
let date = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
let clock = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
day.innerHTML = date;
time.innerHTML = clock;

let todo_check = document.getElementById("todo_check");
let todo_time = document.getElementById("todo_time");
let inputList = document.getElementById("inputList");
let cnt_check = 1;
let cnt_time = 1;

// 기간없음 위치와 기간제한 위치 정하는 스위치
let i = document.getElementById("switch");
function switchTodo() {
  if (i.className == "far fa-clipboard") {
    i.className = "far fa-clock";
    inputList.focus();
  } else if (i.className == "far fa-clock") {
    i.className = "far fa-clipboard";
    inputList.focus();
  }
}

// 리스트 생성
function createlist() {
  var temp = document.createElement("li");
  temp.setAttribute("class", "check");
  temp.setAttribute("id", "list" + cnt_check);
  temp.innerHTML = inputList.value;
  if (i.className == "far fa-clipboard") {
    temp.innerHTML += "<button type='button' onclick='remove(" + cnt_check + ")'>삭제</button>";
    todo_check.appendChild(temp);
  } else if (i.className == "far fa-clock") {
    temp.innerHTML += "<button type='button' onclick='remove(" + cnt_time + ")'>삭제</button>";
    todo_time.appendChild(temp);
  }
}

// 리스트 제거
function remove(cnt_check) {
  let li = document.getElementById("list" + cnt_check);
  todo_check.removeChild(li);
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
