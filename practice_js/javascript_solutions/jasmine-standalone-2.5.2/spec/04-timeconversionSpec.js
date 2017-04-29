describe("test the functionality of convertTime", function(){
    
    it( "with 160", function(){
       expect(convertTime(160)).toEqual("2:40"); 
    });
    
    it( "with 15", function(){
       expect(convertTime(15)).toEqual("0:15"); 
    });
    
    it("with 200", function(){
       expect(convertTime(200)).toEqual("3:20"); 
    });
    
    it("with 1", function(){
       expect(convertTime(1)).toEqual("0:01"); 
    });
    
    it("with 0", function(){
       expect(convertTime(0)).toEqual("0:00"); 
    });
    
})