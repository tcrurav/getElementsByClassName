function initialize() {
  const BUTTONS = document.getElementsByClassName("read-more-button");
  for (var i = 0; i < BUTTONS.length; i++) {
    BUTTONS[i].addEventListener("click", toggleParagraph);
  }
}

function toggleParagraph(e) {
  const PARAGRAPH = e.target.previousElementSibling;
  if (PARAGRAPH.classList.contains("card-text-hidden")) {
    PARAGRAPH.classList.remove("card-text-hidden");
    return;
  }

  PARAGRAPH.classList.add("card-text-hidden");
}

initialize();