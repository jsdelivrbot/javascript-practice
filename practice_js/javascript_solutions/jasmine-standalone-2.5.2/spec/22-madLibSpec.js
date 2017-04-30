describe("test the functionality of madLib", function(){
    
    it( 'with guacamole', function(){
        expect(madLib("make","best","guac")).toEqual("We shall MAKE the BEST GUAC.");
    });
    
    it( 'with sheep', function(){
        expect(madLib("tend","flavorful","sheep")).toEqual("We shall TEND the FLAVORFUL SHEEP");
    });
    
    it( 'with splintery mess', function(){
        expect(madLib("tune","woody","ukelele")).toEqual("We shall TUNE the WOODY UKELELE.");
    });
    
    it( 'with ocean acidification', function(){
        expect(madLib("destroy","green","earth")).toEqual("We shall DESTROY the GREEN EARTH");
    });
    
});