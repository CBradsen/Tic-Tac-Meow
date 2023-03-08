class Player {
  constructor(name, id, token) {
    this.name = name;
    this.id = id;
    this.token = `<img src="${token}" alt="${name}" id="${name}">`;
    this.wins = 0;
  }
  increaseWins() {
    this.wins += 1;
  }
}