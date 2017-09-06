
var Pigdice = require('./../js/pigdice.js').pigdiceModule;

$(document).ready(function(){

    $("#NameSubmit").click(function(event) {
      player1.playerName = $("#PlayerOneName").val();
      player2.playerName = $("#PlayerTwoName").val();
      $("#playerOneNameDisplay").append(player1.playerName);
      $("#playerTwoNameDisplay").append(player2.playerName);
      $(".namewell").slideUp("slow");
      $(".gameBoard").show();
      $(".gameBoard").fadeIn("slow");
      // $(".gameBoard").slideDown("slow");
      $(".cube").show();
    });

    $("#playerOneRoll").click(function(event) {
      $(".six").hide();
      $(".five").hide();
      $(".four").hide();
      $(".three").hide();
      $(".two").hide();
      $(".one").hide();
      $(".cube").removeClass("spin-vertical");
      setTimeout(function() {
      $(".cube").addClass("spin-vertical");
      }, 0);
      document.getElementById("playerTwoHold").disabled = false;
      $(".center").removeClass("middle");
      var diceRoll = (getRandomIntInclusive(1,6));
      $(".diceNumber").text(diceRoll);
      assessContinueTurn(diceRoll);
    });

    $("#playerTwoRoll").click(function(event) {
      $(".six").hide();
      $(".five").hide();
      $(".four").hide();
      $(".three").hide();
      $(".two").hide();
      $(".one").hide();
      $(".cube").removeClass("spin-vertical");

      setTimeout(function() {
      $(".cube").addClass("spin-vertical");
    }, 0);
      document.getElementById("playerOneHold").disabled = false;
      $(".center").removeClass("middle");
      var diceRoll = (getRandomIntInclusive(1,6));
      $(".diceNumber").text(diceRoll);
      if(diceRoll === 1) {
        document.getElementById("playerTwoHold").disabled = true;
        document.getElementById("playerTwoRoll").disabled = true;
        document.getElementById("playerOneRoll").disabled = false;
        this.temporaryScore = 0;
        player1.temporaryScore = 0;
        $(".tempScoreDisplay").text(0);
        $(".center").addClass("middle");
      } else if (diceRoll > 1) {
      $(".tempScoreDisplay").text(player2.addToTemp(diceRoll));
      }
    });

    $("#playerOneHold").click(function(event) {
      // $(".cube").removeClass("spin");
      $(".playerOneTotal").text(player1.addToTotal(this.totalScore));
      document.getElementById("playerOneRoll").disabled = true;
      document.getElementById("playerTwoRoll").disabled = false;
      $(".totalScoreDisplayP1").hide();
      $(".tempScoreDisplay").text("");
      $(".diceNumber").text("");
      player2.temporaryScore = 0;
        if (player1.totalScore >= 100) {
          $(".win").show();
        }
    });

    $("#playerTwoHold").click(function(event) {
      $(".cube").removeClass("spin");
      $(".playerTwoTotal").text(player2.addToTotal(this.totalScore));
      document.getElementById("playerTwoRoll").disabled = true;
      document.getElementById("playerOneRoll").disabled = false;
      $(".totalScoreDisplayP2").hide();
      $(".tempScoreDisplay").text("");
      $(".diceNumber").text("");
      player1.temporaryScore = 0;
        if (player2.totalScore >= 100) {
          $(".win").show();
      }
    });
  // } else if(Player1.totalScore >= 100 || Player2.totalScore >= 100) {
  //   alert("you win");
  // }
});
