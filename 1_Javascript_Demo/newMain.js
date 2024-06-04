let toggleFlag = 1;
const userDataBase = [
    {
        name: "Sammed Patil",
        email: "patil@gmail.com",
        gender: "Female",
        hobby: ["Sport", "Traveling"],
        country: "India",
        state: "Gujarat",
        city: "Ankleshwar",
    },
    {
        name: "Rajendra Chaudhari",
        email: "rajendra@gmail.com",
        gender: "Male",
        hobby: ["Sport", "Reading"],
        country: "India",
        state: "Gujarat",
        city: "Ankleshwar",
    },
];
const country = ["India", "Japan", "Australia"];
const state = {
    India: ["Gujarat", "Maharashtra", "Punjab", "Rajasthan"],
    Japan: ["Kanto", "Kansai", "Hokkaido"],
    Australia: ["Victoria", "Queensland", "Tasmania"],
};
const city = {
    Gujarat: ["Ankleshwar", "Surat", "Vadodara", "Ahmedabad"],
    Maharashtra: ["Mumbai", "Nashik", "Pune"],
    Punjab: ["Gurgaon", "Amritsar", "Patiala"],
    Rajasthan: ["Jaipur", "Kota", "Jodhpur", "Udaipur"],
    Kanto: ["Tokyo", "Saitama", "shibuya"],
    Kansai: ["Osaka", "Kyoto"],
    Hokkaido: ["Hokkaido"],
    Victoria: ["Hamilton", "Portland"],
    Queensland: ["Brisbane", "Blackwater", "Roma"],
    Tasmania: ["Kingston", "Rosebery", "Hobart"],
};

//dynamic list base on select
function creatSelctionList(obj, propName, elementName) {
    let element = document.querySelector(`#${elementName}`);
    element.innerHTML = "<option>Select</option>";
    let objArr = propName ? obj[propName] : obj;
    if (typeof objArr == "object") {
        objArr.forEach((item) => {
            element.innerHTML += `<option value="${item}" name="${element.id}">${item}</option>`;
        });
    } else {
        element.innerHTML = `<option value="Select">Select</option>`;
    }
}

//object structure : constructor function
function CreateUserDataObj(name, email, gender, hobby, country, state, city) {
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.hobby = [...hobby];
    this.country = country;
    this.state = state;
    this.city = city;
}

//Collecting Hobbies from checkbox
function collectHobbies() {
    let hobby = [];
    document.querySelectorAll('input[type="checkbox"]').forEach((item) => {
        if (item.checked) {
            hobby.push(item.value);
        }
    });
    return hobby;
}

//collect data from form input feild
function collectDataOfForm() {
    const name = document.querySelector("#name")?.value.trim();
    const email = document.querySelector("#email")?.value.trim().toLowerCase();
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const hobby = collectHobbies();
    const country = document.querySelector("#country")?.value;
    const state = document.querySelector("#state")?.value;
    const city = document.querySelector("#city")?.value;

    return [name, email, gender, hobby, country, state, city];
}

//Create table row dynamically
function createElementToDisplay(userDataObj) {
    const row = document.createElement("tr");
    for (let key in userDataObj) {
        let temp = document.createElement("td");
        temp.textContent = userDataObj[key];
        row.appendChild(temp);
    }
    if (userDataObj) {
        // click event for edit & delete button
        const editBtn = document.createElement("td");
        editBtn.innerHTML = `<button id='editBtn' class="btn" onclick="editRow(this)">Edit</button>`;
        row.appendChild(editBtn);

        const deletBtn = document.createElement("td");
        deletBtn.innerHTML = `<button id='deleteBtn' class="btn" onclick="deleteRow(this)">Delete</button>`;
        row.appendChild(deletBtn);
    }
    document.querySelector("#tableBody").appendChild(row);
}

//Display function using user data object
function diplayAllData(dataBase) {
    document.querySelector("#tableBody").innerHTML = "";
    dataBase.forEach((item) => createElementToDisplay(item));
}

//show data table to form
function showDataBackToForm(currRow) {
    document
        .querySelectorAll('input[type="checkbox"]')
        .forEach((item) => (item.checked = false));
    currRow.cells[3]
        .textContent.split(",")
        .forEach((item) => {
        document.querySelector(`input[value="${item}"]`).checked = true;
        });
    document
        .querySelector("#name")
        .value = currRow.cells[0].textContent;
    document
        .querySelector("#email")
        .value = currRow.cells[1].textContent;
    document.querySelector(
        `input[value="${currRow.cells[2].textContent}"]`
    ).checked = true;
    
    creatSelctionList(country, "", "country");
    document
        .querySelector("#country")
        .value = currRow.cells[4].textContent;

    creatSelctionList(state, currRow.cells[4].textContent, "state");
    document
        .querySelector("#state")
        .value = currRow.cells[5].textContent;

    creatSelctionList(city, currRow.cells[5].textContent, "city");
    document
        .querySelector("#city")
        .value = currRow.cells[6].textContent;
}

function showDataUsingObj(email){
    console.log(email)
    document
        .querySelectorAll('input[type="checkbox"]')
        .forEach((item) => (item.checked = false));

    let indexOfCurrObj = userDataBase.findIndex(
        (item) => item.email == email
    );

    console.log(indexOfCurrObj)
    const input = Array.from(document.querySelector('#userForm').querySelectorAll('input'))
    input.forEach(item => {
        console.log(item.type)
        switch(item.type){
            case 'text':
                item.value = userDataBase[indexOfCurrObj][item.id]
                console.log(item)
                console.log(userDataBase[indexOfCurrObj][item.id])
                break;
            // case 'email':
            //     item.value = userDataBase[indexOfCurrObj][item.id]
            //     console.log(item)
            //     console.log(userDataBase[indexOfCurrObj][item.id])
            //     break;
            case 'radio':
                if(item.id.toLowerCase() == userDataBase[indexOfCurrObj][item.name].toLowerCase()){
                    item.checked = true
                }
                break;
            case 'checkbox':
                if(userDataBase[indexOfCurrObj][item.name].includes(item.value)){
                    item.checked = true
                }
                break;
        }
    })
    
    const selectArr = Array.from(document.querySelectorAll('select'))
    creatSelctionList(country, "", "country");
    selectArr.forEach(item => {
        switch(item.id){
            case 'country':
                console.log(userDataBase[indexOfCurrObj][item.id])
                creatSelctionList(state, userDataBase[indexOfCurrObj][item.id], "state");
                item.value = userDataBase[indexOfCurrObj][item.id] 
                break;

            case 'state':
                console.log(userDataBase[indexOfCurrObj][item.id])
                creatSelctionList(city, userDataBase[indexOfCurrObj][item.id], "city");
                item.value = userDataBase[indexOfCurrObj][item.id] 
                break;

            case 'city':
                item.value = userDataBase[indexOfCurrObj][item.id] 
                break;
        }
    })
    console.log(selectArr)
}
//reset data of form
function resetData() {
    document.querySelector("#name").value = "";
    document
        .querySelectorAll("select")
        .forEach((item) => (item.innerHTML = "<option>Select</option>"));
    document.querySelectorAll('input[type="checkbox"]').forEach((item) => {
        if (item.checked) {
            item.checked = false;
        }
    });
    document.querySelector('input[type="radio"]:checked').checked = false;
    document.querySelector("#searchInputField").value = "";
}


// function for editing row
function editRow(element) {

    // normalDataLog()
    clearErrors();
    let currRow = element.parentNode.parentNode;

    // showDataBackToForm(currRow);
    showDataUsingObj(currRow.cells[1].textContent)

    document.querySelector("#email").setAttribute("disabled", "true");
    document
        .querySelector('input[type="submit"]')
        .setAttribute("disabled", "true");
    document
        .querySelectorAll("#deleteBtn")
        .forEach((item) => item.setAttribute("disabled", "true"));

    const updateBtn = document.querySelector("#updateBtn");
    updateBtn.style.display = "block";
    document.querySelector(".btnSection").appendChild(updateBtn);

    //finding index of obj which contaib rows's data
    let indexOfCurrObj = userDataBase.findIndex(
        (item) => item.email == currRow.cells[1].textContent
    );

    //clearing event listner before adding new one
    updateBtn.replaceWith(updateBtn.cloneNode(true));
    document
        .querySelector("#resetBtn")
        .replaceWith(document.querySelector("#resetBtn").cloneNode(true));

    //reset funtionality on edit state
    document
        .querySelector("#resetBtn")
        .addEventListener("click", function (event) {
            //intial reset
            document
                .querySelector(`input[value="${currRow.cells[2].textContent}"]`)
                .removeAttribute("checked", "checked");
            currRow.cells[3].textContent.split(",").forEach((item) => {
                document.querySelector(`input[value="${item}"]`).checked = true;
            });
            resetData();
            event.preventDefault();
        });

    //update functionality
    document
        .querySelector("#updateBtn")
        .addEventListener("click", function (event) {
            console.log(validateForm());
            if (validateForm()) {
                pushDataToObj(userDataBase[indexOfCurrObj]);
                document.querySelector("#email").removeAttribute("disabled", "true");
                document.querySelector("#email").value = "";
                document
                    .querySelector('input[type="submit"]')
                    .removeAttribute("disabled", "true");
                document
                    .querySelectorAll("#deleteBtn")
                    .forEach((item) => item.removeAttribute("disabled"));
                document
                    .querySelector('input[type="submit"]')
                    .removeAttribute("disabled", "true");

                resetData();
                this.style.display = "none";
            }
        });
    console.log("edit intiate", element.parentNode.parentNode);
}

//edited data change in main user object
function pushDataToObj(obj) {
    const locator = ['name', 'email', 'country','state', 'city']
    locator.map(item =>  obj[item] = document.querySelector(`#${item}`).value)
    obj.gender = document.querySelector('input[name="gender"]:checked').value;
    obj.hobby = collectHobbies();
    diplayAllData(userDataBase);
}

//delete funciton to delete entire row form table as well as form main user data base
function deleteRow(element) {
    let currRow = element.parentNode.parentNode;
    let indexOfObj = userDataBase.findIndex(
        (obj) => obj.email == currRow.cells[1].textContent
    );
    userDataBase.splice(indexOfObj, 1);
    // emailDataBase.splice(indexOfObj, 1);
    element.parentNode.parentNode.innerHTML = "";
}

//sort data ascending and descending orders by key Logic
function compareValues(key) {
    return function innerSort(item1, item2) {
        if (!item1.hasOwnProperty(key) || !item2.hasOwnProperty(key)) {
            return 0;
        }
        const varItem1 =
            typeof item1[key] === "string" ? item1[key].toUpperCase() : item1[key];
        const varItem2 =
            typeof item2[key] === "string" ? item2[key].toUpperCase() : item2[key];
        let comparison = 0;
        if (varItem1 > varItem2) {
            comparison = 1;
        } else if (varItem1 < varItem2) {
            comparison = -1;
        }
        return comparison;
    };
}

//show ascend & decend Data with toggle btn
function toggleAscendDecend() {
    let userData = userDataBase.toSorted(compareValues("name"));
    if (toggleFlag) {
        document.querySelector("#ascend").style.visibility = "hidden";
        document.querySelector("#decend").style.visibility = "visible";
        diplayAllData(userData);
        toggleFlag = 0;
    } else {
        document.querySelector("#ascend").style.visibility = "visible";
        document.querySelector("#decend").style.visibility = "hidden";
        diplayAllData(userData.reverse());
        toggleFlag = 1;
    }
}

function normalDataLog() {
    document.querySelector("#ascend").style.visibility = "visible";
    document.querySelector("#decend").style.visibility = "visible";
    diplayAllData(userDataBase);
}


//search field : filter function
['keyup', 'paste', 'copy'].forEach((item) => {
    document
        .querySelector("#searchInputField")
        .addEventListener(item, function (event) {
            console.log(this.value);
            let searchValue = this.value.trim();
            filterData(searchValue);
        });
});

function filterData(value) {
    let searchData = userDataBase.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
    );
    diplayAllData(searchData);
}

//Validation Logic
function fullNameTest(fullNameInput){
    let nameFlag = true
    const pattern = /[a-zA-Z ]/;
    
        if (fullNameInput.value.trim() === "") {
            showError(document.querySelector("#nameError"), "Full name is required");
            nameFlag = false;
            // return false
        } else if (!pattern.test(fullNameInput.value.trim())) {
            showError(document.querySelector("#nameError"), "Enter proper name");
            nameFlag = false;
            // return false
        } else{
            dynamicClearError('#nameError')
        }
    
    console.log('fullNameTest',nameFlag)
    return nameFlag
    // return true
}
function emailTest(emailInput){
    let emailFlag = true
    if(emailFlag){
        if (emailInput.value === "") {
            // console.log("i am true");
            showError(document.querySelector("#emailError"), "Email is required");
            emailFlag = false;
        } 
        else if (!validateEmailFormat(emailInput.value.trim().toLowerCase())) {
            showError(document.querySelector("#emailError"), "Invalid email format");
            emailFlag = false;
        }
    }   
    // console.log('emailInputTest', emailFlag)
    return emailFlag
}

function validateForm() {
    
    clearErrors();

    let isValid = true;
    const pattern = /[a-zA-Z ]/;
    const fullNameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const genderInput = document.querySelector('input[name="gender"]:checked') ??
    document.querySelector('input[type="radio"]');
    const hobbyInput = document.querySelector('input[type="checkbox"]:checked') ?? document.querySelector('input[type="checkbox"]');
    const countrySelect = document.querySelector("#country");
    const stateSelect = document.querySelector("#state");
    const citySelect = document.querySelector("#city");

    [genderInput, hobbyInput, countrySelect, stateSelect, citySelect].forEach(item => {
        isValid = fullNameTest(fullNameInput)
        let parm = item.type == 'text' ? item.id : item.type 
        // console.log('parm',parm)
        // console.log(item.name)
        switch(parm){
            // case 'name':
            //     isValid = fullNameTest(fullNameInput)
            //     console.log('name here',isValid)    
            //     break;        
            case 'email':
                isValid = emailTest(emailInput)
                console.log('email',isValid)
                break;
            case 'radio':
                let genderChecked = false;
                document.querySelectorAll('input[type="radio"]').forEach(radio => {
                    if(radio.checked){
                        genderChecked = true
                    }
                })
                // console.log(genderInput)
                if (!genderChecked) {
                    showError(document.querySelector("#genderError"), "Please select a gender");
                    isValid = false;
                }
                console.log('radio',isValid)
                break;

            case 'checkbox':
                let hobbyChecked = false;
                document.querySelectorAll('input[type="checkbox"]').forEach(checkBox => {
                    if(checkBox.checked){
                        hobbyChecked = true
                    }
                })
                if (!hobbyChecked) {
                    showError(
                        document.querySelector("#hobbyError"),
                        "Please select at least one hobby"
                    );
                    isValid = false;
                }
                console.log('checkbox here',isValid) 
                break;

            case 'select-one':
                if (countrySelect.value === "Select") {
                    showError(
                        document.querySelector("#countryError"),
                        "Please select a country"
                    );
                    isValid = false;
                }
                if (stateSelect.value === "Select") {
                    showError(document.querySelector("#stateError"), "Please select a state");
                    isValid = false;
                }
                if (citySelect.value === "Select") {
                    showError(document.querySelector("#cityError"), "Please select a city");
                    isValid = false;
                }
                console.log('select',isValid)
                break;
        }
    })
    console.log('final valid',isValid)
    return isValid;
}

// function to display error message
function showError(node, message) {
    node.textContent = message;
    node.classList.add("display");
}

// function to clear error messages
function clearErrors() {
    document.querySelectorAll(".display").forEach((error) => {
        error.textContent = "";
        error.classList.add("noDisplay");
    });
}

//function on change clear error
function dynamicClearError(locator) {
    let error = document.querySelector(locator);
    error.textContent = "";
    error.classList.add("noDisplay");
}

// function to validate email format
function validateEmailFormat(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//function to check email existence
function emailExist(email) {
    let presentEmail = userDataBase.find(item => item.email == email)
    if (presentEmail) {
        showError(document.querySelector("#emailError"), "Email already exist");
        return false;
    }
    return true;
}


//Main function Of page
document.addEventListener("DOMContentLoaded", function () {
    
    //predefined data to show
    diplayAllData(userDataBase);

    //selection list are populating here
    document
        .querySelector("#country")
        .addEventListener("click", function (event) {
            creatSelctionList(country, null, "country");
            if (this.value == "Select") {
                creatSelctionList("", "", "state");
                creatSelctionList("", "", "city");
            }
        });
    document
        .querySelector("#country")
        .addEventListener("change", function (event) {
            console.log(event.type);
            creatSelctionList(state, this.value, "state");
            document
                .querySelector("#state")
                .addEventListener("change", function (event) {
                    creatSelctionList(city, this.value, "city");
                });
        });

    //event delegation for table Head
    document
        .querySelector("#tabeleHead")
        .addEventListener("click", function (event) {
            if (event.target.classList.contains("icon")) {
                toggleAscendDecend();
            }
            if (event.target.id == document.querySelector("#thfullName").id) {
                console.log("click");
                normalDataLog();
            }
        });

    //data are gettin showed on table here
    document
        .querySelector("#userForm")
        .addEventListener("submit", function (event) {
            // console.log(collectDataOfForm());
            // console.log('sumit',validateForm())
            if (validateForm() && emailExist(document.querySelector("#email").value.toLowerCase())) {
                let userData = new CreateUserDataObj(...collectDataOfForm());
                // emailDataBase.push(userData.email);
                userDataBase.push(userData);
                createElementToDisplay(userData);
                resetData();
                this.reset();
                console.log("Form submitted successfully");
            }
            event.preventDefault();
            return false;
        });

    document
        .querySelector("#resetBtn")
        .addEventListener("click", function (event) {
            document.querySelector("#email").value = "";
            clearErrors();
            resetData();
        });

    document
        .querySelector("#userForm")
        .addEventListener("keypress", function (event) {
            let keyPressed = event.keyCode || event.which;
            if (keyPressed == 13) {
                event.preventDefault();
            }
        });

    //On any input change validaion
    document
        .querySelector("#email")
        .addEventListener("keydown", function (event) {
            let keyPressed = event.keyCode || event.which;
            console.log(keyPressed);
            console.log(this.value);
            if (keyPressed === 13) {
                return;
            }
            if (event.key == "Backspace") {
                dynamicClearError("#emailError");
            } else {
                dynamicClearError("#emailError");
            }
        });

    document.querySelector("#email").addEventListener("keyup", function (event) {
        emailTest(this)
        emailExist(this.value.toLowerCase())
    });

    document
        .querySelector("#name")
        .addEventListener("keyup", function (event) {
            fullNameTest(this)
        });

    //On any change if input is valid
    document.addEventListener("input", function (event) {
        let target = event.target;
        //Gender
        if (target.type == document.querySelector('input[type="radio"]').type) {
            dynamicClearError("#genderError");
        }

        //Hobbies
        if (target.type == document.querySelector('input[type="checkbox"]').type) {
            console.log("hobby");
            dynamicClearError("#hobbyError");
        }
        
        //Selction List
        if (target.value == document.querySelector("#country").value) {
            dynamicClearError("#countryError");
        }
        if (target.value == document.querySelector("#state").value) {
            dynamicClearError("#stateError");
        }
        if (target.value == document.querySelector("#city").value) {
            dynamicClearError("#cityError");
        }
    });
});