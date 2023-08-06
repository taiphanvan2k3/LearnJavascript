// Khai báo biến
var fullName = 'Phan Văn Tài';
var age = 18;

console.log('Xin chào các bạn');

var a = 10;
var b = 2;
console.log(a);

if (a > b) {
    console.log(a > b);
}

var c = 2;
if (b == c) {
    console.log('a == c là đúng');
}

console.log(2 ** 4);

var number_string = "10";
var number_int = 10;

// So sánh === còn so sánh cả về kiểu dữ liệu chứ không đơn thuần so sánh 10 'bằng' "10" như so sánh bằng toán tử == 
if (number_string == number_int) {
    console.log("Hai số bằng nhau");
}

if (number_string === number_int) {
    console.log('Hai biến không cùng kiểu dữ liệu nên khi so sánh bằng nhau sẽ trả về false');
}

var obj = {
    width: 10
};

console.log(obj)
var abc = 2;
console.log(abc);

console.log(abc);
console.log(abc);

// var studentName = "abc";
if (a > 2) {
    var studentName = "cde123";
}
console.log(studentName);

const student = {
    name: 'Nguyễn Văn A',
    age: '20'
};

let student2 = {
    name: 'Nguyễn Văn B',
    age: '20',
    address: 'Quảng Nam'
}

student2.name = "Nguyễn Văn C";

// student2 = {
//     address: 'Đà Nẵng'
// };

console.log(student.name);
console.log(student2);
console.log(student2.address);

student2 = {
    id: '123',
    year: 2023,
    school: 'Đại học Bách khoa Đà Nẵng'
}

console.log(student2)

const temp = undefined;
if (temp) {
    console.log('underfined giống null')
} else {
    console.log('Nếu temp không underfined')
}