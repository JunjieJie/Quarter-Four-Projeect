function initialize(tracks) {
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
