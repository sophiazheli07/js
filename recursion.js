// recursion


// calulation of nums
function calculation (n, step) {
    let res = n;
    for (let i = 0; i < step; i++) {
        res = res * n
    }
    return res;
}
const res = calculation(10, 3);
console.log(res)

function calculationRecursion (n, step) {
    if (step >= 3) {
        return n;
        
    }
    return calculationRecursion(n * n, step + 1);

}
const res2 = calculationRecursion(10, 0);
console.log(res2)


//data recursion

const data = {
    a: 1,
    b: 2,
    c: {a: 11, b: 22, c: {a: 111, b: 222, c: {a: 1111, b: 2222}} },
}

function datalogger (data) {
    for (let key in data) {
        if (typeof data[key] === "object") {
            return datalogger(data[key])
        }
         console.log(data[key]);
    }
}
datalogger(data)