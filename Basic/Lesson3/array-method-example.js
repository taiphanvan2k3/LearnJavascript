var courses = [
    {
        name: 'Javascript',
        coin: 250
    },
    {
        name: 'C#',
        coin: 200
    },
    {
        name: 'Java',
        coin: 300
    }
]

courses.forEach(function (course, index) {
    console.log(index)
    console.log(course)
})

var numbers = [0, 2, 4, 5, 6, 8];
console.log(numbers.every(function (number) {
    return number % 2 === 0;
}))

// Ví dụ về filter:
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(sports) {
    return sports.filter(function (sport) {
        return sport.like > 5;
    });
}

console.log(getMostFavoriteSport(sports));

function courseHandler(course) {
    // course.name = 'Khóa học ' + course.name;
    // course.price = 'Giá: ' + course.coin;
    // return course;
    return {
        name: `Khoá học ${course.name} `
    };
}

console.log(courses.map(courseHandler));
console.log(courses)

console.log(courses.reduce(function (accumlator, currentValue) {
    return accumlator + currentValue.coin
}, 0));