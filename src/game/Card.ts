
export class Card {
  constructor(private readonly colorType: string) {

  }

  public toString() {
    switch (this.colorType[0]) {
      case 's': return 'spades';
      case 'c': return 'clubs';
      case 'h': return 'hearts';
      case 'd': return 'diamonds';
    }
  }
}