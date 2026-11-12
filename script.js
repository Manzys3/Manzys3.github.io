// Number guessing game

import readlineSync, { question } from 'readline-sync';

const minLuku = 1;

const maksLuku = 30;

const oikeaLuku =

  Math.floor(Math.random() * (maksLuku - minLuku + 1)) + minLuku;

let arvaustenLkm = 0;

while (true) {

  const arvaus = Number(readlineSync.question('Arvaa luku 1-30: '));

  if (arvaus < minLuku) {

    console.log('Liian pieni luku');

    continue;
  }
  if (arvaus > maksLuku) {

    console.log('Liian iso luku');

    continue;
  }
  arvaustenLkm++;

  if (arvaus < oikeaLuku) {

    console.log('Arvattava luku on isompi');

  } else if (arvaus > oikeaLuku) {

    console.log('Arvattava luku on pienempi');
  } else {
    console.log(`正解. Arvasit ${arvaustenLkm} kertaa.`);
    break;
  }
}
