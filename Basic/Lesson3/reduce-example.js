var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function (outputArray, currentElement) {
    return outputArray.concat(currentElement)
}, []);

console.log(flatArray)

// Example 2:
var topics = [
    {
        topic: 'Front-end',
        courses: [
            {
                id: 1,
                title: 'HTML,CSS'
            },
            {
                id: 2,
                title: 'JS'
            }
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 1,
                title: 'C#'
            },
            {
                id: 2,
                title: 'JS'
            }
        ]
    }
]

var result = topics.reduce(function (output, topic) {
    return output.concat(topic.courses)
}, []);

console.log(result)

var html = result.map(function (course) {
    return `
        <div>
            <h2>${course.title}</h2>
            <p>Id: ${course.id}</p>
        </div>
    `
})

console.log(html.join(''))

Array.prototype.myReduce = function (callback, result) {
    let start = 0;
    if (result === undefined) {
        result = this[0];
        start = 1;
    }
    for (let index = start; index < this.length; index++) {
        result = callback(result, this[index], index, this);
    }
    return result;
}

var numbers = [1, 2, 3, 4, 5];
console.log(numbers.myReduce(function (total, element, index) {
    return total + element
}));

// Example 3:
function arrToObj(arr) {
    return arr.reduce(function (result, element) {
        result[element[0]] = element[1];
        return result;
    }, {});
}

// Expected results:
var arr = [
    ['name', 'Phan Văn Tài'],
    ['age', 20],
];
console.log(arrToObj(arr));

