describe("test the functionality of twoSum", function(){
    
    it( "with a valid array", function(){
       expect(twoSum([1,2,3,4,-2])).toEqual([1,4]); 
    });
    
    it( "with no matches", function(){
       expect(twoSum([1,2,3,4,5,6])).toEqual([]); 
    });
    
    it("with a valid array", function(){
       expect(twoSum([200, 228, 5609, 132, -228])).toEqual([1,4]); 
    });
    
    it("with a valid array", function(){
       expect(twoSum([500, -500])).toEqual([0,1]); 
    });
    
})