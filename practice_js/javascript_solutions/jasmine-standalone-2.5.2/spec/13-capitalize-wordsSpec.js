describe("testing the capitalizeWords function", function(){
    it("with a sentence",function(){
        expect(capitalizeWords("this is a sentence")).toEqual("This Is A Sentence");
    });
    
    it("with a name",function(){
        expect(capitalizeWords("mike bloomfield")).toEqual("Mike Bloomfield");
    });
    
    it("a silly quip",function(){
        expect(capitalizeWords("If all is not lost, where is it?")).toEqual("If All Is Not Lost, Where Is It?");
    });
    
})