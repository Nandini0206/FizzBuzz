describe("FizzBuzz", function(){
var fizzbuzz = new FizzBuzz();


  describe('When a number is', function(){
    it ('divisible by 5', function (){
    expect(fizzbuzz.isDivisibleByFive(25)).toBe(true);
    });
  });

  describe('When number is NOT', function() {
	    it ('divisible by 5', function() {
	      expect(fizzbuzz.isDivisibleByFive(6)).toBe(false);
	    });
	  });

});
