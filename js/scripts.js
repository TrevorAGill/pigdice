var globalBalance = 0;
$(document).ready(function(){



  $("form#account").submit(function(event) {
    event.preventDefault();
    var inputtedNames = $("input#names").val();
    var inputtedInitial = parseInt($("input#initial").val());


    var account = new Account(inputtedNames, inputtedInitial);

    function Account(name, initial) {
      this.names = names;
      this.initial = initial;
      return this.initial;
    }

    $(".result").text("Current Balance: $" +  account.initial);
    globalBalance = globalBalance + account.initial;
    });



  $("form#transactions").submit(function(event) {
    event.preventDefault();

    var inputtedDeposit = parseInt($("input#deposit").val());
    var inputtedWithdrawal = parseInt($("input#withdrawal").val());
    var transactions = new Transactions(inputtedDeposit, inputtedWithdrawal);
    debugger;

    function Transactions(deposit, withdrawal, initial, balance) {
      this.deposit = deposit;
      this.withdrawal = withdrawal;
      this.initial = initial;
      this.balance = balance;
    }

    function transactionType(deposit,withdrawal) {
      if(inputtedDeposit>=0) {
        globalBalance = globalBalance + inputtedDeposit;
        $("input#deposit").val("");
        $("input#withdrawal").val("");
        return globalBalance;
      } else if (inputtedWithdrawal>0) {
        globalBalance = globalBalance - inputtedWithdrawal;
        $("input#deposit").val("");
        $("input#withdrawal").val("");
        return globalBalance;
      }
    }

    $(".result").text("Current Balance: $" + transactionType(deposit,withdrawal));
  });
});
