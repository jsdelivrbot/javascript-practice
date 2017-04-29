describe("test the functionality of reverse", function(){
    
    it( 'with senorita', function(){
        expect(reverse("senorita")).toEqual("atirones");
    });
    
    it( 'with excitation', function(){
        expect(reverse("excitation")).toEqual("noitaticxe");
    });
    
    it( 'with random mess', function(){
        expect(reverse("tuba")).toEqual("abut");
    });
    
    it( 'with another random mess', function(){
        expect(reverse("tubas")).toEqual("sabut");
    });
    
    it( 'with empty string', function(){
        expect(reverse("")).toEqual("");
    });
    
});