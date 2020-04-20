import { CardsStack } from './CardsStack';
import {Card} from "./Card";


describe('CardsStack', () => {

  it('draw', () => {
    const cut = new CardsStack(4);
    const ace1 = cut.draw();

    expect(ace1).toEqual(new Card('sa'));

    const ace2 = cut.draw();
    expect(ace2).toEqual(new Card('ca'));
  });
});