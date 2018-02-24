"use strict";

const name = 'Femi';
let happy = true;
let age = 33;
const hairColor = 'brown';

const femiArrayIsSuperCool = [name, happy, age, hairColor, ['kids', 'dogs', 4]];

const femi = {
    name: 'femi',
    age: 33,
    happy: true,
    hairColor: 'red',
}

const josh = {
    name: 'josh',
    age: 30,
    happy: false,
    hairColor: 'brown',
}

const studentArray = [femi, josh];
console.log(studentArray);

for (let i = 0; i < studentArray.length; i++) {
    console.log(`${studentArray[i].name} is ${studentArray[i].age} years old. He has ${studentArray[i].hairColor} hair. He is ${studentArray[i].happy? 'happy' : 'unhappy' }.`); 
    
}

(femi.happy) ? true : false;

if(femi.happy) {
    return 'happy';
} else {
    return 'unhappy';
}