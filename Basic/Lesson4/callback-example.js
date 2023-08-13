var courses = [
    'C#',
    'Java',
    'Javascript'
]

Array.prototype.map2 = function (callback) {
    var result = [];
    const arrayLength = this.length;
    for (var idx = 0; idx < arrayLength; idx++) {
        result.push(callback(this[idx]))
    }
    return result;
}

var temp = courses.map2(function (course) {
    return `<h2>${course}</h2>`;
});

console.log(temp.join(''))

Array.prototype.myMap = function (cb) {
    var output = [];
    for (var i = 0; i < this.length; i++) {
        output.push(cb(this[i], i));
    }
    return output;
}

var numbers = [1, 2, 3, 4];
console.log(numbers.myMap(function (number) {
    return number * 2;
}))

console.log(numbers.myMap(function (number, index) {
    return number * index;
}))

console.log(numbers.find(function (number) {
    return number === 3;
}))


// foreach
Array.prototype.myForeach = function (callback) {
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            console.log(key)
            callback(this[key], key, this);
        }
    }
}

courses.myForeach(function (element) {
    console.log(element)
})

courses.myForeach(function (element, index) {
    console.log(`Index: ${index}, value: ${element}`)
})

// every
Array.prototype.myEvery = function (callback) {
    let check = true;
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            check &= callback(this[key], key);
            if (!check) {
                return false;
            }
        }
    }
    return true;
}

console.log(numbers) // 1,2,3,4
console.log(numbers.myEvery(function (element) {
    return element > 0;
}))

console.log(numbers.myEvery(function (element) {
    return element % 2 === 0;
}))

// find(): tìm phần tử thỏa mãn đầu tiên thôi
let sports = [
    {
        name: 'football',
        like: 10,
    },
    {
        name: 'badminton',
        like: 3
    },
    {
        name: 'volleyball',
        like: 8
    }
]

Array.prototype.myFind = function (callback) {
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            if (callback(this[key], key)) {
                return this[key];
            }
        }
    }
    return undefined;
}

// filter()
Array.prototype.myFilter = function (callback) {
    var output = [];
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            if (callback(this[key], key)) {
                output.push(this[key])
            }
        }
    }
    return output
}

console.log(sports.myFind(function (sport) {
    return sport.like >= 9;
}))

console.log(sports.myFilter(function (sport) {
    return sport.like >= 6;
}));
