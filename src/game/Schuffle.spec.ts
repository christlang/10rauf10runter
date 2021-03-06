import {fisherYatesShuffle, naiveShuffle} from "./Shuffle";
import { Card } from "./Card";

function shuffleTries(tries: number, algorithm: (a: number[]) => number[]): number {
  const shuffles = new Map();

  for (let i=0; i<tries; ++i) {
    const key = algorithm([1, 2, 3, 4]).join();
    const counter = shuffles.get(key) || 0;
    shuffles.set(key, counter + 1);
  }

  const variants = 4*3*2;
  expect(shuffles.size).toBe(variants);

  const normal = tries / variants;
  let sumAwayFromNormal = 0;
  shuffles.forEach((value) => {
    sumAwayFromNormal += Math.abs(value - normal);
  })

  return sumAwayFromNormal;
}

it ('compare naive with Knuth shuffle', () => {
  const naive = shuffleTries(1000, naiveShuffle);
  const fisherYes = shuffleTries(1000, fisherYatesShuffle);

  expect(naive > fisherYes).toBeTruthy();
})

it('shuffle returns copied object - Fischer Yates', () => {
  const card = new Card('ha');
  const stack = [card];
  const shuffled = fisherYatesShuffle(stack);

  expect(shuffled[0]).toEqual(card);
});

it('shuffle returns copied object - naive shuffle', () => {
  const card = new Card('ha');
  const stack = [card];
  const shuffled = naiveShuffle(stack);

  expect(shuffled[0]).toEqual(card);
});