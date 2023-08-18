const boxNode = document.querySelector('.box')

console.log(boxNode.classList)

console.log(boxNode.classList.length)

console.log(boxNode.classList.value)

boxNode.classList.add('red')

// Xóa class red sau 3s
changeColorText = function () {
    setInterval(() => {
        boxNode.classList.toggle('red')
    }, 1000);
}

// changeColorText();
document.addEventListener("mouseup", function () {
    var selectedText = window.getSelection().toString();

    if (selectedText !== "") {
        console.log("Đã bôi đen văn bản: " + selectedText);
        // Thực hiện các xử lý khác liên quan đến văn bản được bôi đen
    }
});

document.addEventListener('copy', function () {
})