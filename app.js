'use strict'; // Strictモードを使用する
const number = process.argv[2] || 0; // process.argv[2]は最初の引数
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);