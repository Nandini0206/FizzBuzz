describe("FizzBuzz", function(){
  var fizzbuzz = new FizzBuzz();


  describe('When a number is', function(){
    it ('divisible by 5', function (){
    expect(fizzbuzz.isDivisibleByFive(25)).toBe(true);
    });

    it ('divisible by 3', function (){
    expect(fizzbuzz.isDivisibleByThree(1)).toBe(true);
    });

    it ('divisible by 15', function() {
    expect(fizzbuzz.isDivisibleByFifteen(30)).toBe(true);
	  });
  });

  describe('When number is NOT', function() {
    it ('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(6)).toBe(false);
    });

    it ('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
    });

    it ('divisible by 15', function() {
    expect(fizzbuzz.isDivisibleByFifteen(20)).toBe(false);
	  });
  });

  describe('when playing', function() {
    it('retun "Fizz" if divisible by 3', function() {
      expect(fizzbuzz.says(6)).toEqual("Fizz")
    });

    it('return "Buzz" if divisible by 5', function() {
      expect(fizzbuzz.says(10)).toEqual("Buzz")
    });
    
    it('return "FizzBuzz" if divisible by 15', function() {
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz")
    });
  });
});
