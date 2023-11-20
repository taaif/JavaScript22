//Dates
const d = new Date(2020, 9, 17);
console.log(d.getDate());
console.log(d.getMonth());
console.log(d.getFullYear());
//nearest great number
const number = Math.ceil(9.12);
console.log(number);
// nearest smaller number
const number2 = Math.floor(9.12);
console.log(number2);
//nearest whole number
const number3 = Math.round(9.5);
console.log(number3);
//absolute value
const number4 = Math.abs(-4);
console.log(number4);
//finding smallest number
const numbers = [4, 2, -9, 9, 7];
const num = Math.min(...numbers)
console.log(num);
//finding largest number
const num2 = Math.max(...numbers)
console.log(num2);
//float 
const str = '1.45';
const floatNumber = parseFloat(str)
console.log(floatNumber + 1);
//int
const str2 = '9090';
const intNumber = parseInt(str2)
console.log(intNumber + 1);
// removing fraction
const num3 = Math.trunc(4.16);
console.log(num3);
// checking int
const n = 3
const isInt = Number.isInteger(n)
console.log(isInt);
// checking non int values
function square(nuu){
    if(isNaN(nuu))
        return 'invalid input'
   return nuu * nuu
}
console.log(square('s'));
//power
const p = Math.pow(2, 3)
console.log(p);
//root
const r = 16;
const sqrtNumber = Math.sqrt(r)
console.log(sqrtNumber);
//sign
const s = -3
console.log(Math.sign(s));
//infinity
const i = 4 / 0
console.log(i);
// selecting a random number
const randomNumber = Math.random();
console.log(randomNumber);
//reading a big number
const b = 234_567_843
console.log(b);
//decimal
let dec = 12;
//16
let six = 0Xe;
//8
let ei = 0o16
// binary
let bi = 0b1110;
// converting
let con = 12
console.log(con.toString(2));