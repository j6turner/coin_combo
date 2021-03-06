var coinCombo = function(change) {
  var results = "";
  var quarter = 0,
      dime = 0,
      nickel = 0,
      penny = 0;

  if ( change >= 25 ) {
    quarter = Math.floor(change / 25);
    change = change % 25;
  }

  if (change >= 10) {
    dime = Math.floor(change / 10);
    change = change % 10;
  }

  if (change >= 5) {
    nickel = Math.floor(change / 5);
    change = change % 5;
  }

  if (change >= 1) {
    penny = change;
  }

  results = [quarter, dime, nickel, penny]
  return results;
};

$(document).ready(function() {
  $("#result").hide();
  $("form#coin-combo").submit(function(event) {
    var change = parseInt($("input#change").val());
    var result = coinCombo(change);
    var quarter = result[0],
        dime = result[1],
        nickel = result[2],
        penny = result[3];

    $(".quarter").text(quarter);
    $(".dime").text(dime);
    $(".nickel").text(nickel);
    $(".penny").text(penny);

    $("#result").show();
    event.preventDefault();
  });
});
