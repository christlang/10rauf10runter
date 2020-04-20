
export class Game {

  constructor(private readonly players: number) {
  }

  public start() {
    console.log(`start the game with ${this.players}`);
  }
}