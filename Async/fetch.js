fetch('https://javascript.info/article/promise-chaining/user.json')
.then(response => {
   return response.json()
})
.then(user => fetch(`https://api.github.com/users/${user.name}`))
.then(response => response.json())
.then(userData => new Promise((resolve, reject)=>{ 
    setTimeout(() => {  
    if(userData.avatar_url){
        const cardDiv = document.querySelector('.cardDiv')
        const card = document.querySelector('.card')
        let img = document.createElement('img');
        img.src = userData.avatar_url;
        img.className = "cardImg";
        card.append(img);
        cardDiv.append(card)
        console.log(img.src) 
        console.log(userData)
        resolve(userData); 
    }else{
        reject('ERROR: Avatar Url not found')
    }
    }, 3000);
}))
.catch(reject => alert(reject))
