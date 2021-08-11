const playPause = document.querySelector("#play-pause");

playPause.addEventListener("click", () => {
  const playPauseText = playPause.innerText;

  playPause.innerText = playPauseText === "play_arrow" ? "pause" : "play_arrow";
});

function toggleText(elem, ...args) {
  const elemText = elem.innerText;
  
  if (args.includes(elemText) && !hasDuplicates(args)) {
     console.log(args.indexOf(elemText));
    if (args.indexOf(elemText) < args.length - 1) {
      const replaceText = args[indexOf(elemText) + 1];
    } else {
      const replaceText = args[0];
    }
    console.log(replaceText);
  } else {
    console.log("Invalid arguments after elem. It doesn't include the text of element or it has duplicates."); 
  }
}

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

toggleText(playPause, "a", "b", "c", "d");
