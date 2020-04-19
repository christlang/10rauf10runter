
import { Game } from './Game';

describe('Game', () => {

  it('init', () => {
    const g = new Game();

    expect(g).toBeDefined();
  });
});