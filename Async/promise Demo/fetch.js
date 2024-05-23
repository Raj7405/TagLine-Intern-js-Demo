fetch('https://javascript.info/article/promise-chaining/user.json')
.then(response => {
   return response.json()
})
.then(user => fetch(`https://api.github.com/users/${user.name ? user.name : 'Raj7405'}`))
.then(response => response.json())
.then(userData => new Promise((resolve, reject)=>{ 
    setTimeout(() => {  
    if(userData.avatar_url){
        createCard(userData?.avatar_url, userData?.name, userData?.bio || "bio not found")

        // console.log(img.src) 
        console.log(userData)
        resolve(userData); 
    }else{
        reject('ERROR: Avatar Url not found')
    }
    }, 3000);
}))
.catch(reject => alert(reject))

function createCard(url,userName,info){
    let img =  document.createElement('img');
    let userNameH3 = document.createElement('h3');
    let userInfoP = document.createElement('p');
    let cardDiv = document.querySelector('.card')
    
    img.src = url;
    img.className = 'cardImg';

    userNameH3.innerText = `${userName}`;
    userNameH3.className = 'cardHeading';

    userInfoP.innerText = `${info}`;
    userInfoP.className = 'cardInfo';

    cardDiv.appendChild(img)
    cardDiv.appendChild(userNameH3)
    cardDiv.appendChild(userInfoP)
}
