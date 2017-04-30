describe("test the functionality of sumOfNPrimes", function(){
    
    it( 'with 3', function(){
        expect(sumOfNPrimes(3)).toEqual(10);
    });
    
    it( 'with 5', function(){
        expect(sumOfNPrimes(5)).toEqual(28);
    });
    
    it( 'with 7 mess', function(){
        expect(sumOfNPrimes(7)).toEqual(58);
    });
    
    it( 'with 10', function(){
        expect(sumOfNPrimes(10)).toEqual(129);
    });
    
});