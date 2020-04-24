import { Card } from "./Card";

export class Player {

    private guessedTricks: number = 0;
    private readonly deck: Card[] = [];
    private points: number = 0;
    private wonTricks: number = 0;

    constructor(public readonly name: string) {

    }
    
    public setGuessedTricks(tricks: number) {
        this.guessedTricks = tricks;
        this.wonTricks = 0;
    }

    public getGuessedTricks() {
        return this.guessedTricks;
    }

    public addPoints(points: number) {
        this.points += points;
    }

    public addCard(card: Card) {
        this.deck.push(card);
    }

    public getPoints() {
        return this.points;
    }

    public getWonTricks() {
        return this.wonTricks;
    }

    public incWonTricks() {
        this.wonTricks += 1;
    }

    public playCard(): Card {
        const card: any = this.deck.pop();
        if (card) {
            return card;
        }
        throw new Error('problem in deck tried to play undefined card');
    }
}