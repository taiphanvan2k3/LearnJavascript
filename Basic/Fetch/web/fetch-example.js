var postAPI = 'https://jsonplaceholder.typicode.com/posts';
fetch(postAPI)
    .then(function (response) {
        // Khi gọi response.json() trả về 1 promise với giá trị trả về
        // đã được JSON.parse rồi
        return response.json();
    })
    .then(function (posts) {
        let html = '';
        posts.forEach(post => {
            html += `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        });
        document.getElementById('posts-block').innerHTML = html;
    })
    .catch(function (error) {
        alert('Có lỗi xảy ra');
    });

    