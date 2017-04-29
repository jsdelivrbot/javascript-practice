describe("test the functionality of factorial", function(){
    
    it( "with 5", function(){
       expect(factorial(5)).toEqual(120); 
    });
    
    it( "with 10", function(){
       expect(factorial(10)).toEqual(3628800); 
    });
    
    it("with 0", function(){
       expect(factorial(0)).toEqual(1); 
    });
    
    it("with 1", function(){
       expect(factorial(1)).toEqual(1); 
    });
    
    it("with 12", function(){
       expect(factorial(12)).toEqual(479001600); 
    });
})