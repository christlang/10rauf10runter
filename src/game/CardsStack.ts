import {Card} from "./Card";

export class CardsStack {

  private readonly stack: Card[] = [];

  private readonly colors: string[] = ['s', 'c', 'h', 'd'];
  private readonly type: string[] = ['a', '10', 'k', 'q', 'j', '9', '8', '7', '6', '5', '4', '3', '2'];

  constructor(private readonly cardsToPlay: number) {
    for (let i = 0; i < cardsToPlay; ++i) {
      this.stack.push(new Card(`${this.colors[i]}${this.type[0]}`));
    }
  }

  public draw(): Card {
    const candidate = this.stack.shift();
    if (candidate) {
      return candidate;
    }
    throw new Error('no cards left in stack');
  }
}