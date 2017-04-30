describe("test the functionality of substrings", function(){
    
    it( 'with cat', function(){
        expect(substrings("cat")).toEqual(["c","ca","cat","a","at","t"]);
    });
    
    it( 'with pan', function(){
        expect(substrings("pan")).toEqual(["p","pa","pan","a","an","n"]);
    });
    it( 'with duck', function(){
        expect(substrings("duck")).toEqual(["d","du","duc","duck","u","uc","uck","c","ck","k"]);
    });
  
   
});