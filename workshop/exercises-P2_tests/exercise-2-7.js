// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  if (typeof arr[0] !== "string" || typeof arr[1] !== "number") {
    return undefined;
  } else if (arr[1] > 0) {
    return arr[0].repeat(arr[1]);
  } else {
    return "";
  }
}

console.log(repeat(["test", 2]));

// We need 7 test cases.
// Don't forget to test all of the question parameters

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}

expect(repeat(["word"]));
expect(repeat([undefined]));
expect(repeat(["dog"]));
expect(repeat(["big"]));
expect(repeat([""]));
expect(repeat([""]));
expect(repeat([""]));
