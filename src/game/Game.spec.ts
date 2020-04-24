
import {Color, Game} from './Game';
import { Player } from './Player';
import { Card } from './Card';

describe('Game', () => {

  it('init', () => {
    const g = new Game(3);

    expect(g).toBeDefined();
  });

  describe('whoWins', () => {

    let cut: Game;
    const playerA = new Player('a');
    const playerB = new Player('b');

    const trumpS: Color = 's';

    beforeEach(() => {
      cut = new Game(2);

      cut.players.push(playerA);
      cut.players.push(playerB);
    });

    
    it('ace before king, same color, first player wins', () => {
      const middle: Card[] = []
      middle.push(new Card('sa'));
      middle.push(new Card('sk'));
  
      const winner = cut.whoWins(middle, trumpS);
      expect(winner).toBe(playerA);
    });

    it('ace before king, same color, second player wins', () => {
      const middle: Card[] = []
      middle.push(new Card('sk'));
      middle.push(new Card('sa'));
  
      const winner = cut.whoWins(middle, trumpS);
      expect(winner).toBe(playerB);
    });

    it('trump before others, first player wins', () => {
      const middle: Card[] = []
      middle.push(new Card('s2'));
      middle.push(new Card('ca'));
  
      const winner = cut.whoWins(middle, trumpS);
      expect(winner).toBe(playerA);
    });

  });
  
  it ('execute example', () => {
    const cut = new Game(4);
    cut.example();
  });

  describe('calculatePoints', () => {
    it('correct guess, no tricks', () => {
      const player = new Player('alice');
      player.setGuessedTricks(0);
      expect(Game.calculatePoints(player)).toBe(10);
    });

    it('correct guess, 1', () => {
      const player = new Player('alice');
      player.setGuessedTricks(1);
      player.incWonTricks();
      expect(Game.calculatePoints(player)).toBe(11);
    });

    it('guessed to many', () => {
      const player = new Player('alice');
      player.setGuessedTricks(3);
      player.incWonTricks();
      expect(Game.calculatePoints(player)).toBe(0);
    });

    it('guessed to few', () => {
      const player = new Player('alice');
      player.setGuessedTricks(0);
      player.incWonTricks();
      expect(Game.calculatePoints(player)).toBe(1);
    });
  });
});