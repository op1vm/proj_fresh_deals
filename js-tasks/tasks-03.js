// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
const circleCircumference = (circle) => 2 * Math.PI * circle.radius;

// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  const result = [];
  for (const key in obj) {
    if (key.length === 5) {
      result.push(key);
    }    
    if (obj[key].length === 5) {
      result.push(obj[key]);
    }
  }
  return result;
}

// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n) {
  const funcs = [];
  for (let i = 0; i < n; i++) {
    funcs.push(() => i);
  }
  return funcs;
}

// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

