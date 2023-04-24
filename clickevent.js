const foo = document.getElementById("foo");
const bar = document.getElementById("bar");
const fooBar = document.getElementById("foobar");
const main = document.querySelector('main');

foo.addEventListener('click', responseToClick)
function responseToClick(){
    const h3 = document.createElement('h3');
    h3.textContent = "Foo";
    main.appendChild(h3);
}

bar.addEventListener('click', responseToClickB)
function responseToClickB(){
    const h3 = document.createElement('h3');
    h3.textContent = "Bar";
    main.appendChild(h3);
}

fooBar.addEventListener('click', responseToClickF)
function responseToClickF(){
    const h2 = document.createElement('h2');
    h2.textContent = "Foobar";
    main.appendChild(h2);
}