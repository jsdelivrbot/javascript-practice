describe("test the isPrime function",function(){
    
    it("with 2",function(){
        expect(isPrime(2)).toEqual(true);
    });
    
    it("with 3",function(){
        expect(isPrime(3)).toEqual(true);
    });
    
    it("with 4",function(){
        expect(isPrime(4)).toEqual(false);
    });
    
    it("with 9",function(){
        expect(isPrime(9)).toEqual(false);
    });
    
    it("with 117",function(){
        expect(isPrime(113)).toEqual(true);
    });
    
    it("with 199",function(){
        expect(isPrime(199)).toEqual(true);
    });
})