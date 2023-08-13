// document.write('Hello world')

debugger
const headingNode = document.getElementById('heading');
console.log({
    element: headingNode
});

const descriptionNodes = document.getElementsByClassName("desc")
console.log('Desc', descriptionNodes)

const firstDesc = document.querySelector('.desc')
console.log('First desc:', firstDesc);

const allDesc = document.querySelectorAll('.desc');
console.log(allDesc);

headingNode.setAttribute('title', 'xin chào')
headingNode.removeAttribute('title')
console.log(headingNode.getAttribute('title'));

for (const element of descriptionNodes) {
    // element.className = 'red-color'
    // console.log(element)
    const currentClassName = element.className;
    element.className = `${currentClassName} red-color`
}

document.querySelector('.div').innerText = 'abc'