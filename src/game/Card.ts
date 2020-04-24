import { Color } from "./Game";

type Type = 'a' | 'k' | 'q' | 'j' | '10' | '9' |'8' |'7' |'6' |'5' |'4' |'3' |'2';

const typeWorth = ['a', 'k' , 'q' , 'j' , '10' , '9' ,'8' ,'7' ,'6' ,'5' ,'4' ,'3' ,'2'];

export class Card {

  constructor(private readonly colorType: string) {

  }

  getType(): Type {
    return this.colorType[1] as Type;
  }

  getTypeWorth(): number {
    return 13 - typeWorth.indexOf(this.getType());
  }

  getColor(): Color {
    return this.colorType[0] as Color;
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