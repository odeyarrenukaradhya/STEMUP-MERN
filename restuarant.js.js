function orderFood(hasMoney) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hasMoney) {
        resolve("Food ordered");
      } else {
        reject("Order failed: No money");
      }
    }, 1000);
  });
}

// Step 2: Cook Food (2 seconds)
function cookFood(ingredientsAvailable) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ingredientsAvailable) {
        resolve("Food cooked");
      } else {
        reject("Cooking failed: Ingredients unavailable");
      }
    }, 2000);
  });
}

// Step 3: Serve Food (1 second)
function serveFood(waiterAvailable) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (waiterAvailable) {
        resolve("Food served");
      } else {
        reject("Serving failed: No waiter available");
      }
    }, 1000);
  });
}
// --------- Helper: parse scenario from command-line ---------
const arg = (process.argv[2] || "success").toLowerCase();

let hasMoney = true;
let ingredientsAvailable = true;
let waiterAvailable = false;

switch (arg) {
  case "success":
    // all true (default)
    break;
  case "no-money":
  case "nomoney":
    hasMoney = false;
    break;
  case "no-ingredients":
  case "noingredients":
    ingredientsAvailable = false;
    break;
  case "no-waiter":
  case "nowaiter":
    waiterAvailable = false;
    break;
  case "random":
    // randomize each boolean (50/50)
    hasMoney = Math.random() < 0.5;
    ingredientsAvailable = Math.random() < 0.5;
    waiterAvailable = Math.random() < 0.5;
    break;
  case "-h":
  case "--help":
    console.log("Usage: node restaurant.js [scenario]");
    console.log(
      "Scenarios: success | no-money | no-ingredients | no-waiter | random"
    );
    process.exit(0);
  default:
    console.log(`Unknown scenario: ${arg}`);
    console.log("Use: node restaurant.js --help");
    process.exit(1);
}

// Print chosen scenario (for clarity)
console.log(`Scenario: ${arg}`);

// -------- Execution flow using promise chaining --------
orderFood(hasMoney)
  .then((msg) => {
    console.log(msg);
    return cookFood(ingredientsAvailable);
  })
  .then((msg) => {
    console.log(msg);
    return serveFood(waiterAvailable);
  })
  .then((msg) => {
    console.log(msg);
    console.log("Done!");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Restaurant closing...");
  });
