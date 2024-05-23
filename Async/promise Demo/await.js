import {createCard} from './cardFuction.js'

let userName = ['Raj7405', 'iliakan', 'remy', 'jeresig'];
async function loadUserData(){
    try{
        let request = userName.map(name => fetch(`https://api.github.com/users/${name}`))
        let response = await Promise.all(request)
        let jsonData = await Promise.all(response.map(response => response.json()));
        jsonData.forEach(data => {
            setTimeout(()=>{
                if(data){
                    createCard(data?.avatar_url, data?.name, data?.bio || "bio not found")
                    console.log(data)
                }else{
                    console.error('ERROR: Avatar URL not found for', data.login)
                }
            }, 1000)
        })
    }catch(err){
        console.error(err)
    }
}
loadUserData()

