class Foo {
    constructor() {
        this.bar = [1, 2, 3];
    }

    test() {
        console.debug(...this.bar);
    }
}

let foo = new Foo();
foo.test();