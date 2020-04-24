import {Card} from "./Card";


describe('Card', () => {

  it('compare equal cards', () => {
    const a1 = new Card('sa');
    const a2 = new Card('sa');

    expect(a1).toEqual(a2);
  });

  it('compare different cards', () => {
    const a1 = new Card('sa');
    const a2 = new Card('sk');

    expect(a1).not.toEqual(a2);
  });

  it('getCardWorth of ace', () => {
    const a = new Card('sa');
    expect(a.getTypeWorth()).toBe(13);
  });

  it('getCardWorth of 2', () => {
    const a = new Card('h2');
    expect(a.getTypeWorth()).toBe(1);
  });

  it('getColor', () => {
    const a = new Card('h2');
    expect(a.getColor()).toBe('h');
  });
})