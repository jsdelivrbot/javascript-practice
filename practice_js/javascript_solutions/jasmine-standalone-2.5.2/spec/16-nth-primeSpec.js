describe("test nthPrime function", function(){
    
    it("should find the 1st prime number",function(){
        expect(nthPrime(1)).toEqual(2);
    });
    
    it("should find the 4th prime number",function(){
        expect(nthPrime(4)).toEqual(7);
    });
    
    it("should find the 20th prime number",function(){
        expect(nthPrime(20)).toEqual(71);
    });
    
    it("should find the 100th prime number",function(){
        expect(nthPrime(100)).toEqual(541);
    });
})