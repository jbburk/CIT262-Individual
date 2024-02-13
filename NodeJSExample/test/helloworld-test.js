import assert from 'assert';

const sayHello=()=>{
    return "hello";
}

It("Hello", ()=>{
    const hello = sayHello();
    assert.equal(hello,"hello");
})