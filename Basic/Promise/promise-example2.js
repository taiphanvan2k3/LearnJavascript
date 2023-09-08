const promise = Promise.resolve('Success');

promise
    .then(function (value) {
        console.log(value);
    })
    .catch(function (err) {
        console.log(err);
    })