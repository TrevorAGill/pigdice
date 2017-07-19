
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
      $(".center").removeClass("middle");
      var diceRoll = (getRandomIntInclusive(1,6));
      $(".diceNumber").text(diceRoll);
      if(diceRoll === 1) {
        document.getElementById("playerOneHold").disabled = true;
        document.getElementById("playerOneRoll").disabled = true;
        document.getElementById("playerTwoRoll").disabled = false;
        this.temporaryScore = 0
        $(".tempScoreDisplay").text(0);
        $(".center").addClass("middle");
        Player2.temporaryScore = 0;
      } else if (diceRoll > 1) {
        $(".tempScoreDisplay").text(Player1.addToTemp(diceRoll));
        return this.temporaryScore;
      }
    });

    $("#playerTwoRoll").click(function(event) {
      $(".center").removeClass("middle");
      var diceRoll = (getRandomIntInclusive(1,6));
      $(".diceNumber").text(diceRoll);
      if(diceRoll === 1) {
        document.getElementById("playerTwoHold").disabled = true;
        document.getElementById("playerTwoRoll").disabled = true;
        document.getElementById("playerOneRoll").disabled = false;
        this.temporaryScore = 0
        $(".tempScoreDisplay").text(0);
        $(".center").addClass("middle");
        Player1.temporaryScore = 0;
      } else if (diceRoll > 1) {
      $(".tempScoreDisplay").text(Player2.addToTemp(diceRoll));
      }
    });

    $("#playerOneHold").click(function(event) {
      $(".playerOneTotal").text(Player1.addToTotal(this.totalScore));
      document.getElementById("playerOneRoll").disabled = true;
      document.getElementById("playerTwoRoll").disabled = false;
      $(".totalScoreDisplayP1").hide();
      $(".tempScoreDisplay").text("");
      $(".diceNumber").text("");
      Player2.temporaryScore = 0;
        if (Player1.totalScore >= 100) {
          alert("you win!")
        }
    });

    $("#playerTwoHold").click(function(event) {
      $(".playerTwoTotal").text(Player2.addToTotal(this.totalScore));
      document.getElementById("playerTwoRoll").disabled = true;
      document.getElementById("playerOneRoll").disabled = false;
      $(".totalScoreDisplayP2").hide();
      $(".tempScoreDisplay").text("");
      $(".diceNumber").text("");
      Player1.temporaryScore = 0;
        if (Player2.totalScore >= 100) {
        alert("you win!")
      }
    });
  // } else if(Player1.totalScore >= 100 || Player2.totalScore >= 100) {
  //   alert("you win");
  // }
});
