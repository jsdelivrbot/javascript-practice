describe("test the functionality of anagrams", function(){
    
    it( 'with senorita', function(){
        expect(anagram("senorita","notaries")).toEqual(true);
    });
    
    it( 'with excitation', function(){
        expect(anagram("excitation","intoxicate")).toEqual(true);
    });
    
    it( 'with random mess', function(){
        expect(anagram("tuba","butt")).toEqual(false);
    });
    
    it( 'with another random mess', function(){
        expect(anagram("tubas","butt")).toEqual(false);
    });
    
});