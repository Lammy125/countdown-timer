let start = document.getElementById("start");
let reset = document.getElementById("reset");

let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let hourInput = document.querySelector("#hour-input");
let minInput = document.querySelector("#min-input");
let secInput = document.querySelector("#sec-input");

let startTimer = null;
const formatTime = (num = 0) => num.toString().padStart(2, "0");

function timer() {
  let hour_ = parseInt(hours.textContent);
  let min_ = parseInt(minutes.textContent);
  let secs_ = parseInt(seconds.textContent);

  if (secs_ == 0 && min_ == 0 && hour_ == 0) {
    stopTimer();
  }
  if (secs_ > 0) {
    secs_--;
  }
  if (secs_ == 0) {
    if (min_ > 0) {
      secs_ = 60;
      min_--;
    }
  }
  if (min_ == 0 && secs_ == 60) {
    if (hour_ > 0) {
      min_ = 60;
      hour_--;
    }
  }
  hours.textContent = formatTime(hour_);
  minutes.textContent = formatTime(min_);
  seconds.textContent = formatTime(secs_);
}

function stopTimer() {
  clearInterval(startTimer);
}

reset.addEventListener("click", function () {
  location.reload();
});

function startTiming() {
  startTimer = setInterval(function () {
    timer();
  }, 1000);
}

start.addEventListener("click", () => {
  const errorText = document.querySelector("#error");

  if (
    minInput.value &&
    secInput.value &&
    Number(minInput.value) <= 60 &&
    Number(secInput.value) <= 60
  ) {
    errorText.textContent = "";

    hours.textContent = formatTime(hourInput.value == "" ? 0 : hourInput.value);
    minutes.textContent = formatTime(minInput.value == "" ? 0 : minInput.value);
    seconds.textContent = formatTime(secInput.value == "" ? 0 : secInput.value);

    stopTimer();
    startTiming();
  } else {
    errorText.textContent = "Input(s) not valid!";
  }
});
