const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// [3, 4, 5, 6, 7, 8, 9]
console.log(array.slice(2))

// index từ [2, 4]
console.log(array.slice(2, 5))
// Lấy 3 phần tử cuối [7, 8, 9]
console.log(array.slice(-3))

// Lấy các phần tử từ phần tử thứ 3 (đếm từ phải sang) đến phần tử thứ 2 (đếm từ phải sang)
// Kq: [7, 8]
console.log(array.slice(-3, -1))