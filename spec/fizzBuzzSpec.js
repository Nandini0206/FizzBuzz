describe("FizzBuzz", function(){
  var fizzbuzz = new FizzBuzz();


  describe('When a number is', function(){
    it ('divisible by 5', function (){
    expect(fizzbuzz.isDivisibleByFive(25)).toBe(true);
    });

    it ('divisible by 3', function (){
    expect(fizzbuzz.isDivisibleByThree(1)).toBe(true);
    });

  });

  describe('When number is NOT', function() {
    it ('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(6)).toBe(false);
    });

    it ('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
    });
  });
});
