export function createCard(url,userName,info){
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

export default {createCard};
