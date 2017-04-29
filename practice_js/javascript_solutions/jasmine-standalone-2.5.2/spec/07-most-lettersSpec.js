describe("test the functionality of findAz", function(){
    
    it( "with a banana", function(){
       expect(findAz("banana")).toEqual(false); 
    });
    
    it( "with abcz", function(){
       expect(findAz("abcz")).toEqual(true); 
    });
    
    it("with no vowels", function(){
       expect(findAz("gym")).toEqual(false); 
    });
    
    it("with racecaz", function(){
       expect(findAz("racecaz")).toEqual(true); 
    });
    
    it("with an empty string", function(){
       expect(findAz("")).toEqual(false); 
    });
    
})