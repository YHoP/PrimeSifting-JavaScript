// factorial
describe('factorial', function() {
  it("factorial", function() {
    expect(factorial(5)).to.equal(120);
  });
});

describe('listAllNumbersToArray', function() {
  it("List all numbers to array", function() {
    expect(listAllNumbersToArray(5, [])).to.eql([5, 4, 3, 2]);
  });
});

describe('isPrimeNumber', function() {
  it("If its prime number, return true", function() {
    expect(isPrimeNumber(13)).to.equal(true);
  });
});

describe('getPrimeNumber', function() {
  it("If its prime number, return true", function() {
    expect(getPrimeNumber(13)).to.eql([13, 11, 7, 5, 3, 2]);
  });
});
