describe("Should test numRepeats", function(){
    
    it("with osaka", function(){
        expect(numRepeats("osaka")).toEqual(1);
    });
    
    it("with banjo on my knee", function(){
         expect(numRepeats("banjo on my knee")).toEqual(2);
    });
    
    it("with martha washington", function(){
         expect(numRepeats("martha washington")).toEqual(3);
    });
    
})