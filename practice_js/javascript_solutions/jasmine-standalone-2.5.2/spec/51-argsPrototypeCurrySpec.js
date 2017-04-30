describe("test the functionality of argsPrototypeCurry", function(){
    beforeEach(() => {
        let square_sum = function(...args){
        args.reduce((acc, el) => acc += el * el, 0);
        }
     });
    
    it( 'with two args', function(){
        let two = square_sum.curry(2);
        expect(two(9)(8)).toEqual(145);
    });
    
    it( 'with three args', function(){
        let three = square_sum.curry(3);
        expect(three(9)(8)(7)).toEqual(194);
    });
    it( 'with four args', function(){
        let four = square_sum.curry(4);
        expect(four(9)(8)(7)(6)).toEqual(230);
    });
  
   
});