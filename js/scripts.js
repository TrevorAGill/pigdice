
$(document).ready(function(){

  function Player (totalScore, temporaryScore) {
    this.totalScore = totalScore;
    this.temporaryScore = temporaryScore;
  }

  var Player1 = new Player(0,0);
  var Player2 = new Player(0,0);



  Player.prototype.addToTemp = function(diceRoll) {
    return this.temporaryScore += diceRoll;
  }

  document.getElementById("playerOne").disabled = true;

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  $("#playerOne").click(function(event) {
    var diceRoll = (getRandomIntInclusive(1,6));
    $(".diceNumber").text(diceRoll);
    $(".tempScoreDisplay").text(Player1.addToTemp(diceRoll));

  });

  $("#playerTwo").click(function(event) {
    var diceRoll = (getRandomIntInclusive(1,6));
    $(".diceNumber").text(diceRoll);
    Player2.addToTemp();
  });




});
