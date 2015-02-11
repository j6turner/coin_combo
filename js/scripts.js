var coinCombo = function(change) {
  var results = "";
  var quarter = 0,
      dime = 0,
      nickel = 0;

  if ( change >= 25 ) {
    quarter = change / 25;
    change = change % 25;

  }
  if (change >= 10) {
    dime = change / 10;
    change = change % 10;

  }
  if (change >= 5) {
    nickel = change / 5;
    change = change % 5;
  }

  results = [quarter, dime, nickel, 0]
  return results;
}
