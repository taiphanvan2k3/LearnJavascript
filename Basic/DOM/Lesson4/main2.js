const aElements = document.querySelectorAll('a');

aElements.forEach(function (element) {
    element.onclick = function (e) {
        if (!e.target.href.startsWith('https://fullstack.edu.vn')) {
            e.preventDefault();
        }
    }
})

// Ngăn chặn hành vi mặc định: click vào thẻ ul thì thẻ ul không bị ẩn đi
const inputElement = document.querySelector('input')
document.querySelector('ul').onmousedown = function (e) {
    inputElement.value = e.target.innerText
    e.preventDefault();
}

document.querySelector('div').onclick = function () {
    console.log('Div');
}

document.querySelector('button').onclick = function (e) {
    e.stopPropagation();
    console.log('click me');
}
// Ngăn chặn hành vi nổi bọt