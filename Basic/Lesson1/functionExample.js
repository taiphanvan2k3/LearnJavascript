function showDialog() {
    // alert('Xin chào các bạn')
    console.log('Xin chào các bạn');
}

function writeLog(message) {
    console.log('Typeof:', typeof message, ',value:', message);
    console.log(typeof message);
}

writeLog('Xin chào 123')
writeLog('Xin chào Tài')
writeLog(['Javascript', 'C#'])

// Khi truyền đối số vào khác số lượng tham số của hàm:
function showValue(a, b, c) {
    // Nếu truyền ít tham số thì tham số bị thiếu 
    console.log('Value của ba số là:', a, b, c);
}

showValue(2, 3)

// Sử dụng tham số arguments
function writeLog2() {
    // console.log(arguments);
    var str = '';
    for (var param of arguments) {
        str += `${param} - `
    }
    console.log(str);
}
writeLog2('Xin chào', 2, 3, 4)

// var isConfirm = confirm('Alo?');
// console.log(isConfirm);

// Hàm có return
function add(a, b) {
    return a + b;
}

// In ra 5
console.log(add(2, 3));

// In ra abcde
console.log(add('a', 'bcde'))

// Hai function cùng tên
function showMessage(a) {
    console.log('show 1')
}

function showMessage() {
    console.log('show 2')
    console.log(test)
    var test = 2;
}

showMessage(3, 4)

var showMessage2 = function () {
    console.log('Expression function');
}

showMessage2()