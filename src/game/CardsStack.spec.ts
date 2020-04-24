import { CardsStack } from './CardsStack';
import {Card} from "./Card";


describe('CardsStack', () => {

  it ('draw more than in stack', () => {
    const cut = new CardsStack(0);
    expect(() => cut.draw()).toThrow('no cards left in stack');
  })

  it('draw 4 of 4 cards', () => {
    const cut = new CardsStack(4);
    const ace1 = cut.draw();

    expect(ace1).toEqual(new Card('sa'));

    const ace2 = cut.draw();
    expect(ace2).toEqual(new Card('ca'));

    const ace3 = cut.draw();
    expect(ace3).toEqual(new Card('ha'));

    const ace4 = cut.draw();
    expect(ace4).toEqual(new Card('da'));
  });

  it('draw 8 of 8 cards', () => {
    const cut = new CardsStack(8);
    const cards = [];

    for (let i = 0; i < 8; ++i) {
      cards.push(cut.draw());
    }

    expect(cards[0]).toEqual(new Card('sa'));
    expect(cards[1]).toEqual(new Card('ca'));
    expect(cards[2]).toEqual(new Card('ha'));
    expect(cards[3]).toEqual(new Card('da'));
    expect(cards[4]).toEqual(new Card('s10'));
    expect(cards[5]).toEqual(new Card('c10'));
    expect(cards[6]).toEqual(new Card('h10'));
    expect(cards[7]).toEqual(new Card('d10'));
  });

  it('try to create a stack that is to big (only 52 cards in game)', () => {
    expect(() => new CardsStack(53)).toThrow('error in producing cards for 53 at iteration 52');
  });

  it('cards from stack', () => {
    const cut = new CardsStack(1);
    const a = cut.draw();

    expect(a.getColor()).toBe(a.getColor());
  });

  it('shuffled cards', () => {
    const cut = new CardsStack(1);
    const shuffled = cut.shuffle();
    const a = shuffled.draw();

    expect(a.getColor()).toBe(a.getColor());
  })
});