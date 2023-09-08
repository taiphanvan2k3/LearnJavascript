const promise = new Promise(
    function (resolve, reject) {
        resolve();
    }
)

promise
    .then(function () {
        console.log('Task 1');
    })
    .then(function () {
        console.log('Task 2');
        return 3;
    })
    .then(function (value) {
        console.log(`Task ${value}`);
    })
    .catch(function () {

    })
    .finally(function () {

    })

const promise2 = new Promise(
    function (resolve) {
        resolve();
    }
)

promise2
    .then(function () {
        return new Promise(
            function (resolve) {
                setTimeout(function () {
                    console.log(1);
                    resolve();
                }, 1000);
            }
        )
    })
    .then(function () {
        return new Promise(
            function (resolve) {
                setTimeout(function () {
                    var str = '';
                    for (var i = 0; i <= 1000; i++) {
                        str += 'i';
                    }
                    resolve();
                    console.log(str);
                }, 1000);
            }
        )
    })
    .then(function () {
        setTimeout(function () {
            console.log();
        }, 1000)
    })