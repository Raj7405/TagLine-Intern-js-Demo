//promise.all(itreble)
//to extract the JSON body content from the Response, you need to call the .json() method on it, which returns a promise.
//If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.
//Promise.all(iterable) allows non-promise “regular” values in iterable
let userName = ['Raj7405', 'iliakan', 'remy', 'jeresig'];

let responses = userName.map(name => fetch(`https://api.github.com/users/${name}`));

console.log(responses)
Promise.all(responses)
    .then(responses => Promise.all(responses.map(item => item.json())))
    .then(userData => userData.forEach(data => {
            setTimeout(() => {  
                if(data){
                    createCard(data?.avatar_url, data?.name, data?.bio || "bio not found")
                    console.log(data)
                }else{
                    console.error('ERROR: Avatar URL not found for', data.login)
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
