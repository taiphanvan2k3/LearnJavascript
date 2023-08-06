for (var i = 1; i <= 5; i++) {
    console.log(i)
}

var student = {
    name: 'Phan Văn Tài',
    age: 20,
    address: 'Quảng Nam'
}

for (const key in student) {
    console.log(student[key])
}

var languages = [
    'Java',
    'C#',
    'C++',
    'Javascript'
]

for (var key in languages) {
    // console.log(typeof key)
    console.log(languages[key])
}

console.log(languages['3'])

var str = 'hello';
for (var key in str) {
    console.log(str[key])
}

function run(object) {
    for (var key in object) {
        console.log(`Thuộc tính ${key} có giá trị ${object[key]}`)
    }
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));

for (const language of languages) {
    console.log(language)
}

var i = 1;
for (const value of Object.values(languages)) {
    languages.push(`Cpp ${i++}`)
    console.log(value)
}

console.log(Object.values(languages))

var myArray = [
    [1, 2, 3],
    [4, 5],
    [7, 8, 9, 10]
]

for (var subArray of myArray) {
    for (var value of subArray) {
        console.log(value)
    }
}

// Ví dụ về callback
function loop(start, end, callback) {
    if (start <= end) {
        callback(start);
        loop(start + 1, end, callback);
    }
}

loop(0, languages.length - 1, function (index) {
    console.log(languages[index])
})