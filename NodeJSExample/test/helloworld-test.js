import sayHello from '../utils/helloworld.mjs';

It("Should say hello", ()=>{
    const hello = sayHello();
    console.log(hello);

    expect(hello).toBe("hello");
})