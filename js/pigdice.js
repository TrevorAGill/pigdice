// function Pigdice () {

  function Player (totalScore, temporaryScore, playerName) {
    this.totalScore = totalScore;
    this.temporaryScore = temporaryScore;
    this.playerName = playerName;
  }

  function Dice (diceName) {
    this.diceName = diceName;
  }

  Player.prototype.addToTemp = function(diceRoll) {
    return this.temporaryScore += diceRoll;
  }

  Player.prototype.addToTotal = function(temporaryScore) {
    return this.totalScore += this.temporaryScore;
  }


  Dice.prototype.getRandomIntInclusive = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var diceRoll = Math.floor(Math.random() * (max - min + 1)) + min;
    return (diceRoll);
  }

  // Dice.prototype.insertImage = function(diceRoll) {
  //     if(diceRoll===1) {
  //     $(".one").show();
  //   } else if (diceRoll===2) {
  //     $(".two").show();
  //   } else if (diceRoll===3) {
  //     $(".three").show();
  //   } else if (diceRoll===4) {
  //     $(".four").show();
  //   } else if (diceRoll===5) {
  //     $(".five").show();
  //   } else if (diceRoll===6) {
  //     $(".six").show();
  //   }
  //   return diceRoll;
  // }

  exports.playerModule = Player;
  exports.diceModule = Dice;
  // exports.gameplay = Pigdice;
