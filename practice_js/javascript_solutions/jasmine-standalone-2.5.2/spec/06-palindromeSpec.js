describe("test the functionality of palindrome", function(){
    
    it( "with a banana", function(){
       expect(palindrome("banana")).toEqual(false); 
    });
    
    it( "with hannah", function(){
       expect(palindrome("hannah")).toEqual(true); 
    });
    
    it("with no vowels", function(){
       expect(palindrome("gym")).toEqual(false); 
    });
    
    it("with racecar", function(){
       expect(palindrome("racecar")).toEqual(true); 
    });
    
})