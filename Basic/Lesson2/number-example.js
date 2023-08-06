console.log(Number.parseInt('10.8'))
console.log(Number.parseFloat('10.68'))
console.log(Number.isFinite(2 / 0))

var number = 3.14156;

// Kết quả: 3.1416
console.log(number.toFixed(4))

console.log(typeof (2).toString())

console.log((2).toString())

/**
 * Hàm check xem tham số value có phải là 1 số hay không?
 * @author TaiPV
 * @since 01/08/2023
 * @param {any} value: tham số truyền vào á mà
 * @returns {boolean} true or false
 */
function isNumber(value) {
    return Number.isFinite(value);
}

console.log(isNumber(NaN));
console.log(isNumber('abc'));
console.log(isNumber('100')); 