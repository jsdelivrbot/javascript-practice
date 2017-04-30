describe("test the functionality of subSets", function(){
    
    it( 'with two matches', function(){
        expect((subSets([1, 2, 3]))).toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
    });
    
    it( 'with no matches', function(){
        expect((subSets([1, 2, 3, 4]))).toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3], [4], [1,4],[2,4],[3,4], [1,2,4], [1,3,4],[2,3,4], [1,2,3,4]]);
    });
   
});