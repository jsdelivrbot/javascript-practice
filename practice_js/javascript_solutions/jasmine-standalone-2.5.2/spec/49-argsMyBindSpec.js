describe("test the functionality of argsMyBind", function(){
    beforeEach(() => {
        class Cat {
            constructor(name) {
            this.name = name;
            }

            says(sound, person) {
                return `${this.name} says ${sound} to ${person}!`;
            }
        }

        const markov = new Cat("Markov");
        const breakfast = new Cat("Breakfast");
     });
    
    
    it( 'bind time args are "meow" and "Kush", no call time args', function(){
        expect(markov.says.myBind(breakfast, "meow", "Kush")()).toEqual("Breakfast says meow to Kush!");
    });
    
    it( 'no bind time args (other than context), call time args are "meow" and "me"', function(){
        expect(markov.says.myBind(breakfast)("meow", "a tree")).toEqual("Breakfast says meow to a tree!");
    });
    it( 'bind time arg is "meow", call time arg is "Markov"', function(){
        expect(markov.says.myBind(breakfast, "meow")("Markov")).toEqual("Breakfast says meow to Markov!");
    });
  
    it( 'no bind time args (other than context), call time args are "meow" and "me"', function(){
        const notMarkovSays = markov.says.myBind(breakfast);
        expect(notMarkovSays("meow", "me")).toEqual("Breakfast says meow to me!");
    });
   
});