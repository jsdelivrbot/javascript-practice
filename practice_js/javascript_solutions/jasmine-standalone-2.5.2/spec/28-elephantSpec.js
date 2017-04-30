describe("test the functionality of elephant", function(){
    
    beforeEach(() => {
    this.subject = () => {
      return new Elephant("Alice", "12 feet","Amazing recall");
        };
    });
    
    it( 'with name property', function(){
        expect(this.subject().name).toEqual("Alice");
    });
    
    it( 'with height property', function(){
        expect(this.subject().name).toEqual("12 feet");
    });
    
     it( 'with skills property', function(){
        expect(this.subject().name).toEqual("Amazing recall");
    });
    
     it( 'with trumpet', function(){
        expect(this.subject().trumpet()).toEqual("Alice the elephant goes 'phrRRRRRRRRRRR!!!!!!!'");
    });
    
    
});