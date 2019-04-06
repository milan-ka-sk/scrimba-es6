import { Animal, Cat } from './animal.js';

let cat = new Cat('Cat', 4);

cat.makeNoise(); // meow

console.log(cat.metaData); // Type: Cat, Legs: 4