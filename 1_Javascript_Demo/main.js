let toggleFlag = 1;
const emailDataBase = ['patil@gmail.com','rajendra@gmail.com']
const userDataBase = [
    {
        name: 'Sammed Patil',
        email : 'patil@gmail.com',
        gender : 'Male',
        hobby: ['Sport', 'Traveling'],
        country: 'India',
        state : 'Gujarat',
        city : 'Ankleshwar',
    },
    {
        name: 'Rajendra Chaudhari',
        email : 'rajendra@gmail.com',
        gender : 'Male',
        hobby : ['Sport', 'Reading'],
        country: 'India',
        state : 'Gujarat',
        city : 'Ankleshwar',
    },
]
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


//dynamic list base on select
function creatSelctionList(obj, propName, elementName){
    let element = document.querySelector(`#${elementName}`)
    element.innerHTML = '<option>Select</option>'
    let objArr = propName ? obj[propName] : obj
    objArr.forEach(item => {
        element.innerHTML += `<option value="${item}" name="${element.id}">${item}</option>`
    })
}
//object structure : constructor function
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
//collect data from form input feild
function collectDataOfForm(){
    const name = document.querySelector('#fullName').value;
    const email = document.querySelector('#email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const hobby =  collectHobbies();
    const country = document.querySelector('#country').value;
    const state = document.querySelector('#state').value;
    const city = document.querySelector('#city').value;

    return [name,email,gender,hobby,country,state,city]
}
//Validate Email
function validateEmail(email){
    if(emailDataBase.includes(email)){
        emailDataBase.push(email)
    }else{
        alert("email already exist")
    }
}
//Create table row dynamically
function createElementToDisplay(userDataObj){
    const row = document.createElement('tr');
    for(let key in userDataObj){
        let temp = document.createElement('td')
        temp.textContent = userDataObj[key]
        row.appendChild(temp)
    }
    if(userDataObj){
        // click event for edit & delete button
        const editBtn = document.createElement('td')
        editBtn.innerHTML = `<button id='editBtn' class="btn" onclick="editRow(this)">Edit</button>` 
        row.appendChild(editBtn)
    
        const deletBtn = document.createElement('td')
        deletBtn.innerHTML = `<button id='deleteBtn' class="btn" onclick="deleteRow(this)">Delete</button>`
        row.appendChild(deletBtn)
    }
    
    document.querySelector('#tableBody').appendChild(row)
}

//Display function using user data object
async function diplayAllData(dataBase){
    document.querySelector('#tableBody').innerHTML = ''
    await dataBase.forEach(item =>  createElementToDisplay(item))
}

//show data table to form 
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

// function for editing row
function editRow(element){
    let currRow = element.parentNode.parentNode
    console.log(currRow)
    showDataBackToForm(currRow)
    
    document.querySelector('input[type="submit"]').setAttribute('disabled','true');
    document.querySelectorAll('#deleteBtn').forEach(item => item.setAttribute('disabled','true'));
    const updateBtn = document.querySelector('#updateBtn');
    updateBtn.style.display = "block"
    document.querySelector('.btnSection').appendChild(updateBtn)
    
    let indexOfCurrObj = userDataBase.findIndex( item => item.email == currRow.cells[1].textContent) 
    console.log(userDataBase[indexOfCurrObj])

    //event delegation on editing state in form element
    document.querySelector('#resetBtn').addEventListener('click', function(event){
        document.querySelector(`input[value="${currRow.cells[2].textContent}"]`).removeAttribute('checked','checked')
            currRow.cells[3].textContent.split(',').forEach(item => {
            document.querySelector(`input[value="${item}"]`).removeAttribute('checked','checked') 
        })
    })

    document.querySelector('#updateBtn').addEventListener('click',function(event){
        console.log(indexOfCurrObj)
        console.log(userDataBase[indexOfCurrObj])
        pushDataToObj(userDataBase[indexOfCurrObj])
        document.querySelectorAll('#deleteBtn').forEach(item => item.removeAttribute('disabled'));
        document.querySelector('input[type="submit"]').removeAttribute('disabled','true');
        document.querySelector('#userForm').reset()
        this.style.display = 'none'
    })
    // document.querySelector('#userForm').addEventListener('click', function(event){
    //     console.log(event.target)
    //     event.preventDefault()
    //     if(event.target.id == document.querySelector('#resetBtn').id){
    //         document.querySelector(`input[value="${currRow.cells[2].textContent}"]`).removeAttribute('checked','checked')
    //         currRow.cells[3].textContent.split(',').forEach(item => {
    //         document.querySelector(`input[value="${item}"]`).removeAttribute('checked','checked') 
    //         })
    //     }
    //     if(event.target.id == document.querySelector('#updateBtn').id){
    //         console.log(this)
    //         pushDataToObj(userDataBase[indexOfCurrObj])
    //         document.querySelectorAll('#deleteBtn').forEach(item => item.removeAttribute('disabled'));
    //         document.querySelector('input[type="submit"]').removeAttribute('disabled','true');
    //         this.reset()
    //         event.target.style.display = 'none'
    //     }
    // }, false)
    console.log("edit intiate", element.parentNode.parentNode)
}

//edited data change in main user object
function pushDataToObj(obj){
    console.log(obj)
    console.log(document.querySelector('#fullName').value)
    obj.name = document.querySelector('#fullName').value;
    console.log(obj)
    obj.email = document.querySelector('#email').value;
    obj.gender = document.querySelector('input[name="gender"]:checked').value;
    obj.hobby =  collectHobbies();
    obj.country = document.querySelector('#country').value;
    obj.state = document.querySelector('#state').value;
    obj.city = document.querySelector('#city').value;
    diplayAllData(userDataBase)
    
}

//delete funciton to delete entire row form table as well as form main user data base
function deleteRow(element){
    let currRow = element.parentNode.parentNode;
    let indexOfObj = userDataBase.findIndex((obj) => obj.email == currRow.cells[1].textContent);
    userDataBase.splice(indexOfObj, 1);
    element.parentNode.parentNode.innerHTML = '';
}

//sort data ascending and descending orders by key Logic
function compareValues(key) {
    return function innerSort(item1, item2) {
      if (!item1.hasOwnProperty(key) || !item2.hasOwnProperty(key)) {
            return 0;
      }
      const varItem1 = (typeof item1[key] === 'string') ? item1[key].toUpperCase() : item1[key];
      const varItem2 = (typeof item2[key] === 'string') ? item2[key].toUpperCase() : item2[key];
  
      let comparison = 0;
      if (varItem1 > varItem2) {
        comparison = 1;
      } else if (varItem1 < varItem2) {
        comparison = -1;
      }
      return comparison
    };
}

//show ascend & decend Data with toggle btn
function toggleAscendDecend(){
    let userData = userDataBase.toSorted(compareValues('name'))
    if(toggleFlag){
        document.querySelector('#ascend').style.visibility = 'hidden'
        document.querySelector('#decend').style.visibility = 'visible'
        diplayAllData(userData)
        toggleFlag = 0
    }else{
        document.querySelector('#ascend').style.visibility = 'visible'
        document.querySelector('#decend').style.visibility = 'hidden'
        diplayAllData(userData.reverse())
        toggleFlag = 1
    }
}

//search field : filter function
document.querySelector('.searchIcon').addEventListener('click', function(event){
    console.log(event.target)
    diplayAllData([userDataBase.find(item => item.name == document.querySelector('#searchInputField').value)])
    document.querySelector('.cancelIcon').style.display = 'block';
    document.querySelector('.searchIcon').style.display = 'none';
})
document.querySelector('.cancelIcon').addEventListener('click', function(event){
    console.log(event.target)
    diplayAllData(userDataBase)
    document.querySelector('.cancelIcon').style.display = 'none';
    document.querySelector('.searchIcon').style.display = 'block';
    document.querySelector('#searchInputField').value = ''
})


//Main function Of page
document.addEventListener('DOMContentLoaded', function(){
    //selection list are populating here
    creatSelctionList(country, null, 'country')
    document.querySelector('#country').addEventListener('change', function(event){
        creatSelctionList(state, this.value, 'state')
    })
    document.querySelector('#state').addEventListener('change', function(event){
        creatSelctionList(city, this.value, 'city')
    })

    //predeined data to show 
    diplayAllData(userDataBase)

    //data are gettin showed here
    document.querySelector('#userForm').addEventListener('submit', function(event){
        event.preventDefault();
        console.log(collectDataOfForm())
        let userData = new CreateUserDataObj(...collectDataOfForm());
        userDataBase.push(userData);
        validateEmail(userData.email)
        createElementToDisplay(userData);
        document.querySelectorAll('input').value = ''
        this.reset();
        return false
    })

    //Event delegation
    document.querySelector('#tabeleHead').addEventListener('click', function(event) {
        console.log(event.target)
        if(event.target.classList.contains('icon')){
            toggleAscendDecend()         
        }
        if(event.target.id == document.querySelector('#thfullName').id){
            diplayAllData(userDataBase)
        }
    })
})
