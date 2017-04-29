describe("test the functionality of countVowels", function(){
    
    it( "with a banana", function(){
       expect(countVowels("banana")).toEqual(3); 
    });
    
    it( "with a test sentence", function(){
       expect(countVowels("This is a test sentence")).toEqual(7); 
    });
    
    it("with no vowels", function(){
       expect(countVowels("gym")).toEqual(0); 
    });
    
    it("with Shakespeare", function(){
       expect(countVowels("To be or not to be, that is the question")).toEqual(13); 
    });
    
    it ("with an empty string", function(){
        expect(countVowels("")).toEqual(0);
    });
    
})