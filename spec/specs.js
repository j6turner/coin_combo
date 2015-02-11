describe('coinCombo', function () {

  it('returns the correct amount of quarters in a dollar', function() {
    expect(coinCombo(100)).to.eql([4,0,0,0]);
  });

  it('returns the correct amount of dimes in 20 cents', function() {
    expect(coinCombo(20)).to.eql([0,2,0,0]);
  });

  it('returns the least amount of coins for 30 cents', function() {
    expect(coinCombo(30)).to.eql([1,0,1,0]);
  });
  
});
