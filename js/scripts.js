var coinCombo = function(change) {
  var results = "";
  var quarter = 0,
      dime = 0,
      nickel = 0;

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

  results = [quarter, dime, nickel, 0]
  return results;
}
