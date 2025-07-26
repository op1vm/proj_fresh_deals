// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
const stringToArray = string => string.split(' ');

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
const DNAtoRNA = dna => dna.replace(/T/g, 'U');

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = list => Math.min(...list);
const max = list => Math.max(...list);

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
const minValue = (arr, toReturn) => {
  const minValue = Math.min(...arr);
  return toReturn === "value" ? minValue : arr.indexOf(minValue);
}

// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
const doubleInteger = (i) => i * 2;

// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - 2 * sonYearsOld);

// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
const nthEven = (n) => (n - 1) * 2;

// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
const getRealFloor = (n) => n <= 0 ? n : n < 13 ? n - 1 : n - 2;

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
const past = (h, m, s) => ((h * 3600) + (m * 60) + s) * 1000;

// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;
