import { CardsStack } from "./CardsStack";
import { Player } from "./Player";
import { Card } from "./Card";

export type Color = 's' | 'c' | 'h' | 'd';

export class Game {

  public readonly players: Player[] = [];

  constructor(private readonly playerCount: number) {
  }

  public example() {
    console.log(`start the example game with ${this.playerCount} players`);

    const bob = new Player('Bob');
    const alice = new Player('Alice');
    const charlie = new Player('Charlie');
    const dennis = new Player('Dennis');

    this.players.push(alice);
    this.players.push(bob);
    this.players.push(charlie);
    this.players.push(dennis);

    for (let round = 1; round <= 20; ++round) {
      console.log(`round ${round}`);

      const cardsToPlay = round < 11 ? round : 21 - round;

      const shuffledDeck = new CardsStack(52).shuffle();

      // giving cards
      for (let i=0; i<cardsToPlay; ++i) {
        this.players.forEach(player => {
          player.addCard(shuffledDeck.draw());
        });
      }
  
      const trump = shuffledDeck.draw();
  
      // guess the tricks
      alice.setGuessedTricks(Math.random() * cardsToPlay);
      bob.setGuessedTricks(Math.random() * cardsToPlay);
      charlie.setGuessedTricks(Math.random() * cardsToPlay);
      dennis.setGuessedTricks(Math.random() * cardsToPlay);

      // play
      for (let tricksRound = 1; tricksRound <= cardsToPlay; ++tricksRound) {
        const middle: Card[] = [];
        middle.push(alice.playCard());
        middle.push(bob.playCard());
        middle.push(charlie.playCard());
        middle.push(dennis.playCard());
    
        const playerThatGotTrick = this.whoWins(middle, trump.getColor());
        
        playerThatGotTrick.incWonTricks();
      }
      
      this.players.forEach(player => {
        player.addPoints(Game.calculatePoints(player));
      });
    }

    this.players.forEach(player => {
      console.log(`${player.name} got ${player.getPoints()}`)
    });
    
  }


  whoWins(middle: Card[], trump?: Color) {
    
    let highestCardWorth = 0;
    let highestIndex = 0;

    middle.forEach((card, index) => {
      const typeWorth = card.getTypeWorth();
      const trumpBonus = card.getColor() === trump ? 14 : 0;
      const cardWorth = typeWorth + trumpBonus;

      if (highestCardWorth < cardWorth) {
        highestCardWorth = cardWorth;
        highestIndex = index; 
      }
    })

    return this.players[highestIndex];
  }

  public static calculatePoints(player: Player): number {

    if (player.getGuessedTricks() > player.getWonTricks()) {
      return 0;
    }

    let points = player.getWonTricks();
    
    if (player.getGuessedTricks() === player.getWonTricks()) {
      points += 10;
    }
    return points;
  }
}