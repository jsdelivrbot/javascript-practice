describe("test the functionality of argsSums", function(){
    
    it( 'with 4 arguments', function(){
        expect(argsSums(1,2,3,4)).toEqual(10);
    });
    
    it( 'with 3 arguments', function(){
        expect(argsSums(1,2,3)).toEqual(6);
    });
    it( 'with 5 arguments', function(){
        expect(argsSums(1,2,3,4,5)).toEqual(15);
    });
  
   
});