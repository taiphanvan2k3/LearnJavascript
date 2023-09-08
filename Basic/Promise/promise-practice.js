const users = [
    {
        id: 1,
        name: 'Tài Phan Văn'
    },
    {
        id: 2,
        name: 'Sơn Đặng'
    },
    {
        id: 3,
        name: 'Hương Đàm'
    }
];

const comments = [
    {
        id: 1,
        userId: 1,
        content: 'Anh Sơn chưa ra video :('
    },
    {
        id: 2,
        userId: 2,
        content: 'Vừa ra xong em ơi!'
    },
    {
        id: 3,
        userId: 1,
        content: 'Cảm ơn anh nha ^^'
    }
];

// 1. Lấy comments
// 2. Lấy user id từ comment
// 3

// Fake api
function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000);
    })
}

function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            const result = users.filter(function (user) {
                return userIds.includes(user.id);
            });
            resolve(result);
        }, 1000);
    })
}

getComments()
    .then(function (comments) {
        const userIds = comments.map(function (comment) {
            return comment.userId;
        })

        return getUsersByIds(userIds);
    })
    .then(function (users) {
        return {
            users: users,
            comments: comments
        }
    })
    .then(function (data) {
        const usersDictionary = {};
        data.users.forEach(function (user) {
            usersDictionary[user.id] = user.name
        });

        let html = '';
        data.comments.forEach(function (comment) {
            html += `<li>${usersDictionary[comment.userId]}: ${comment.content}</li>`;
        });
        document.querySelector('#comments-block').innerHTML = html;
        console.log(document.querySelector('#comments-block').textContent);
    });