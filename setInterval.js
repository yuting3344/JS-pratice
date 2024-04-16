
//進階版本---爾均
let num = 10;
let time;
function start() {
  time = setInterval(() => {
    console.log(num);
    num--;
  }, 1000);
  console.log("go");
}
function stop() {
  clearInterval(time);
  console.log("stop");
}

start();
const toggleBtn = document.querySelector("#go");
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
  num = 10;
  console.log("reset");
});

toggleBtn.addEventListener("click", () => {
  if (toggleBtn.className === "go") {
    toggleBtn.className = "stop";
    toggleBtn.textContent = "go";
    stop();
  } else {
    toggleBtn.className = "go";
    toggleBtn.textContent = "stop";
    start();
  }
});

//昊聲
let counter = 10;
let pause = true;
const switchBtn = document.querySelector(".stop");

switchBtn.addEventListener("click", function () {
  if (pause == false) {
    pauseTimer();
    pause = true;
  } else if (pause == true) {
    restartTimer();
    pause = false;
  }
});

const pauseTimer = function () {
  clearInterval(intervalID);
};

const restartTimer = function () {
  timer();
};

function timer() {
  intervalID = setInterval(function () {
    console.log(counter);
    counter--;
  }, 100);
}
