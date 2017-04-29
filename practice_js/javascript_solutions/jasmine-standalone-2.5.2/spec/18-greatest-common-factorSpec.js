describe("Should test greatest-common-factor", function(){
    
    it("with 3 and 9", function(){
        expect(greatestCommonFactor(3, 9)).toEqual(3);
    });
    
    it("with 12 and 18", function(){
         expect(greatestCommonFactor(18, 12)).toEqual(6);
    });
    
    it("with 24 and 45", function(){
         expect(greatestCommonFactor(45,24)).toEqual(1);
    });
    
})