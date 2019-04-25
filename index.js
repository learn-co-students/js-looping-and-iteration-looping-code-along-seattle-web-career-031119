// Code your solutions in this file
const random = require('./randomHelper');

function printBadges (badges) {
  for(let i = 0; i < badges.length; i++){
    console.log(`Welcome ${badges[i]}! You are employee #${i+1}.`)
  }
  return badges
}

function tailsNeverFails(){
  let tails = 0;
  while(random() >= .5){
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}

module.exports = {
  random: Math.random
}
