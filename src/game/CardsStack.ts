import {Card} from "./Card";
import {fisherYatesShuffle} from "./Shuffle";

export class CardsStack {
  private readonly stack: Card[] = [];

  private readonly colors: string[] = ['s', 'c', 'h', 'd'];
  private readonly type: string[] = ['a', '10', 'k', 'q', 'j', '9', '8', '7', '6', '5', '4', '3', '2'];

  constructor(private readonly cardsToPlay: number, stack?: Card[]) {
    if (stack && cardsToPlay !== stack.length) {
      throw new Error(`given cards to play ${cardsToPlay} has to be equal to length of given stack ${JSON.stringify(stack)}`);
    }
    if (stack) {
      this.stack = stack;
    } else {
      for (let i = 0; i < cardsToPlay; ++i) {
        const color = this.colors[i%4];
        const type = this.type[Math.floor(i/4)];
        if (!color || !type) {
          throw new Error(`error in producing cards for ${cardsToPlay} at iteration ${i}`);
        }
        this.stack.push(new Card(`${color}${type}`));
      }
    }
  }

  /**
   * Shuffle creates a new shuffled CardStack.
   *
   * Try rto stay immutable.
   *
   * source of help for a good shuffle
   * https://medium.com/@oldwestaction/randomness-is-hard-e085decbcbb2
   */
  public shuffle(): CardsStack {
    return new CardsStack(this.cardsToPlay, fisherYatesShuffle<Card>(this.stack));
  }



  public draw(): Card {
    const candidate = this.stack.shift();
    if (candidate) {
      return candidate;
    }
    throw new Error('no cards left in stack');
  }
}