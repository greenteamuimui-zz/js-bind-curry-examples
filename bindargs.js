class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

Function.prototype.myBind = function(instance, ...args) {
  // if (arguments.length < 2){
  //   return (...extra) => this.apply(instance, extra);
  // } else if (arguments.length > 2) {
  //   return () => this.apply(instance, args);
  // } else {
    return (...extra) => this.apply(instance, args.concat(extra));
  // }
};

console.log(markov.says.myBind(breakfast, "meow", "Kush")());
console.log(markov.says.myBind(breakfast)("meow", "a tree"));
console.log(markov.says.myBind(breakfast, "meow")("Markov"));
const notMarkovSays = markov.says.myBind(breakfast);
console.log(notMarkovSays("meow", "me"));
