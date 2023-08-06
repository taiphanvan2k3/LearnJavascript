const result = false && 'A';

const number = 2;
const result2 = typeof (number) !== 'undefined' && true && (number > 2 ? 'Lớn hơn 2' : 'Nhỏ hơn 2');
console.log(result2)

const res3 = undefined && 'A' || 'B'
console.log(res3)