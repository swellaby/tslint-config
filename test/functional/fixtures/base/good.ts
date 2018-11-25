'use strict';

class Awesomeness {
    private foo: string;

    constructor(foo: string) {
        this.foo = foo;
    }

    public printFoo() {
        console.log(`Foo value is: ${this.foo}`);
    }
}

export = Awesomeness;
