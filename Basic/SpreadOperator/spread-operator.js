const student = {
    name: 'Nguyễn Văn A',
    age: 18
}

const copyStudent = { ...student }
copyStudent.age = 20

// -> { name : 'Nguyễn Văn A', age: 20 }
console.log(student);

// -> { name : 'Nguyễn Văn A', age: 20 }
console.log(copyStudent)

const address = {
    location: 'Quảng Nam'
}

// Merge object không trùng thuộc tính
const combine = { ...student, ...address }

// Việc thay đổi trên thuộc tính combine không hề ảnh hưởng đến giá trị thuộc tính của đối tượng student
combine.name = 'Nguyễn Văn B'
console.log(student)
// { name: 'Nguyễn Văn A', age: 18, location: 'Quảng Nam' }
console.log(combine)

const rgb = ['red', 'green', 'blue'];
const cmyk = ['red', 'magenta', 'yellow', 'black'];
const merge = [...rgb, ...cmyk];
console.log(merge)

// Merge object trùng thuộc tính
const student2 = {
    name: 'Nguyễn Văn A'
}

const address2 = {
    name: 'Quảng Nam'
}

// Sẽ bị ghi đè bởi đối tượng đằng sau
console.log({ ...student2, ...address2 })