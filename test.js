/**
 *  working objects to test with,
 *  each with a copy and duplicate.
 *
 *  tested: json objs, arrays, and strings.
 *
 *  expected return: 2 of each json and array, with the dupes removed
 *  only one string will be returned: strings are primitives and not objects,
 *  therefore their reference in memory is not considered as a value
 *  in comparison.
 *
 *  this is a simple js file that will run in node
 */

const jsonOrig = {
  var1: 1,
  var2: 'two',
  var3: {
    var4: 'really 3 and a half',
  },
};
const jsonCopy = {
  var1: 1,
  var2: 'two',
  var3: {
    var4: 'really 3 and a half',
  },
};
const jsonDupe = jsonOrig;
//
const arrOrig = [1, 2, 3];
const arrCopy = [1, 2, 3];
const arrDupe = arrOrig;
//
const strngOrig = 'willy';
const strngCopy = 'willy';
const strngDupe = strngOrig;
//
const objs = [jsonOrig,
  jsonCopy,
  jsonDupe,
  arrOrig,
  arrCopy,
  arrDupe,
  strngOrig,
  strngCopy,
  strngDupe];

function uniqueItUp(arr) {
  // iterate through the array and remove duplicates
  // return the abstract array value generated by that
  return arr.reduce((uniqArr, item) => {
    if (!uniqArr.includes(item)) {
      uniqArr.push(item);
    }
    return uniqArr;
  }, []);
}

// print the value
console.log(uniqueItUp(objs));
