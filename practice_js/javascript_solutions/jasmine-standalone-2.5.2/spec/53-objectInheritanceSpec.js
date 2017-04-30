describe("test the functionality of objectInheritance", function(){
    
    beforeEach(() => {
        let square_sum = function(...args){
        args.reduce((acc, el) => acc += el * el, 0);
        }
     });
    
    it( 'with two matches', function(){
        expect(objectInheritance()).toEqual();
    });
    
    it( 'with no matches', function(){
        expect(objectInheritance()).toEqual();
    });
    it( 'with two unique matches', function(){
        expect(objectInheritance()).toEqual();
    });
  
   
});