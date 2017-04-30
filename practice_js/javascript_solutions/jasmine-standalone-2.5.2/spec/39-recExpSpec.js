describe("test the functionality of recExp", function(){
    
    it( 'with 2 ^ 3', function(){
        expect(recExp(2,3)).toEqual(8);
    });
    
    it( 'with 4 ^ 3s', function(){
        expect(recExp(4,3)).toEqual(64);
    });
    it( 'with 2 ^ 8', function(){
        expect(recExp(2,8)).toEqual(256);
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