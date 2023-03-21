// Promise.all()

// const promiseArr = [];
// function fillPromises(n) {
//   for (let i = 0; i < n; i++) {
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject();
//       }, Math.floor(Math.random() * 3000))
//     });
//     promiseArr.push(promise);
//   }
// }

// fillPromises(3);
// console.log(promiseArr, "hellooo");

// Promise.all(promiseArr)
//   .then(() => console.log("we are done!!"))
//   .catch(() => console.log("error"));

// Promise.race();

// const promiseArr = [];
// function fillPromises(n) {
// const promise = new Promise((resolve, reject) => {
//     for (let i = 0; i < n; i++) {
//         const timeOfExecution = Math.floor(Math.random() * 3000);
//         console.log(timeOfExecution);
//         setTimeout(() => {
//             reject();
//         }, timeOfExecution)
//     });

// }


function fillPromises (n) {
    const promises = [];

    for(let i = 0; i < n; i++) {
        const promise = new Promise((resolve, reject) => {
            const timeOfExecution =i*1000;
            console.log(timeOfExecution);
            setTimeout(() => {
                resolve(timeOfExecution);
            }, timeOfExecution)
        });

        promises.push(promise);
    }

    return promises;
}

Promise.race(fillPromises(4))
.then((timeOfExecution) => console.log(`Time:`, timeOfExecution))