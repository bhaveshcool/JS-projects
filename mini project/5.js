const container = document.querySelector('#container');
const btn = document.querySelector('#btn');

btn.addEventListener('click', ()=>{
    container.innerHTML += getmessage();
})

let meassages = ['<p>' + 'You are nice person' + '</p>' ,'<p>' + 'I am always with you' + '</p>','<p>' + 'success is your warmup' + '</p>','<p>' + 'You are a Legend' + '</p>','<p>' + 'Winning is your passion' + '</p>','<p>' + 'live life king size x2' + '</p>'];


function getmessage() {
    let randomMesssage = Math.floor(Math.random() * meassages.length);
    return meassages[randomMesssage];
}