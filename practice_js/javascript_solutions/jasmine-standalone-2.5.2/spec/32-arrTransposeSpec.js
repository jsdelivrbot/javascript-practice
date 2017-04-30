describe("test the functionality of arrTranspose", function(){
    
    it( 'with square matrix', function(){
        expect(arrTranspose([[1,2,3],[4,5,6],[7,8,9]])).toEqual([[1,4,7],[2,5,8],[3,6,9]]);
    });
    
    it( 'with non-square matrix', function(){
        expect(arrTranspose([[1,2,3],[4,5,6]])).toEqual([[1,4],[2,5],[3,6]]);
    });
   
});