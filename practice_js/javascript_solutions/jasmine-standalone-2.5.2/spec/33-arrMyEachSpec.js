describe("test the functionality of arrMyEach", function(){
    
    beforeEach(() => {
        const NUMS = [1, 2, 3, 4, 5];
    });
    
    it( 'with square', function(){
        expect(NUMS.myEach(num => {
            num * num;
        })).toEqual([1,4,9,16,25]);
    });
    
    it( 'with cube', function(){
        expect(NUMS.myEach(num => {
            num * num * num;
        })).toEqual([1,8,27,64,125]);
    });

  
   
});