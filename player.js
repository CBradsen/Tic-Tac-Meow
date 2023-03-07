class Player {
  constructor(name, id, token, winImages, lossImages) {
    this.name = name;
    this.id = id;
    this.token = `<img src="${token}" alt="${name}" id="${name}">`;
    this.wins = 0;
    this.winImages = winImages;
    this.lossImages = lossImages;
  }
  increaseWins() {
    this.wins += 1;
  }
}