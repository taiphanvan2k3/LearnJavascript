var promise = new Promise(
    // function này được gọi là Executor
    // function này sẽ được gọi ngay khi new Promise
    function (resolve, reject) {
        // Thực hiện logic ở đây
        // ...
        // Khi logic thành công -> gọi resolve
        // Khi logic thất bại -> gọi reject

        // Khi gọi 1 trong 2 hàm này thì nó sẽ gọi callback tương ứng ở then hoặc catch
        resolve([
            {
                id: 'js',
                name: 'Javascript'
            }
        ]);
        reject('Có lỗi xảy ra');
    }
)

promise
    .then(function (courses) {
        console.log(courses);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log('Done');
    })