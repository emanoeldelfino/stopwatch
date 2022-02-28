const playPause = document.querySelector("#play-pause");
const darkModeBtn = document.querySelector("#dark-mode-btn");
const r = document.querySelector(":root");
const timer = document.querySelector("#timer");
const reset = document.querySelector("#reset");
const title = document.querySelector("title");

// inspired by https://stackoverflow.com/questions/26317480/how-can-i-create-a-stopwatch-using-date-now-in-js

let previousTime, elapsedTime = 0;

function updateTime() {
  let tempTime = elapsedTime;
  let milliseconds = Math.floor((tempTime % 1000) / 10);
  tempTime = Math.floor(tempTime / 1000);
  let seconds = tempTime % 60;
  tempTime = Math.floor(tempTime / 60);
  let minutes = tempTime % 60;
  tempTime = Math.floor(tempTime / 60);
  let hours = tempTime % 60;

  let time = [hours, minutes, seconds].map(temp => temp.toString().padStart(2, "0")).join(":");

  let msString = milliseconds.toString().padStart(2, "0");

  title.innerText = time;

  timer.innerHTML = time + "<i>." + msString + "</i>";
}

darkModeBtn.addEventListener("click", () => {
  darkModeBtn.innerText = toggleText(darkModeBtn, "dark_mode", "lightbulb");
  let bg, fg;
  [bg, fg] =
    darkModeBtn.innerText === "lightbulb"
      ? ["black", "white"]
      : ["white", "black"];
  r.style.setProperty("--background", bg);
  r.style.setProperty("--foreground", fg);
});

document.addEventListener("keydown", e => {
  if (e.key === " ") {
    playPause.click();
  } else {
    e.key.toUpperCase() === "R" && reset.click();
  }
});

playPause.addEventListener("click", () => {
  playPause.innerText = toggleText(playPause, "play_arrow", "pause");
  if (playPause.innerText === "pause") {
    timerInterval = setInterval(() => {
      if (!previousTime) {
        previousTime = Date.now();
      }

      elapsedTime += Date.now() - previousTime;
      previousTime = Date.now();

      updateTime();
    }, 50);
  } else {
    clearInterval(timerInterval);
    previousTime = null;
  }
});

reset.addEventListener("click", () => {
  typeof timerInterval !== "undefined" && clearInterval(timerInterval);
  previousTime = null;
  elapsedTime = 0;
  updateTime();

  if ((playPause.innerText = "pause")) {
    playPause.innerText = toggleText(playPause, "play_arrow", "pause");
  }
});

function toggleText(elem, ...args) {
  const elemText = elem.innerText;

  if (args.includes(elemText) && !hasDuplicates(args)) {
    let replaceText = "";
    console.log(args.indexOf(elemText), args.length - 1);
    if (args.indexOf(elemText) < args.length - 1) {
      replaceText = args[args.indexOf(elemText) + 1];
    } else {
      replaceText = args[0];
    }
    console.log(replaceText);
    return replaceText;
  } else {
    throw new Error(
      "Invalid arguments after elem. It doesn't include the text of element or it has duplicates."
    );
  }
}

function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}