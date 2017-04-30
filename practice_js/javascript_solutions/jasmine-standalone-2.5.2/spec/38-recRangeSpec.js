describe("test the functionality of recRange", function(){
    
    it( 'with a small range', function(){
        expect(recRange(1,5)).toEqual([2,3,4]);
    });
    
    it( 'with no numbers between', function(){
        expect(recRange(4,4)).toEqual([]);
    });
    it( 'with a larger range', function(){
        expect(recRange(1,10)).toEqual([2,3,4,5,6,7,8,9]);
    });
    
    it( 'is a recursive call', function(){
        
        expect(this.to)
    //   let spyObject = {
    //       test_rec: recRange(1,5)
    //   };
       
    //   //spy on recRange
    //   spyOn(spyObject, 'test_rec')
      
    //   spyObject.test_rec();
     
      
       
    });
  
   
});