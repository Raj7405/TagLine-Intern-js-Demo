const userDataBase = [
    {
        name: 'Rajendra Chaudhari',
        email : 'rajendra@gmail.com',
        gender : 'Male',
        hobby : ['Sport', 'Reading'],
        country: 'India',
        state : 'Gujarat',
        city : 'Ankleshwar',
    },
    {
        name: 'Sammed Patil',
        email : 'patil@gmail.com',
        gender : 'Male',
        hobby: ['Sport', 'Traveling'],
        country: 'India',
        state : 'Gujarat',
        city : 'Ankleshwar',
    },
]

function CreateUserDataObj(name, email, gender, hobby, country, state, city){
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.hobby= [...hobby];
    this.country = country;
    this.state  = state;
    this.city = city;
}
function collectHobbies(){
    let hobby = []
    document.querySelectorAll('input[type="checkbox"]').forEach(item => {
        if(item.checked){
            hobby.push(item.value)
        }
    })
    return hobby
}
function createElementToDisplay(userDataObj){
    const row = document.createElement('tr');
    for(let key in userDataObj){
        let temp = document.createElement('td')
        temp.textContent = userDataObj[key]
        row.appendChild(temp)
    }
    const editBtn = document.createElement('td')
    editBtn.innerHTML = `<button id='editBtn' onclick="editRow(this)">Edit</button>`
    row.appendChild(editBtn)

    const deletBtn = document.createElement('td')
    deletBtn.innerHTML = `<button id='deletBtn' onclick="deleteRow(this)">Delete</button>`
    row.appendChild(deletBtn)
    
    document.querySelector('#tableBody').appendChild(row)
}
async function diplayAllData(dataBase){
    await dataBase.forEach(item =>  createElementToDisplay(item))
}

function editRow(element){
    let currRow = element.parentNode.parentNode
    document.querySelector('#fullName').value = currRow.cells[0].textContent
    document.querySelector('#email').value = currRow.cells[1].textContent
    document.querySelector('input[name="gender"]:checked').value = currRow.cells[2].textContent
    const hobby =  collectHobbies();
    document.querySelector('#country').value = currRow.cells[4].textContent
    document.querySelector('#state').value = currRow.cells[5].textContent
    document.querySelector('#city').value = currRow.cells[6].textContent
    console.log(currRow[6].textContent)
    console.log("edit intiate", element.parentNode.parentNode)
}
function deleteRow(element){
    let currRow = element.parentNode.parentNode
    // console.log(element.parentNode.parentNode.cells[1].textContent)
    // console.log(userDataBase.findIndex((obj) => obj.email == currRow.cells[1].textContent ))
    let indexOfObj = userDataBase.findIndex((obj) => obj.email == currRow.cells[1].textContent )
    userDataBase.splice(indexOfObj, 1)
    // console.log(userDataBase)
    element.parentNode.parentNode.innerHTML = ''
}

document.addEventListener('DOMContentLoaded', function(){
    diplayAllData(userDataBase)
    document.querySelector('#userForm').addEventListener('submit', function(event){
        event.preventDefault();
        const name = document.querySelector('#fullName').value;
        const email = document.querySelector('#email').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const hobby =  collectHobbies();
        const country = document.querySelector('#country').value;
        const state = document.querySelector('#state').value;
        const city = document.querySelector('#city').value;
        
        let userData = new CreateUserDataObj(name, email, gender, hobby, country, state, city)
        userDataBase.push(userData)
        createElementToDisplay(userData)
    })
} )