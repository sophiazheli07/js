const b = 10;

const fn = (a) => {
    let counter = 0 + b;
    return () => {
        console.log(a);
        return "hello";
    };

};

console.log(fn(10)())