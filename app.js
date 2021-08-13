const playPause = document.querySelector("#play-pause");
const darkModeBtn = document.querySelector("#dark-mode-btn");
const r = document.querySelector(":root");

playPause.addEventListener("click", () => {
  playPause.innerText = toggleText(playPause, "play_arrow", "pause");
});

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
