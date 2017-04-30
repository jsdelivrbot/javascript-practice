describe("test the functionality of mergeSort", function(){
    
    it( 'with two matches', function(){
        expect(mergeSort([7,6,5,4,3])).toEqual([3,4,5,6,7]);
    });
    
    it( 'with no matches', function(){
        expect(mergeSort([1,5,7,3,2,4,6])).toEqual([1,2,3,4,5,6,7]);
    });
    it( 'with two unique matches', function(){
        expect(mergeSort([16,8,4,3,2,3,1])).toEqual([1,2,3,3,4,8,16]);
    });
  
   
});