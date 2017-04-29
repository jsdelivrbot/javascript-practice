describe("test the functionality of dasherizeNumber", function(){
    it("",function(){
        expect(dasherizeNumber(203)).toEqual("20-3");
    });
    
    it("",function(){
        expect(dasherizeNumber(303)).toEqual("3-0-3");
    });
    
    it("",function(){
        expect(dasherizeNumber(333)).toEqual("3-3-3");
    });
    
    it("",function(){
        expect(dasherizeNumber(3223)).toEqual("3-22-3");
    });
    
    it("",function(){
        expect(dasherizeNumber(987968)).toEqual("9-8-7-9-68");
    });
});

