const num = document.querySelector('#num');
const inc = document.querySelector('#incre');
const save = document.querySelector('#save');
const batches = document.querySelector('#bonds');
const clear = document.querySelector('#clear');
let count = 0;

inc.addEventListener('click', increment);
save.addEventListener('click', jSave);
clear.addEventListener('click', clearYes);
function increment(){
    count += 1;
    console.log(count);
    num.innerHTML = count;
}
function jSave(){
    let conutstr = count + " - "
    batches.textContent += conutstr;
    num.innerHTML = 0;
    count = 0;
}

function clearYes(){
    batches.textContent = 'batches:';
    num.innerHTML = 0;
    count = 0;
}