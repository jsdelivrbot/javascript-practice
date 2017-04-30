describe("test the functionality of titleize", function(){
    
    it( 'with senorita', function(){
        expect(titleize(["Mary, Brian, Leo"],(names) => {names.forEach(name => name.toUpperCase())})).toEqual(["MX. MARY JINGLEHEIMER SCHMIDT","MX. BRIAN JINGLEHEIMER SCHMIDT","MX. LEO JINGLEHEIMER SCHMIDT"]);
    });
    
    it( 'with excitation', function(){
        expect(titleize(["Mary, Brian, Leo"],(names) => {names.forEach(name => name.toLowerCase())})).toEqual(["mx. mary jingleheimer schmidt","mx. brian jingleheimer schmidt","mx. leo jingleheimer schmidt"]);
    });
    
    
    
});