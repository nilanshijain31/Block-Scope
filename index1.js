// Block Scope
// Can't access let and const outside the block scope
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
    }
    console.log(a);
    console.log(b);             // can not access let outside the block scope
    console.log(c);            // can not access const outside the block scope