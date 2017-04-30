describe("test the functionality of argsCurriedSum", function(){
    
    
    it( 'with five args', function(){
        const sum = argsCurriedSum(5);
        expect(sum(5)(4)(3)(2)(1)).toEqual(15);
    });
    
    it( 'with three args', function(){
        const sum = argsCurriedSum(3);
        expect(sum(9)(8)(7)).toEqual(24);
    });
    it( 'with four args', function(){
        const sum = argsCurriedSum(4);
        expect(sum(9)(8)(7)(12)).toEqual(36);
    });
  
   
});