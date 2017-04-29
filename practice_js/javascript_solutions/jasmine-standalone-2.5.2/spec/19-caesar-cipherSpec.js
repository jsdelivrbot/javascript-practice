describe("Should test caesarCipher", function(){
    
    it("with abc shifted by two", function(){
        expect(caesarCipher("abc", 2)).toEqual("cde");
    });
    
    it("with abba, the best swedish pop band, shifted by five ", function(){
         expect(caesarCipher("abba",5)).toEqual("fggf");
    });
    
    it("with xylophone shifted by 12 ", function(){
         expect(caesarCipher("xylophone"), 12).toEqual("jkxabtazq");
    });
    
    it("with market strangeness shifted by 6 ", function(){
         expect(caesarCipher("The dow jones is at an all time high"), 6).toEqual("znk juc putky oy gz gt grr zosk nomn");
    });
})