import { cloneDeep } from 'lodash';

function copy<T>(deck: T[]) {
  return cloneDeep(deck);
}

export function fisherYatesShuffle<T>(deck: T[]): T[] {
  const shuffled = copy(deck);

  for (let i = shuffled.length - 1; i > 0; i--) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    const currentCard = shuffled[i];
    shuffled[i] = shuffled[swapIndex];
    shuffled[swapIndex] = currentCard;
  }
  return shuffled;
}

export function naiveShuffle<T>(deck: T[]): T[] {
  const shuffled = copy(deck);

  for (let i = shuffled.length - 1; i > 0; i--) {
    const swapIndex = Math.floor(Math.random() * shuffled.length)
    const currentCard = shuffled[i]
    shuffled[i] = shuffled[swapIndex]
    shuffled[swapIndex] = currentCard
  }
  return shuffled;
}