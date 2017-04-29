describe("test scramble function", function(){
    it("with abcd",function(){
        expect(scramble("abcd", [3, 1, 2, 0])).toEqual("dbca");
    });
    
    it("with markov",function(){
        expect(scramble("markov", [5, 3, 1, 4, 2, 0])).toEqual("vkaorm");
    });
    
    it("with another abcd",function(){
        expect(scramble("abcd", [1, 2, 0, 3])).toEqual("bcad");
    });
    
    it("with yummy",function(){
        expect(scramble("yummy", [3, 1, 2, 0, 4])).toEqual("mumyy");
    });
})