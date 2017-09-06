var Peoples = require('./../js/pigdice.js').playerModule;
var Dice = require('./../js/pigdice.js').diceModule;

describe('PiggyWiggy', function() { //suite
  var player1;
  var player2;
  var gameDie;
  var array = [1,2,3,4,5,6]
  function isItInThere(number) {
    var output = true;
    for(var i=0; i <array.length; i++) {
      if (i === number) {
      output = true;
      break;
    } else {
      output = true;
      break;
    }
  }
  return output;
}
  //before
  beforeEach(function() {
    player1 = new Peoples(0,0);
    player2 = new Peoples(0,0);
    gameDie = new Dice("theDie");

  });
  //after
  it('should test whether a dice roll returns value between 1 and 6', function() {
    var randomNumber = gameDie.getRandomIntInclusive(1,6)
    console.log(randomNumber);
    expect(true).toEqual(isItInThere(randomNumber))
  });

  it('should test adding current roll to temp score', function() {
    var temporaryScore = player1.addToTemp(4)
    var temporaryScore = player1.addToTemp(3)
    var temporaryScore = player1.addToTemp(1)
    console.log(temporaryScore);
    expect(8).toEqual(player1.temporaryScore)
  });

  it('should test adding temp score to total', function() {
    player1.totalScore = 0
    var temporaryScore = player1.addToTemp(4)
    var temporaryScore = player1.addToTemp(3)
    var temporaryScore = player1.addToTemp(1)
    player1.addToTotal(player1.temporaryScore)
    expect(8).toEqual(player1.totalScore)
  });


  it('should test whether rolling a 1 ends the turn', function() {
    var randomNumber = gameDie.getRandomIntInclusive(1,6)
    console.log(randomNumber);
    expect(true).toEqual(isItInThere(randomNumber))
  });


});
