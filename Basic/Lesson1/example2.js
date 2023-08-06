var a = 2;
if (a > 0) {
    console.log('a lớn hơn 0');
}

var booleanString = 'flase';
if (booleanString) {
    console.log('a')
}

// string
var number = 1;
var str = 'Hello \'world\'';
var str2 = 'Hello "world"'
console.log(str, ', ', str2)

// undefined
var number2;
console.log(number2)

var isNull = null;
console.log(isNull)

var student = {};
student.fullName = 'Phan Văn Tài';
student.SchoolYear = 2020;
// console.log(student.fullName)
console.log(student)

var obj = {
    myFunc: function (a, b) {
        return a + b;
    },
    myFunc2: function () {
        console.log('Đây là function 2');
    }
};

console.log(obj.myFunc(1, 2))
obj.myFunc2()

// Array thuộc object types
var myArray = ['JS', 'C#', 123, 'xin chào', true];
console.log(myArray)
if (myArray[4]) {
    console.log(myArray[4])
}

for (var idx = 0; idx < myArray.length; idx++) {
    if (typeof (myArray[idx]) == 'boolean') {
        console.log(myArray[idx])
    }
}

console.log(!!0);
console.log(!!'0');
console.log(!!['Mercesdes'])

// document.getElementsByClassName('title')
// console.log(document.all.length)

var result = 'A' && false;
var result2 = (1 < 3) && '' && (2 > 5);
console.log(result)
console.log(typeof(result2))