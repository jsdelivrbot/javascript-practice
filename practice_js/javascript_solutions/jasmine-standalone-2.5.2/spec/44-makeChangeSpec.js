describe("test the functionality of makeChange", function(){
    
    it( 'Your approach is non-greedy!', function(){
        expect(makeChange(24, [10,7,1])).toEqual([10,7,7]);
    });
    
    it( 'your approach finds the right answer', function(){
        expect(makeChange(20, [10,2,1])).toEqual([10,10]);
    });
    it( 'your approach finds the right answer', function(){
        expect(makeChange(52, [25,10,1])).toEqual([25, 25, 1, 1]);
    });
  
   
});