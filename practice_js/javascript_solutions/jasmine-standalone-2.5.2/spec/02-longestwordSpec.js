describe("test the functionality of longestWord", function(){
    
    it( "with bananas", function(){
       expect(longestWord("these are bananas")).toEqual("bananas"); 
    });
    
    it( "with strange sentence", function(){
       expect(longestWord("random sentence with strangely lugubrious words")).toEqual("lugubrious"); 
    });
    
    it("with empty string", function(){
       expect(longestWord("")).toEqual(""); 
    });
    
    it("with Gandhi quote", function(){
       expect(longestWord("you must be the change you wish to see in the world")).toEqual("change"); 
    });
    
})