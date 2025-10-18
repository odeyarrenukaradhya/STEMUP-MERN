// 1.Basic Callback Function
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}
greet("Renukaradhya odeyar", () => {
    console.log("Welcome to Asynchronous JavaScript assignment!");
});


// 2.Simulating Asynchronous Tasks with setTimeout
function task1(callback) {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            callback(new Error("Task 1 failed"), null);
        } else {
            console.log("Task 1 completed");
            callback(null, "Task 1 completed");
        }
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            callback(new Error("Task 2 failed"), null);
        } else {
            console.log("Task 2 completed");
            callback(null, "Task 2 completed");
        }
    }, 2000);
}

function task3(callback) {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            callback(new Error("Task 3 failed"), null);
        } else {
            console.log("Task 3 completed");
            callback(null, "Task 3 completed");
        }
    }, 1000);
}


// 3.Callback Hell Simulation
function runWithCallbacks() {
    console.log("\n--- Running with Callback Hell ---");
    task1((err) => {
        if (err) {
            console.log("❌ Task 1 failed");
            console.log("Task execution stopped due to error.");
        } else {
            task2((err) => {
                if (err) {
                    console.log("❌ Task 2 failed");
                    console.log("Task execution stopped due to error.");
                } else {
                    task3((err) => {
                        if (err) {
                            console.log("❌ Task 3 failed");
                            console.log("Task execution stopped due to error.");
                        } else {
                            console.log("All tasks completed successfully!");
                        }
                    });
                }
            });
        }
    });
}


// 4.Converting to Promises
function task1Promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject("❌ Task 1 failed");
            } else {
                console.log("Task 1 completed");
                resolve("Task 1 completed");
            }
        }, 1000);
    });
}

function task2Promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject("❌ Task 2 failed");
            } else {
                console.log("Task 2 completed");
                resolve("Task 2 completed");
            }
        }, 2000);
    });
}

function task3Promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject("❌ Task 3 failed");
            } else {
                console.log("Task 3 completed");
                resolve("Task 3 completed");
            }
        }, 1000);
    });
}


// 5.Running with Promises
function runWithPromises() {
    console.log("\n--- Running with Promises ---");
    task1Promise()
        .then(() => task2Promise())
        .then(() => task3Promise())
        .then(() => {
            console.log("All tasks completed successfully!");
        })
        .catch((error) => {
            console.log(error);
            console.log("Task execution stopped due to error.");
        });
}


// 6.Running with Async/Await
async function runWithAsyncAwait() {
    console.log("\n--- Running with Async/Await ---");
    try {
        await task1Promise();
        await task2Promise();
        await task3Promise();
        console.log("All tasks completed successfully!");
    } catch (error) {
        console.log(error);
        console.log("Task execution stopped due to error.");
    }
}
runWithCallbacks();
setTimeout(runWithPromises, 5000); //wait before running next
setTimeout(runWithAsyncAwait, 11000); //wait before running next
