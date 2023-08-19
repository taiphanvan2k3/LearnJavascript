const inputElement = document.querySelector('input[type="text"]')
const button = document.querySelector('.btn')

button.addEventListener('click', function () {
    console.log(inputElement.value);
})

// Hoặc dùng:
// button.onclick = function () {
//     console.log(inputElement);
// }

inputElement.onchange = function (e) {
    console.log(e.target.value)
}

inputElement.oninput = function (e) {
    console.log(e.target.value);
}

document.querySelector('input[type="checkbox"').addEventListener('change', function (e) {
    console.log(e.target.checked);
})

const selectElement = document.querySelector('select')
selectElement.onchange = function (e) {
    const selectedItem = e.target;
    console.log('Value submit:' + selectElement.value)
    console.log('Value hiển thị:' + selectElement.options[selectedItem.selectedIndex].innerText)
}

document.onkeydown = function (mouseEvent) {
    console.log(mouseEvent.which)
}
