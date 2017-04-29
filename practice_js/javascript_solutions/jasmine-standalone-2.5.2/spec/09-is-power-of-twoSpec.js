describe("test the functionality of powerOfTwo", function(){
    
    it("returns true for a valid power of two", function(){
        expect(powerOfTwo(8)).toEqual(true);
    });
    
    it("returns true for a valid power of two", function(){
        expect(powerOfTwo(32)).toEqual(true);
    });
    
    it("returns true for a valid power of two", function(){
        expect(powerOfTwo(33554432)).toEqual(true);
    });
    
    it("returns true for a valid power of two", function(){
        expect(powerOfTwo(1)).toEqual(true);
    });
    
    it("returns false for an invalid power of two", function(){
        expect(powerOfTwo(367)).toEqual(false);
    });
    
    it("returns false for an invalid power of two", function(){
        expect(powerOfTwo(5)).toEqual(false);
    });
    
})