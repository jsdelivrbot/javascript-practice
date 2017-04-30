describe("test the functionality of arrTwoSum", function(){
    
    it( 'with two matches', function(){
        expect(arrTwoSum([1,2,2,2,-1,4,4,4,2,1,2,3])).toEqual([0,4][4,9]);
    });
    
    it( 'with no matches', function(){
        expect(arrTwoSum([1,2,22,2,3,4,4,24,2,1,2,3])).toEqual([]);
    });
    it( 'with two unique matches', function(){
        expect(arrTwoSum([-1, 0, 2, -2, 1])).toEqual([[0,4],[2,3]]);
    });
  
   
});