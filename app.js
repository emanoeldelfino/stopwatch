const playPause = document.querySelector("#play-pause");

playPause.addEventListener("click", () => {
  const playPauseText = playPause.innerText;

  playPause.innerText = playPauseText === "play_arrow" ? "pause" : "play_arrow";
});

function toggleText(elem, ...args) {
  const elemText = elem.innerText;

  args.forEach((arg) => {
    console.log(arg);
  });
}

toggleText(playPause, "a", "b", "c", "d");
