
$(document).ready(function(){

//Back End
  function Player (totalScore, temporaryScore, playerName) {
    this.totalScore = totalScore;
    this.temporaryScore = temporaryScore;
    this.playerName = playerName;
  }

  function Dice (diceName) {
    this.diceName = diceName;
  }

  // Dice.prototype.addDiceRoll = function(){
  //   $(".cube").removeClass("spin");
  //   $(".cube").addClass("spin");
  // }

  var player1 = new Player(0,0);
  var player2 = new Player(0,0);


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


//   $('.cube').click.animate(function() {
//     // $('.cube').animate(function(){
//     opacity: 0.25,
//     left: "+=50",
//     // height: "toggle"
//     //
//   // });
// });

//
// $(window).click(function() {
//   $( ".cube" ).animate({
//     $('.cube').css('transform', 'rotateX(10deg)');
//     // $('.cube').css('transform', 'rotateX(-40deg)' + 'rotateY(40deg)');
//     // $('.cube').css('transform', 'rotateX(50deg)' + 'rotateY(-50deg)');
//     // $('.cube').css('transform', 'rotateX(-10deg)' + 'rotateY(10deg)');
//   }, 1500 );
// });



    $("#NameSubmit").click(function(event) {
      player1.playerName = $("#PlayerOneName").val();
      player2.playerName = $("#PlayerTwoName").val();
      $("#playerOneNameDisplay").append(player1.playerName);
      $("#playerTwoNameDisplay").append(player2.playerName);
      $(".namewell").hide();
    });

    $("#playerOneRoll").click(function(event) {
      $(".cube").removeClass("spin-vertical");

      setTimeout(function() {
      $(".cube").addClass("spin-vertical");
    }, 0);

      document.getElementById("playerTwoHold").disabled = false;
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
        $(".tempScoreDisplay").text(player1.addToTemp(diceRoll));
        return this.temporaryScore;
      }
    });

    $("#playerTwoRoll").click(function(event) {
      var diceTwo = new Dice(diceTwo);
      diceTwo.addDiceRoll();// $(".cube").addClass("spin");
      document.getElementById("playerOneHold").disabled = false;
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
        player1.temporaryScore = 0;
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
        if (Player1.totalScore >= 100) {
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
