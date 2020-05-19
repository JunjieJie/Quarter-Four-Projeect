function endGameModal() {
  let modal = document.createElement("div");
  modal.classList.add("modal");
  let messageHeader = document.createElement("h3");
  messageHeader.appendChild(document.createTextNode(`Game Over`));
  modal.appendChild(messageHeader);
  let messageBody = document.createElement("h4");
  messageBody.appendChild(document.createTextNode(`Your Score: ${score}`));
  modal.appendChild(messageBody);
  let replayBttn = document.createElement("button");
  replayBttn.classList.add("replay-btn");
  replayBttn.appendChild(document.createTextNode("Play Again"));
  modal.appendChild(replayBttn);
  document.body.appendChild(modal);
  document.querySelector(".replay-btn").addEventListener("click", () => {
    location.reload();
  });
}

function endGame() {
  noLoop();
  endGameModal();
  localStorage.setItem("prevScore", score);
}
