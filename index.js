'use strict';

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}
0

var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout",
"He hated the sound of his own voice"];

function johnLennonFacts(facts) {
    var newFacts=[];
    var i = 0;
    while (i < facts.length) {
        newFacts[i] = facts[i] + "!!!";
        i++;
    }
    return newFacts;
}

console.log(johnLennonFacts(facts));

  }
  
 //ca
function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number += 1
  } while (number < 15);
  return array;
} 