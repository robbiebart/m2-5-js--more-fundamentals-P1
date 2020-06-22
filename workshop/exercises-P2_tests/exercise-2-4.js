// Exercise 2-4
// ------------

// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

let name = 'Rob' //['R','o','b']
// console.log(name[0])
// console.log(name.charAt(0))

console.log(typeof 5)
console.log(typeof 'hello')
console.log(typeof {name:'ss'})

function getLetterAtIndex(str, index) {
  if (typeof str !== 'string' || str === "") {
    return undefined;
  } else {
    return `${str.charAt(index)}`;
  }
}

// Add 6 more test cases
expect(getLetterAtIndex('hello', 4), 'o');
// console.log(getLetterAtIndex('hello', 4));
expect(getLetterAtIndex('goodbye', 0), 'g');
expect(getLetterAtIndex('2asdf', 0), '2');
expect(getLetterAtIndex('Dog', 0), 'D');
expect(getLetterAtIndex('patrick', 2), 't');
expect(getLetterAtIndex(1, 0), undefined);
expect(getLetterAtIndex('cat', 0), 'c');
expect(getLetterAtIndex(undefined, 0), undefined);
/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
