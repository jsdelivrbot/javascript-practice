describe("test the functionality of arrmyMap", function(){
    
    beforeEach(() => {
        const NUMS = [1, 2, 3, 4, 5];
    });
    
    it( 'with square', function(){
        expect(NUMS.myMap(num => {
            num * num;
        })).toEqual([1,4,9,16,25]);
    });
    
    it( 'with cube', function(){
        expect(NUMS.myMap(num => {
            num * num * num;
        })).toEqual([1,8,27,64,125]);
    });
    
    it( 'with modulo 5', function(){
        expect(NUMS.myMap(num => {
            num % 5;
        })).toEqual([1,2,3,4,0]);
    });
  
   
});