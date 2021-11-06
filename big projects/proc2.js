const APIURL = 'https://api.github.com/users/'

const form = document.querySelector('form');
const search = document.querySelector('#search');
const main = document.querySelector('main');

async function getUser(user) {
    const resp = await fetch(APIURL + user);
    const respData = await resp.json();

    getuserandcard(respData);
}

function getuserandcard(user) {
        const cardHtML = `
        <div class="card">
         <div>
           <img class="avatr" src="${user.avatar_url}" alt="${user.login}">
         </div>
         <div>
            <h2>${user.login}</h2>
            <p>Bio: ${user.bio}</p>

            <ul>
              <li>followers: ${user.followers}</li>
              <li>following: ${user.following}</li>
              <li>public repositrys: ${user.public_repos}</li>
            </ul>
         </div>
        </div>
     `;

     main.innerHTML = cardHtML;
}


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const user = search.value;
    if (user) {
        getUser(user);

        search.value = "";
    }
})
