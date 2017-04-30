describe("test the functionality of isPrime", function(){
    
    it( 'with 10', function(){
        expect(isPrime(10)).toEqual(false);
    });
    
    it( 'with 11', function(){
        expect(isPrime(11)).toEqual(true);
    });
    
    it( 'with a large prime number', function(){
        expect(isPrime(6311)).toEqual(false);
    });
    
    it( 'with a large not prime number', function(){
        expect(isPrime(6312)).toEqual(false);
    });
    
});