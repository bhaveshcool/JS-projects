function creator() {
    const heart = document.createElement('div')
    heart.classList.add('heart');
    heart.innerText = '💖';
    document.body.appendChild(heart);
    heart.style.left = Math.random() * 90 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 5 + 's';
    setTimeout(() =>{
        heart.remove();
    }, 4500)
}

setInterval(creator, 200);

function creator2() {
    const heart2 = document.createElement('div')
    heart2.classList.add('heart2');
    heart2.innerText = '💛';
    document.body.appendChild(heart2);
    heart2.style.left = Math.random() * 90 + 'vw';
    heart2.style.animationDuration = Math.random() * 2 + 5 + 's';
    
    setTimeout(() =>{
        heart2.remove();
    }, 4500)
}
function bg(params) {
    document.body.style.background = rand();
}
function rand(params) {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 70%)`;
}
setInterval(creator2, 300);
setInterval(bg, 3000);