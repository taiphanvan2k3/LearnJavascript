// Parse
const json = '20';
const number = JSON.parse(json);
console.log(number);

const json2 = '"Phan Văn Tài"'
console.log(JSON.parse(json2));

const json3 = '{"name":"Phan Văn Tài", "age": 20}';
console.log(JSON.parse(json3));

const course = {
    id: '01',
    name: 'Javascript căn bản',
    address: {
        location: 'Quảng Nam'
    }
}

console.log(JSON.stringify(course));