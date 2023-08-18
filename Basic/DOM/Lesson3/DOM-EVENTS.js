const h2Elements = document.querySelectorAll('h2');

const h1 = document.querySelector('h1');
h1.onclick = function () {
}
h2Elements.forEach(function (element) {
    element.onclick = function (e) {
        console.log(this)
    }
})