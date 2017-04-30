describe("test the functionality of arrUniq", function(){
    
    it( 'with [1,2,2,2,3,4,4,4,2,1,2,3]', function(){
        expect(arrUniq([1,2,2,2,3,4,4,4,2,1,2,3])).toEqual([1,2,3,4]);
    });
    
    it( 'with another similar array', function(){
        expect(arrUniq([1,2,22,2,3,4,4,24,2,1,2,3])).toEqual([1,2,3,4,22,24]);
    });

  
    
});