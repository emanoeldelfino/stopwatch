const playPause = document.querySelector("#play-pause");
const darkModeBtn = document.querySelector("#dark-mode-btn");
const r = document.querySelector(":root");
const timer = document.querySelector("#timer");
const reset = document.querySelector("#reset");

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

playPause.addEventListener("click", () => {
  playPause.innerText = toggleText(playPause, "play_arrow", "pause");
  if (playPause.innerText === "pause") {
    timerInterval = setInterval(timerCycle, 1000);
  } else {
    clearInterval(timerInterval);
  }
});

reset.addEventListener("click", () => {
  clearInterval(timerInterval);
  timer.innerHTML = "00:00:00";
  sec = 0;
  min = 0;
  hr = 0;

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

// Code adapted from https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak

let sec = 0,
  min = 0,
  hr = 0;

function timerCycle() {
  sec += 1;

  if (sec == 60) {
    min += 1;
    sec = 0;
  }
  if (min == 60) {
    hr += 1;
    console.log(hr);
    min = 0;
    sec = 0;
  }

  timer.innerHTML = `${String(hr).padStart(2, "0")}:${String(min).padStart(
    2,
    "0"
  )}:${String(sec).padStart(2, "0")}`;
}
