import './style.scss';
function component() {
    const element = document.createElement("h1");  
    element.innerHTML = "Content";
    element.classList.add('myDiv')
    return element;
};
function component2() {
    const element = document.createElement("h1");  
    element.innerHTML = "Footer";
    element.classList.add('myDiv2')
    return element;
};

document.body.appendChild(component());
document.body.appendChild(component2());