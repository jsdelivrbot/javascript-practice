describe("test the functionality of iterFib", function(){
    
    it( 'with 5', function(){
        expect(iterFib(5)).toEqual(3);
    });
    
    it( 'with 10', function(){
        expect(iterFib(10)).toEqual(34);
    });
    it( 'with 20', function(){
        expect(iterFib(20)).toEqual(4181);
    });
  
   
});