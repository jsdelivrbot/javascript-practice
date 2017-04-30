describe("test the functionality of fizzBuzz", function(){
    
    it( 'with 7', function(){
        expect(fizzBuzz(7)).toEqual([1,2,"fizz",4,"buzz","fizz",7]);
    });
    
    it( 'with 10', function(){
        expect(fizzBuzz(10)).toEqual([1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz"]);
    });
    
    it( 'with 20', function(){
        expect(fizzBuzz(20)).toEqual([1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11,"fizz",13,14,"fizzbuzz", 16,17,"fizz",19,"buzz"]);
    });
    
    
});