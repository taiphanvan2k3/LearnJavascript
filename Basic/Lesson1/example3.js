var add = function (a, b, c) {
    console.log(c);
    return a + b;
}

// Cho dù truyền nhiều tham số hơn thì tham số truyền dư sẽ không được sử dụng
let result = add(2, 3, 4, 5);
console.log(result);