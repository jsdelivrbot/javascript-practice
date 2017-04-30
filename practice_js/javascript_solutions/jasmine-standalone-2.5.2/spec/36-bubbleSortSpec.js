describe("test the functionality of bubbleSort", function(){
    
    it( 'with a five element array', function(){
        expect(bubbleSort([7,6,5,4,3])).toEqual([3,4,5,6,7]);
    });
    
    it( 'with a seven element array', function(){
        expect(bubbleSort([1,5,7,3,2,4,6])).toEqual([1,2,3,4,5,6,7]);
    });
    it( 'with an array with duplicates', function(){
        expect(bubbleSort([16,8,4,3,2,3,1])).toEqual([1,2,3,3,4,8,16]);
    });
  
   
});