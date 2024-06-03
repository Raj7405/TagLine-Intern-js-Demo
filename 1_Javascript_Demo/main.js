let toggleFlag = 1;
const emailDataBase = ["patil@gmail.com", "rajendra@gmail.com"];
const userDataBase = [
    {
        name: "Sammed Patil",
        email: "patil@gmail.com",
        gender: "Male",
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

function originalSelectionListState() {
    creatSelctionList("", "", "country");
    creatSelctionList("", "", "state");
    creatSelctionList("", "", "city");
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
    const name = document.querySelector("#fullName")?.value.trim();
    const email = document.querySelector("#email")?.value.trim();
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    console.log(gender);
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
async function diplayAllData(dataBase) {
    document.querySelector("#tableBody").innerHTML = "";
    await dataBase.forEach((item) => createElementToDisplay(item));
}

//show data table to form
function showDataBackToForm(currRow) {
    currRow.cells[3].textContent.split(",").forEach((item) => {
        document
            .querySelector(`input[value="${item}"]`)
            .checked = true
    });
    document.querySelector("#fullName").value = currRow.cells[0].textContent;
    document.querySelector("#email").value = currRow.cells[1].textContent;
    document
        .querySelector(`input[value="${currRow.cells[2].textContent}"]`)
        .checked = true
    currRow.cells[3].textContent.split(",").forEach((item) => {
        document
            .querySelector(`input[value="${item}"]`)
            .setAttribute("checked", "checked");
    });
    creatSelctionList(country, "", "country");
    document.querySelector("#country").value = currRow.cells[4].textContent;
    creatSelctionList(state, currRow.cells[4].textContent, "state");
    document.querySelector("#state").value = currRow.cells[5].textContent;
    creatSelctionList(city, currRow.cells[5].textContent, "city");
    document.querySelector("#city").value = currRow.cells[6].textContent;
}

function resetData(){
    document
        .querySelector('#fullName')
        .value = ''
    document
        .querySelectorAll('select')
        .forEach(item => item.innerHTML = '<option>Select</option>')
    // if (document.querySelector('input[type="radio"]:checked').checked || document.querySelector('input[type="checkbox"]:checked').checked) {
        document
            .querySelectorAll('input[type="checkbox"]')
            .forEach((item) => {
                if (item.checked) {
                    item.checked = false;
                }   
            });
        document
            .querySelector('input[type="radio"]:checked')
            .checked = false    
    // }
    document
        .querySelector("#searchInputField")
        .value = ''
}
// function for editing row
function editRow(element) {
    let currRow = element.parentNode.parentNode;

    showDataBackToForm(currRow);

    document
        .querySelector('#email')
        .setAttribute("disabled", "true")

    document
        .querySelector('input[type="submit"]')
        .setAttribute("disabled", "true");
    document
        .querySelectorAll("#deleteBtn")
        .forEach((item) => item.setAttribute("disabled", "true"));

    const updateBtn = document.querySelector("#updateBtn");
    updateBtn.style.display = "block";
    document
        .querySelector(".btnSection")
        .appendChild(updateBtn);

    let indexOfCurrObj = userDataBase.findIndex(
        (item) => item.email == currRow.cells[1].textContent
    );

    //clearing event listner before adding new one
    updateBtn.replaceWith(updateBtn.cloneNode(true));
    document
        .querySelector("#resetBtn")
        .replaceWith(document.querySelector("#resetBtn").cloneNode(true));


    document
        .querySelector("#resetBtn")
        .addEventListener("click", function (event) {
            //intial reset
            document
                .querySelector(`input[value="${currRow.cells[2].textContent}"]`)
                .removeAttribute("checked", "checked");
            currRow.cells[3].textContent.split(",").forEach((item) => {
                document
                    .querySelector(`input[value="${item}"]`)
                    .checked = true             
            });
            resetData()
            event.preventDefault()
        });

    document
        .querySelector("#updateBtn")
        .addEventListener("click", function (event) {
            console.log(validateForm())
            if (validateForm()) {
                pushDataToObj(userDataBase[indexOfCurrObj]);
                document
                    .querySelector('#email')
                    .removeAttribute("disabled", "true")
                document
                    .querySelector('#email')
                    .value= ''
                document
                    .querySelector('input[type="submit"]')
                    .removeAttribute("disabled", "true");
                document
                    .querySelectorAll("#deleteBtn")
                    .forEach((item) => item.removeAttribute("disabled"));
                document
                    .querySelector('input[type="submit"]')
                    .removeAttribute("disabled", "true");
                
                resetData()
                this.style.display = "none";
            }
        });
    console.log("edit intiate", element.parentNode.parentNode);
}

//edited data change in main user object
function pushDataToObj(obj) {
    obj.name = document.querySelector("#fullName").value;
    obj.email = document.querySelector("#email").value;
    obj.gender = document.querySelector('input[name="gender"]:checked').value;
    obj.hobby = collectHobbies();
    obj.country = document.querySelector("#country").value;
    obj.state = document.querySelector("#state").value;
    obj.city = document.querySelector("#city").value;
    diplayAllData(userDataBase);
}

//delete funciton to delete entire row form table as well as form main user data base
function deleteRow(element) {
    let currRow = element.parentNode.parentNode;
    let indexOfObj = userDataBase.findIndex(
        (obj) => obj.email == currRow.cells[1].textContent
    );
    userDataBase.splice(indexOfObj, 1);
    emailDataBase.splice(indexOfObj, 1);
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

//search field : filter function

['keyup', 'paste', 'copy'].forEach(item => {
    document
        .querySelector("#searchInputField")
        .addEventListener(item, function (event) {
            console.log(this.value)
            let searchValue = this.value.trim();
            filterData(searchValue)
        })
})

function filterData(value) {
    let searchData = userDataBase.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
    diplayAllData(searchData)
}


//Main function Of page
document.addEventListener("DOMContentLoaded", function () {

    //predeined data to show
    diplayAllData(userDataBase);
   
    //selection list are populating here
    document
        .querySelector("#country")
        .addEventListener("click", function (event) {
            creatSelctionList(country, null, "country");
            if (this.value == 'Select') {
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

    //Event delegation
    document
        .querySelector("#tabeleHead")
        .addEventListener("click", function (event) {
            if (event.target.classList.contains("icon")) {
                toggleAscendDecend();
            }
            if (event.target.id == document.querySelector("#thfullName").id) {
                console.log('click')
                document.querySelector("#ascend").style.visibility = "visible";
                document.querySelector("#decend").style.visibility = "visible";
                diplayAllData(userDataBase);
            }
        });


    //data are gettin showed on table here
    document
        .querySelector("#userForm")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            console.log(collectDataOfForm());
            // if (validateFormOnSubmit() && emailExist(document.querySelector("#email").value)) {
            if (validateForm() && emailExist(document.querySelector("#email").value)) {
                let userData = new CreateUserDataObj(...collectDataOfForm());
                emailDataBase.push(userData.email)
                userDataBase.push(userData);
                createElementToDisplay(userData);
                document.querySelectorAll("input").value = "";
                // this.reset();
                originalSelectionListState();
                console.log("Form submitted successfully");
                resetData()
                this.reset();
            }
            return false;
        });

    document
        .querySelector("#resetBtn")
        .addEventListener("click", function (event) {
            document.querySelector('#email').value = ''
            clearErrors();
            resetData()
        });

    document
        .querySelector("#userForm")
        .addEventListener("keypress", function (event) {
            let keyPressed = event.keyCode || event.which
            if (keyPressed == 13) {
                event.preventDefault();
            }
        });

    //on any input change validaion
    document
        .querySelector("#email")
        .addEventListener("keydown", function (event) {
            let keyPressed = event.keyCode || event.which
            console.log(keyPressed)
            console.log(this.value)
            if (keyPressed === 13) {
                return
            }
            if (event.key == "Backspace") {
                dynamicClearError('#emailError')
                // clearErrors()
            } else {
                dynamicClearError('#emailError')
                // clearErrors()
            }
        })

    document
        .querySelector("#email")
        .addEventListener("keyup", function (event) {
            console.log(this.value)
            console.log(emailDataBase.includes(this.value))
            if (emailDataBase.includes(this.value)) {
                showError(document.querySelector("#emailError"), "Email already exist");
            } else if(this.value == ''){
                showError(document.querySelector("#emailError"), "Email is required")
            } else if(!validateEmailFormat(this.value)){
                showError(document.querySelector("#emailError"), "Invalid email format");
            }
        })
    
    document
        .querySelector("#fullName")
        .addEventListener("keyup", function (event) {
            const pattern = /[a-zA-Z ]/
            if(this.value === ''){
                showError(document.querySelector("#nameError"), "Full name is required");
            }
            else if(!pattern.test(this.value)){
                showError(document.querySelector("#nameError"), "Enter proper name");
            }
            else{
                dynamicClearError('#nameError')
            }
        }) 

    document
        .addEventListener('input', function (event) {
            let target = event.target
            if (target.id == document.querySelector('#fullName').id) {
                if (target.value.length >= 3) {
                    dynamicClearError('#nameError')
                }
            }
            if (target.id == document.querySelector('#email').id) {
                if (!emailExist(target.value)) {
                    dynamicClearError('#emailError')
                } if (target.value.trim() === '') {
                    showError(document.querySelector("#emailError"), "Email is required");
                }
            }

            if (target.type == document.querySelector('input[type="radio"]').type) {
                dynamicClearError('#genderError')
            }

            if (target.type == document.querySelector('input[type="checkbox"]').type) {
                console.log('hobby')
                dynamicClearError('#hobbyError')
            }

            console.log(target.value == document.querySelector('#country').value)
            if (target.value == document.querySelector('#country').value) {
                dynamicClearError('#countryError')
            }
            if (target.value == document.querySelector('#state').value) {
                dynamicClearError('#stateError')
            }
            if (target.value == document.querySelector('#city').value) {
                dynamicClearError('#cityError')
            }
        })
});



//************************** VALIDATION *******************************************/

function validateForm() {
    clearErrors();

    let isValid = true;
    const pattern = /[a-zA-Z ]/  
    const fullNameInput = document.querySelector("#fullName");
    const emailInput = document.querySelector("#email");
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const hobbyInput = document.querySelector('input[type="checkbox"]:checked');
    const countrySelect = document.querySelector("#country");
    const stateSelect = document.querySelector("#state");
    const citySelect = document.querySelector("#city");

    if (fullNameInput.value.trim() === "") {
        showError(document.querySelector("#nameError"), "Full name is required");
        isValid = false;
    }else if(!pattern.test(fullNameInput.value.trim()) ){
        showError(document.querySelector("#nameError"), "Enter proper name");
        isValid = false;
    }

    if (emailInput.value === "") {  
        console.log('i am true')
        showError(document.querySelector("#emailError"), "Email is required");
        isValid = false;
    } else if (!validateEmailFormat(emailInput.value.trim())) {
        showError(document.querySelector("#emailError"), "Invalid email format");
        isValid = false;
    }

    let genderChecked = false;
    if (genderInput) {
        genderChecked = true;
    }
    if (!genderChecked) {
        showError(document.querySelector("#genderError"), "Please select a gender");
        isValid = false;
    }

    let hobbyChecked = false;
    if (hobbyInput) {
        hobbyChecked = true;
    }
    if (!hobbyChecked) {
        showError(
            document.querySelector("#hobbyError"),
            "Please select at least one hobby"
        );
        isValid = false;
    }

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
    let error = document.querySelector(locator)
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
    if (emailDataBase.includes(email)) {
        showError(document.querySelector("#emailError"), "Email already exist");
        return false;
    }
    return true;
}
