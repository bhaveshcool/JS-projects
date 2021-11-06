const openPop = document.querySelector('#open');
const closee = document.querySelector('#close');
const popupCon = document.querySelector('#popupCon');

openPop.addEventListener('click', ()=>{
   popupCon.classList.add('active');
})

closee.addEventListener('click', ()=>{
   popupCon.classList.remove('active');
})