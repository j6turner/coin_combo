describe('coinCombo', function () {

  it('returns the correct amount of quarters in a dollar', function() {
    expect(coinCombo(100)).to.equal("4 quarters");
  });

  it('returns the correct amount of dimes in 20 cents', function() {
    expect(coinCombo(20)).to.equal("2 dimes");
  });

});
