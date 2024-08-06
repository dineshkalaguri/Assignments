//creating promises //

function asyncTask(name, delay, shouldReject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject(`Task ${name} failed`);
            } else {
                resolve(`Task ${name} completed`);
            }
        }, delay);
    });
}


const task1 = asyncTask('Task 1', 1000, false);
const task2 = asyncTask('Task 2', 2000, false);
const task3 = asyncTask('Task 3', 3000, true);

// promise all //

Promise.all([task1, task2, task3])
    .then(results => {
        console.log('All tasks completed:', results);
    })
    .catch(error => {
        console.error('One or more tasks failed:', error);
    });

// promise allsettled //

Promise.allSettled([task1, task2, task3])
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Task ${index + 1} completed:`, result.value);
            } else {
                console.error(`Task ${index + 1} failed:`, result.reason);
            }
        });
    });