var boxNode = document.querySelector(".box")
console.log({
    item: boxNode
});

boxNode.innerHTML = '<h1>Xin chào</h1>'
console.log(boxNode.outerHTML);
console.log(boxNode.baseURI)

boxNode.style.width = '300px';
boxNode.style.height = '200px';
boxNode.style.backgroundColor = 'green';

Object.assign(boxNode.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'yellow',
    border: '1px solid green',
    borderRadius: '5px',
    textAlign: 'center',
    color: 'blue'
});

console.log(boxNode.style);