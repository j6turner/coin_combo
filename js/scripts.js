var coinCombo = function(change) {
  var results = "";

  if ( change >= 25 ) {
    var quarter = change / 25;
    change = change % 25;
    results = quarter.toString().concat(" quarters");
  }
  if (change >= 10) {
    var dime = change / 10;
    change = change % 10;
    results = results + (dime.toString() + " dimes");
  }

  return results;
}
