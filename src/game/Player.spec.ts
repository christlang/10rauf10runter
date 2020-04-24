import {Player} from "./Player";

describe('Player', () => {

  it('guessTrick is resetting wonTricks', () => {
    const cut = new Player('a');
    // round 1
    cut.setGuessedTricks(2);
    cut.incWonTricks()
    expect(cut.getWonTricks()).toEqual(1);

    // round 2
    cut.setGuessedTricks(3);

    expect(cut.getWonTricks()).toEqual(0);
  });
});