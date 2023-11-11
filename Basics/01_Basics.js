function one() {
  const username = "Devashish";

  function two() {
    const website = "Twitters";
    console.log(username);
  }
  //console.log(website); //out of scope two
  // two()
}
//one()

if (true) {
  const username = "Devashish";
  if (username === "Devashish") {
    const website = " Youtube";
    console.log(username + weebsite);
  }
  //console.log(website);
}
//console.log(username);

//+++++++++++++++++++++++ Special Case ++++++++++++++++++

console.log(addone(45));
function addone(num) {
  return num + 1;
}

//we cannot access the function before in this case
addTwo();
const addTwo = function (num) {
  return num + 2;
};
