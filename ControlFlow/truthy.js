// falsy value
// false, 0,-0,BigInt 0n, "",null, undefined,NaN

//truthy value
// "0", "false", anything added in string is truthy
// [], {}, function(){}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}
