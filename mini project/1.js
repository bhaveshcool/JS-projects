const btn = document.querySelector('#btn');

btn.addEventListener('click', ()=>{
     console.log('working');
      document.body.style.background = randomgen();
});

function randomgen(params) {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
}