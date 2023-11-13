const balance = 1000;

//if (balance > 500) console.log("Test"); //implicit scope

// if (balance < 500) {
//   console.log("Less than 500");
// } else if (balance < 750) {
//   console.log("Less than 750 ");
// } else if (balance < 900) {
//   console.log("Less than 900");
// } else {
//   console.log("Less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("Allow to Purchase");
}
