describe("Should test longestPalindrome", function(){
    
    it("with ", function(){
        expect(longestPalindrome("abcbd")).toEqual("bcb")
    });
    
    it("with ", function(){
         expect(longestPalindrome("abba")).toEqual("abba")
    });
    
    it("with ", function(){
         expect(longestPalindrome("abcbdeffe")).toEqual("effe")
    });
    
    it("with ", function(){
         expect(longestPalindrome("qwertyytrewq")).toEqual("qwertyytrewq")
    });
})