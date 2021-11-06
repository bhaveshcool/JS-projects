const toggle = document.querySelector('#toggle');

toggle.addEventListener('change', (e)=>{
    document.body.classList.toggle('dark', e.target.checked)
})