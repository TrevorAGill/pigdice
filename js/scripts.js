
$(document).ready(function(){

//Back End
  function Player (totalScore, temporaryScore) {
    this.totalScore = totalScore;
    this.temporaryScore = temporaryScore;
  }

  var Player1 = new Player(0,0);
  var Player2 = new Player(0,0);



  Player.prototype.addToTemp = function(diceRoll) {
    return this.temporaryScore += diceRoll;
  }

  Player.prototype.addToTotal = function(diceRoll) {
    return this.totalScore += this.temporaryScore;
  }


  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

//Front End
  $("#playerOneRoll").click(function(event) {
    var diceRoll = (getRandomIntInclusive(1,6));
    $(".diceNumber").text(diceRoll);
    $(".tempScoreDisplay").text(Player1.addToTemp(diceRoll));
  });

  $("#playerTwoRoll").click(function(event) {
    var diceRoll = (getRandomIntInclusive(1,6));
    $(".diceNumber").text(diceRoll);
    $(".tempScoreDisplay").text(Player2.addToTemp(diceRoll));
  });

  $("#playerOneHold").click(function(event) {
    $(".playerOneTotal").text(Player1.addToTotal(this.totalScore));
    document.getElementById("playerOneRoll").disabled = true;
    document.getElementById("playerTwoRoll").disabled = false;
    this.temporaryScore = 0;
  });

  $("#playerTwoHold").click(function(event) {
    $(".playerOneTotal").text(Player1.addToTotal(this.totalScore));
    document.getElementById("playerTwoRoll").disabled = true;
    document.getElementById("playerOneRoll").disabled = false;
    this.temporaryScore = 0;
  });
});
