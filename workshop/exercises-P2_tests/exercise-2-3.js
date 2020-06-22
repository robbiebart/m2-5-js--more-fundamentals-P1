// Exercise 2-3
// ------------

// This function expects an array of 2 numbers as input (e.g. [1, 2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
//   - `typeof 3` returns 'number')

function sumDigits(input) {
  console.log(typeof input[0]);
  console.log(typeof input[1]);
  if (typeof input[0] !== "number" || typeof input[1] !== "number") {
    return undefined;
  } else {
    return input[0] + input[1];
  }
}

// look up isNan

// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// return (input.reduce(reducer));
//   } else {
//     return input.reduce(add);
//     function add(total, num) {
//       return total + num;
//   }
//   }
// }

// function sumDigits(input) {
//   if (typeof input == Number) {
//     return input+input;
//   } else {
//     return undefined;
//   }
// }

// Add 5 more test cases here! 7 total
expect(sumDigits([2, 5]), 7);
console.log(sumDigits([2, 5]), 7);
expect(sumDigits([-1, 0]), -1);
expect(sumDigits(["-asdf", "asdf"]), undefined);
expect(sumDigits(["asdf", "asdf"]), undefined);
expect(sumDigits([1, 0]), 1);
expect(sumDigits([-1, 1234]), 1233);
expect(sumDigits([2 * 2, 1]), 5);

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
