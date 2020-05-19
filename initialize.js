function fetchPrevScore() {
  return Number(localStorage.getItem("prevScore"));
}

function showPrevScore(prevScore) {
  let bruh = document.querySelector(".container");
  let bruhItem = document.createElement("h2");
  bruhItem.appendChild(document.createTextNode(`Previous Score: ${prevScore}`));
  bruh.appendChild(bruhItem);
}

function initialize(tracks) {
  document.getElementById("points").innerHTML = `Score: 0`;
  if (localStorage.getItem("prevScore")) {
    showPrevScore(fetchPrevScore());
  }
  player = new Player();
  for (let i = 0; i < tracks; i++) {
    if (isInitialized) {
      let randomNum = Math.round(Math.random());
      if (randomNum === 1) {
        course.push(new Road(initialX, initialY));
      } else {
        course.push(new Safezone(initialX, initialY));
      }
    } else {
      course.push(new Safezone(initialX, initialY));
      isInitialized = true;
    }
    initialY -= 0.1 * h;
  }
}
