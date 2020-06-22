// Given the following functions, answer the questions below.

const square = (x) => {
  return x * x;
};

const decrement = (x) => {
  return x - 1;
};

const duplicateString = (x) => {
  return x.concat(x);
};

const reverseString = (str) => {
  const splitString = str.split(''); // var splitString = "hello".split("");
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  return reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
};

// Expand each of the following and get the result of the expression.
// What will happen in each step as the function is called?
// Write out your answer comments.
// 1-1
square(decrement(square(decrement(3))));
9
/*
first step
const decrement = (3) => {
  return x - 1;
};  returns 2
second step
const square = (2) => {
  return x * x;
}; returns 4
third step
const decrement = (2) => {
  return x - 1;
};  returns 3
fourth step
const square = (3) => {
  return x * x;
}; returns 9
*/
// 1-2
decrement(decrement(square(square(3))));
79
/*
const square = (3) => {
  return x * x;
}; returns 9
const square = (9) => {
  return x * x;
}; returns 81
const decrement = (81) => {
  return x - 1;
}; returns 80
const decrement = (80) => {
  return x - 1;
}; returns 79
*/
// 1-3
duplicateString(reverseString('hello'));
'olleholleh'

/*
first reverseString runs, which does the following:
  const splitString = str.split(''); 
    returns ["h", "e", "l", "l", "o"]
  const reverseArray = splitString.reverse(); 
    returns ["o", "l", "l", "e", "h",]
  return reverseArray.join('')
    returns "olleh"
then duplicateString runs
  returns 'olleholleh' by 'olleh'.concat('olleh')
*/
// 1-4
reverseString(duplicateString(duplicateString('foo')));
'oofoofoofoof'

/*
first duplicate string is run once:
'foo'.concat('foo') returns 'foofoo';
then its output is run a second time thru duplicate string:
'foofoo.concat('foofoo')
returns 'foofoofoofoo'
then reverse string is run
  first reverseString runs, which does the following:
  const splitString = str.split(''); 
    returns ['f', 'o', 'o', 'f', 'o', 'o', 'f', 'o', 'o', 'f', 'o', 'o', ]
  const reverseArray = splitString.reverse(); 
    returns ['o', 'o', 'f', 'o', 'o', 'f', 'o', 'o', 'f', 'o', 'o', 'f', ]
  return reverseArray.join('')
    returns 'oofoofoofoof'
*/