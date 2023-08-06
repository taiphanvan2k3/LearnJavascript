let _student = {
    name: 'Phan Văn Tài',
    age: 18,
    address: {
        city: 'Quảng Nam',
        district: 'Thị xã Điện Bàn',
        ward: 'Phường Vĩnh Điện',
    }
}

console.log(_student['name'])

console.log(_student['address']['ward'])

_student['gender'] = true;

_student.age = 20;

console.log(_student)

console.log(_student.gender)

console.log(_student['gender'])
