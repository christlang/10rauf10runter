
import { Game } from './Game';

describe('Game', () => {

  it('init', () => {
    const g = new Game(3);

    expect(g).toBeDefined();
  });
});