export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }
    
    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }
    
    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }

     // we can call a static method without instantiating the class e.x. console.log(Animal.return10());
     static return10() {
        return 10;
    }
}

export class Cat extends Animal {
    constructor(type, legs, tail) {
        super(type, legs);
        this.tail = tail;
    }

    // override method...
    makeNoise(sound = "meow") {
        console.log(sound);
    }
}