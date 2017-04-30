describe("test the functionality of dinerBreakfast", function(){
    
    beforeEach(() => {
    this.subject = () => {
      return new dinerBreakfast();
        };
    });
    
    it( 'with no input', function(){
        expect(this.subject()).toEqual("I'd like cheesy scrambled eggs please");
    });
    
    it( 'with cookies', function(){
        expect(this.subject()("chocolate chip cookies")).toEqual("I'd like cheesy scrambled eggs please and chocolate chip cookies");
    });
    
    
});