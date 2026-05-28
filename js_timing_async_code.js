// ============================================================
//  JAVASCRIPT TUTORIAL CODE
//  Topics: setTimeout | setInterval | async / await
// ============================================================


// ─────────────────────────────────────────────
//  PART 1 — setTimeout
// ─────────────────────────────────────────────



// setTimeout - do something once after a delay
//setInterval -do something repeadetaly on a timer 
//async/await 


// 1a. Basic setTimeout — run once after a delay
// setTimeout(function () {
//   console.log("1a. Runs ONCE after 2 seconds");
// }, 2000);

// 1b. setTimeout with arrow function
// setTimeout(() => {
//   console.log("1b. Arrow function — runs after 1 second");
// }, 1000);

// 1c. setTimeout with zero delay (still async!)
// console.log("1c. BEFORE zero-delay timeout");
// setTimeout(() => {
//   console.log("1c. INSIDE zero-delay timeout");
// }, 0);
// console.log("1c. AFTER zero-delay timeout");
// Output order: BEFORE → AFTER → INSIDE
// Proves setTimeout is always asynchronous

// 1d. Passing arguments to the callback
// function greet(name, role) {
//   console.log(`1d. Hello, ${name}! You are a ${role}.`);
// }
// setTimeout(greet, 1500, "Alice", "Developer");

// 1e. Cancelling a setTimeout with clearTimeout
// const timerId = setTimeout(() => {
//   console.log("1e. This will NEVER run — it was cancelled");
// }, 3000);
// clearTimeout(timerId); // Cancel before it fires
// console.log("1e. Timer cancelled successfully");

// 1f. Chained / recursive setTimeout (preferred over setInterval for precision)
// let countChained = 0;
// function runChained() {
//   countChained++;
//   console.log(`1f. Chained tick #${countChained}`);
//   if (countChained < 3) {
//     setTimeout(runChained, 1000); // schedule next only after current finishes
//   }
// }
// setTimeout(runChained, 1000);


// ─────────────────────────────────────────────
//  PART 2 — setInterval
// ─────────────────────────────────────────────

// 2a. Basic setInterval — repeat every N ms
// let count2a = 0;
// const intervalA = setInterval(() => {
//   count2a++;
//   console.log(`2a. Interval tick #${count2a}`);
//   if (count2a >= 4) {
//     clearInterval(intervalA); // ALWAYS stop when done
//     console.log("2a. Interval stopped after 4 ticks");
//   }
// }, 1000);

// 2b. Countdown timer using setInterval
// let seconds = 5;
// const countdown = setInterval(() => {
//   console.log(`2b. Countdown: ${seconds}`);
//   seconds--;
//   if (seconds < 0) {
//     clearInterval(countdown);
//     console.log("2b. Countdown finished!");
//   }
// }, 1000);

// 2c. clearInterval — stop an interval immediately
// const intervalC = setInterval(() => {
//   console.log("2c. This tick will never print");
// }, 500);
// clearInterval(intervalC);
// console.log("2c. Interval was cleared before it ever fired");

// 2d. setInterval vs chained setTimeout — key difference
// setInterval fires every N ms regardless of how long the callback takes.
// Chained setTimeout fires N ms AFTER the callback completes.
// For heavy work, use chained setTimeout to avoid overlap.


// ─────────────────────────────────────────────
//  PART 3 — async / await
// ─────────────────────────────────────────────

// Helper: a Promise that resolves after `ms` milliseconds
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Helper: a Promise that resolves with a value (simulates fetch/DB call)
// function fetchUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (id > 0) {
//         resolve({ id, name: "Alice", role: "admin" });
//       } else {
//         reject(new Error("Invalid user ID"));
//       }
//     }, 1000);
//   });
// }

// 3a. Basic async / await
async function basicAsync() {
  console.log("3a. Start");
  await wait(1000);
  console.log("3a. After 1 second wait");
  await wait(500);
  console.log("3a. After another 0.5 second wait");
}
basicAsync();

// 3b. Awaiting a value-returning Promise
// async function getUser() {
//   console.log("3b. Fetching user...");
//   const user = await fetchUser(1);
//   console.log(`3b. Got user: ${user.name} (${user.role})`);
// }
// getUser();

// 3c. Error handling with try / catch
async function getUserSafe(id) {
  try {
    const user = await fetchUser(id);
    console.log(`3c. Success: ${user.name}`);
  } catch (error) {
    console.error(`3c. Error caught: ${error.message}`);
  }
}
getUserSafe(1);   // works
getUserSafe(-1);  // triggers the reject path

// 3d. Sequential await — runs ONE after ANOTHER (total ~2 seconds)
// async function sequential() {
//   console.log("3d. Sequential start");
//   const user1 = await fetchUser(1); // waits ~1s
//   const user2 = await fetchUser(2); // waits ~1s more
//   console.log(`3d. Got: ${user1.name} and ${user2.name}`);
//   console.log("3d. Sequential total ≈ 2 seconds");
// }
// sequential();

// 3e. Parallel await with Promise.all — runs SIMULTANEOUSLY (total ~1 second)
// async function parallel() {
//   console.log("3e. Parallel start");
//   const [user1, user2] = await Promise.all([fetchUser(1), fetchUser(2)]);
//   console.log(`3e. Got: ${user1.name} and ${user2.name}`);
//   console.log("3e. Parallel total ≈ 1 second (same as single fetch!)");
// }
// parallel();

// 3f. Promise.allSettled — waits for ALL, even if some reject
// async function allSettled() {
//   const results = await Promise.allSettled([
//     fetchUser(1),   // resolves
//     fetchUser(-1),  // rejects
//     fetchUser(2),   // resolves
//   ]);

//   results.forEach((result, i) => {
//     if (result.status === "fulfilled") {
//       console.log(`3f. Result[${i}]: fulfilled —`, result.value.name);
//     } else {
//       console.log(`3f. Result[${i}]: rejected  —`, result.reason.message);
//     }
//   });
// }
// allSettled();

// 3g. async function always returns a Promise
// async function add(a, b) {
//   return a + b; // auto-wrapped in Promise.resolve(...)
// }
// add(3, 4).then((result) => console.log("3g. add(3,4) =", result));

// 3h. Combining setTimeout + async/await
// async function withDelay() {
//   console.log("3h. Step 1 — immediate");
//   await wait(1000);
//   console.log("3h. Step 2 — after 1s");
//   await wait(500);
//   console.log("3h. Step 3 — after 0.5s more");
// }
// withDelay();

// 3i. Real-world pattern: retry with delay
// async function fetchWithRetry(id, retries = 3) {
//   for (let attempt = 1; attempt <= retries; attempt++) {
//     try {
//       const user = await fetchUser(id);
//       console.log(`3i. Attempt ${attempt} succeeded:`, user.name);
//       return user;
//     } catch (err) {
//       console.warn(`3i. Attempt ${attempt} failed: ${err.message}`);
//       if (attempt < retries) await wait(500 * attempt); // back-off
//     }
//   }
//   throw new Error("3i. All retries exhausted");
// }
// fetchWithRetry(-1).catch((e) => console.error(e.message));
