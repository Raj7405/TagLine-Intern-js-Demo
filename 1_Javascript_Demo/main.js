
const country = ['India', 'Japan', 'Australia']
const state = {
    India : ['Gujarat', 'Maharashtra', 'Punjab', 'Rajasthan'],
    Japan : ['Kanto', 'Kansai', 'Hokkaido'],
    Australia : ['Victoria', 'Queensland', 'Tasmania']
}
const city = {
    Gujarat : ['Ankleshwar', 'Surat', 'Vadodara', 'Ahmedabad'],
    Maharashtra : ['Mumbai', 'Nashik', 'Pune'],
    Punjab : ['Gurgaon', 'Amritsar','Patiala'],
    Rajasthan : ['Jaipur','Kota','Jodhpur','Udaipur'],
    Kanto : ['Tokyo','Saitama','shibuya'],
    Kansai : ['Osaka','Kyoto'],
    Hokkaido : ['Hokkaido'],
    Victoria : ['Hamilton','Portland'],
    Queensland :['Brisbane','Blackwater','Roma'],
    Tasmania : ['Kingston','Rosebery','Hobart'],
}

// function findKey(obj, itemName){
//     for(let key in obj){
//         if(key == itemName){
//             console.log(key)
//             return obj[key]
//         }
//     }
// }

function createCountrySelctionList(country){
    const countrySelection = document.querySelector('#country')
    country.forEach(country => {
        countrySelection.innerHTML += `<option value="${country}" name="country">${country}</option>`
    })
}
function creatSelctionList(obj, propName, elementName){
    let element = document.querySelector(`#${elementName}`)
    element.innerHTML = '<option>Select</option>'
    obj[propName].forEach(item => {
        element.innerHTML += `<option value="${item}" name="${element.id}">${item}</option>`
    })
}
document.addEventListener('DOMContentLoaded', function(){
    createCountrySelctionList(country)
})
document.querySelector('#country').addEventListener('change', function(event){
    creatSelctionList(state, this.value, 'state')
})
document.querySelector('#state').addEventListener('change', function(event){
    creatSelctionList(city, this.value, 'city')
})



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

function SelectOption(selctionList, key){
    for(let i=0; i < selctionList.cells.length; i++){
        if(selctionList.options[i].inntext == key){
             selctionList.cells.options[i].setAttribute('selected','selected')
        }
    }
}
function showDataBackToForm(currRow){
    document.querySelector('#fullName').value = currRow.cells[0].textContent
    document.querySelector('#email').value = currRow.cells[1].textContent
    document.querySelector(`input[value="${currRow.cells[2].textContent}"]`).setAttribute('checked','checked')
    currRow.cells[3].textContent.split(',').forEach(item => {
        document.querySelector(`input[value="${item}"]`).setAttribute('checked','checked') 
    })
    document.querySelector('#country').value = currRow.cells[4].textContent;
    creatSelctionList(state, currRow.cells[4].textContent, 'state');
    document.querySelector('#state').value = currRow.cells[5].textContent;
    creatSelctionList(city, currRow.cells[5].textContent, 'city');
    document.querySelector('#city').value = currRow.cells[6].textContent;
}
function editRow(element){
    let currRow = element.parentNode.parentNode
    showDataBackToForm(currRow)
    console.log("edit intiate", element.parentNode.parentNode)
}
function deleteRow(element){
    let currRow = element.parentNode.parentNode;
    let indexOfObj = userDataBase.findIndex((obj) => obj.email == currRow.cells[1].textContent);
    userDataBase.splice(indexOfObj, 1);
    element.parentNode.parentNode.innerHTML = '';
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
        
        let userData = new CreateUserDataObj(name, email, gender, hobby, country, state, city);
        userDataBase.push(userData);
        createElementToDisplay(userData);
    })
} )

