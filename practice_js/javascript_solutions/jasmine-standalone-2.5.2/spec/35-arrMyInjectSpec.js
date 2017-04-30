describe("test the functionality of arrMyInject", function(){
    
     beforeEach(() => {
        const NUMS = [1, 2, 3, 4, 5];
    });
    
    it( 'with addition', function(){
        expect(NUMS.myInject((total, item) => total + item )).toEqual(15);
    });
    
    it( 'with mulitplication', function(){
        expect(NUMS.myInject((total, item) => total * item )).toEqual(120);
    });
    it( 'with subtraction', function(){
         expect(NUMS.myInject((total, item) => total - item )).toEqual(-13);
    });
  
   
});