//In this file, Description of program is at the top.
//The actual code is below the comment. A comment between 
//programs mean that the program have changed. 
//So don't mix them togheter. 





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

//The program creates five people with randomly selected names and birth years. 
//It prints each person’s introduction, shows the ages of the first and last people, and logs the full list of people.

const arvoLuku = (minLuku, maxLuku) => //generates an integer

 Math.floor(Math.random() * (maxLuku + 1 - minLuku)) + minLuku;

const etunimet = [

 'Anneli',

 'Pekka',

 'Irmeli',

 'Kalervo',

 'Aulikki',

 'Jarkko',

 'Kaarina',

 'Reino',

];

const sukunimet = [

 'Auvinen',

 'Pekkanen',

 'Immonen',

 'Kankainen',

 'Pennanen',

 'Ruuskanen',

 'van der Vaart',

];

const ihmiset = [];


class Ihminen {

 constructor(etunimi, sukunimi, syntymavuosi){

 this.etunimi = etunimi;

 this.sukunimi = sukunimi;

 this.syntymavuosi = syntymavuosi;

 }

 esittaydy() { //Prints one person's introduction. This is called five times.

 console.log(`Nimeni on ${this.sukunimi}, ${this.etunimi} ${this.sukunimi}`);

}

kerroIka() { //Subtracts the person's birth year from the current year to get their age.

 const ika = new Date().getFullYear() - this.syntymavuosi;

 console.log(`Olen ${ika}-vuotias`);

}

}

for(let i = 0; i < 5; i++){

const ihminen = new Ihminen (

 etunimet[arvoLuku(0, etunimet.length - 1)], //Randomly selects a name from index 0 to the last name.

sukunimet[arvoLuku(0, sukunimet.length - 1)],

arvoLuku(1970, 2020) //Generates a random number between 1970 and 2020.

);

ihmiset.push(ihminen)

}

for (const ihminen of ihmiset) { //Goes through the people and asks each one to introduce themselves.

 ihminen.esittaydy();

}

ihmiset[0].kerroIka(); //Prints the first person's age.

ihmiset[ihmiset.length - 1].kerroIka();//Prints the last person's age.

console.log(ihmiset)
