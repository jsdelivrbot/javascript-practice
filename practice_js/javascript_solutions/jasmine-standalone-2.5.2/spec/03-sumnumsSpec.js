describe("test the functionality of sumNums", function(){
    
    it( "with 5", function(){
       expect(sumNums(5)).toEqual(15); 
    });
    
    it( "with 0", function(){
       expect(sumNums(0)).toEqual(0); 
    });
    
    it("with 200", function(){
       expect(sumNums(200)).toEqual(20100); 
    });
    
    it("with 1", function(){
       expect(sumNums(1)).toEqual(1); 
    });
    
})