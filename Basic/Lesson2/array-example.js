var languages = [
    'C#',
    'Javascript',
    'Java',
    'C++',
    123
];
console.log(languages.length);
console.log(languages);


console.log(typeof {});
console.log(typeof []);

// Do cả object và array đều có type là object nên mới dùng isArray
console.log(Array.isArray(languages));

// Index:
console.log(languages[0])

// Các phương thức
console.log(languages.toString())

console.log(languages.join())
console.log(languages.join(', '))

// Xóa element cuối mảng
console.log(languages.pop())
console.log(languages)

console.log(languages.push('HTML'))
console.log(languages)

console.log(languages.shift())
console.log(languages)

console.log(languages.unshift('css', 'js'))
console.log(languages)

var arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 6)
console.log(arr)

// Không xóa phần tử nào của arr, xong add 2 phần tử 7,8 vào arr
arr.splice(2, 0, 7, 8);
console.log(arr)

console.log(arr.slice(1, 3))
console.log(arr)

var arr2 = arr;
arr.push('a');
console.log(arr2.slice(-1))