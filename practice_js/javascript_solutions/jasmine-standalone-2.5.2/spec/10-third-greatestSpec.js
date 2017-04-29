describe("test the functionality of thirdGreatest", function(){
    it("with reversed order numbers",function(){
        expect(thirdGreatest([5,4,3,2,1])).toEqual(3);
    });
    
    it("with in order numbers",function(){
        expect(thirdGreatest([1,2,3,4,5,6,7])).toEqual(5);
    });
    
    it("with random numbers",function(){
        expect(thirdGreatest([55,87,33,202])).toEqual(55);
    });
    
    it("with negative numbers",function(){
        expect(thirdGreatest([-1, -2, -3, -4, -5])).toEqual(-3);
    });
})