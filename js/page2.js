let links = [];
const input = document.querySelector('#inputbtn');
const save = document.querySelector('#save');
const del = document.querySelector('#del');
const ul = document.querySelector('#ulEl');

save.addEventListener('click', inputadd);

function inputadd() {
    links.push(input.value);
    //console.log(links);
    input.value = '';
    render();
}


function render() {
    let listItems = '';
    for (let i = 0; i < links.length; i++) {
         
         //ul.innerHTML += '<li><a>' + links[i] + '</a></li>';
         listItems += 
             `<li><a target=_blank href="${links[i]}"> ${links[i]}</a></li>`;
    }
    ul.innerHTML = listItems;
}

del.addEventListener('click',dele);
function dele(){
    ul.innerHTML = "";
    listItems = "";
    links = [];
}