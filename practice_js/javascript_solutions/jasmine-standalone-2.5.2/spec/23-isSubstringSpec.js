describe("test the functionality of isSubstring", function(){
    
    it( 'with senorita', function(){
        expect(isSubstring("time to program", "time")).toEqual(true);
    });
    
    it( 'with excitation', function(){
        expect(isSubstring("Jump for joy","joy")).toEqual(true);
    });
    
    it( 'with random mess', function(){
        expect(isSubstring("rendezvous at 7:30 for the inaugural stump stomp","butt")).toEqual(false);
    });
    
    it( 'with another random mess', function(){
        expect(isSubstring("large kumquats have driven the rise in healthcare expenses","butt")).toEqual(false);
    });
    
});