var fullName = new String('Phan Văn Tài \'abc\'');

console.log("'xin chào'")

// type: string
console.log(typeof ("'xin chào'"))

// type: object
console.log(typeof fullName)

var firstName = 'Phan Văn';
var lastName = 'Tài';

// Sử dụng template string
console.log(`Tôi là ${firstName} ${lastName} `)

// length:
console.log(firstName.length)

console.log(firstName.indexOf('ăn'))

console.log(firstName.slice(5))

var helloWorld = 'Hello world world JS JS JS JS';
console.log(helloWorld.slice(-5))

console.log(helloWorld.replaceAll('world', 'WORLD'))
console.log(helloWorld.replace(/JS/g, 'Javascript'))
console.log(helloWorld.toUpperCase())

// Split
var languages = 'Javascript, C#';
console.log(languages.split(', '))
console.log(languages.split(''))

// Trả về chuỗi 
if (languages.charAt(-2) != '') {
    console.log('yes')
} else {
    console.log(languages.charAt(-2))
}

if ("undefined") {
    console.log('hêhe');
}