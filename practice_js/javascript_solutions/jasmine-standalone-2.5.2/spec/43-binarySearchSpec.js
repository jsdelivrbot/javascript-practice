describe("test the functionality of binarySearch", function(){
    
    it( 'with a match', function(){
        expect(binarySearch([1,2,3,4,5,6,7],5)).toEqual(4);
    });
    
     it( 'with a match below', function(){
        expect(binarySearch([1,2,3,4,5,6,7],1)).toEqual(0);
    });
    
     it( 'with a match above', function(){
        expect(binarySearch([1,2,3,4,5,6,7],7)).toEqual(6);
    });
    
    it( 'with no match above', function(){
        expect(binarySearch([1,2,3,4,5,6,7],8)).toEqual(null);
    });
    it( 'with no match below', function(){
        expect(binarySearch([1,2,3,4,5,6,7],0)).toEqual(null);
    });
    it( 'with no match in the middle', function(){
        expect(binarySearch([1,2,3,5,6,7],4)).toEqual(null);
    });
  
   
});