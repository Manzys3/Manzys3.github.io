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

//Here is a programme inspired by the game ‘War Thunder’. 
//The programme takes a number between 0 and 360 and displays it in degrees. 
//Next, it displays ‘launch missile’, followed one second later by ‘missile launched’. 
//The programme displays the distance to the target as a countdown, whilst the distance between the missile and the vehicle increases. 
//When the distances to both the target and the missile are 13 km, it then displays ‘Target destroyed’.

class TorM1 { 

static maxRangeMissile = 15; //kilometriä

static maxRangeRadar = 26; //kilometriä

constructor(distanceToTarget) {

 const direction = Math.floor(Math.random() * 360) + 1;

 console.log(`Target spotted at ${direction}°`);

 this.distanceToTarget = distanceToTarget;

 let missileDistance = 0;

 const timer = setInterval(() => {

 this.distanceToTarget--;

 if (missileDistance < 15) {

 missileDistance++;

 }
 if (this.distanceToTarget === 25) {

 console.log('Missile launched');

 }

 console.log(

 `Distance to target: ${this.distanceToTarget} km | Distance from TorM1 (missile): ${missileDistance} km`

 );

 if (this.distanceToTarget <= 13) {

 console.log('Target destroyed')

 clearInterval(timer);
 }
 }, 1000);

 if (distanceToTarget <= 26){

 console.log('Launch missile')
 }
}
}
new TorM1(26)

