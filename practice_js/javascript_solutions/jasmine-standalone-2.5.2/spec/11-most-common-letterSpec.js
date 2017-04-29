describe("test the functionality of mostCommonLetter", function(){
    
    it("with cattt",function(){
        expect(mostCommonLetter("cattt")).toEqual(["t",3]);
    });
    
    it("with blahbbb",function(){
        expect(mostCommonLetter("blahbbb")).toEqual(["b",4]);
    });
    
    it("with a sentence with lots of spaces",function(){
        expect(mostCommonLetter("I sometimes        use a       ton       of    spaces      for    emphasis")).toEqual(["s",7]);
    });
    
    it("with a long paragraph",function(){
        expect(mostCommonLetter("And this I believe: that the free, exploring mind of the individual human is the most valuable thing in the world. And this I would fight for: the freedom of the mind to take any direction it wishes, undirected.")).toEqual(["i",20]);
    });
    
    
})