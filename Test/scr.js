
// const countriesData = [
//     { name: 'Country 1', states: [{ name: 'State 1', cities: ['City 1', 'City 2'] }, { name: 'State 2', cities: ['City 3', 'City 4'] }] },
//     { name: 'Country 2', states: [{ name: 'State 3', cities: ['City 5', 'City 6'] }, { name: 'State 4', cities: ['City 7', 'City 8'] }] }
// ];

// function populateCountries() {
//     const countryDropdown = document.getElementById('country');
//     countriesData.forEach(country => {
//         const option = document.createElement('option');
//         option.value = country.name;
//         option.text = country.name;
//         countryDropdown.appendChild(option);
//     });
// }


// function populateStates(selectedCountry) {
//     const stateDropdown = document.getElementById('state');
//     stateDropdown.innerHTML = '<option value="">Select State</option>';
//     const selectedCountryData = countriesData.find(country => country.name === selectedCountry);
//     if (selectedCountryData) {
//         selectedCountryData.states.forEach(state => {
//             const option = document.createElement('option');
//             option.value = state.name;
//             option.text = state.name;
//             stateDropdown.appendChild(option);
//         });
//     }
// }


// function populateCities(selectedState) {
//     const cityDropdown = document.getElementById('city');
//     cityDropdown.innerHTML = '<option value="">Select City</option>';
//     const selectedCountryData = countriesData.find(country => country.name === document.getElementById('country').value);
//     if (selectedCountryData) {
//         const selectedStateData = selectedCountryData.states.find(state => state.name === selectedState);
//         if (selectedStateData) {
//             selectedStateData.cities.forEach(city => {
//                 const option = document.createElement('option');
//                 option.value = city;
//                 option.text = city;
//                 cityDropdown.appendChild(option);
//             });
//         }
//     }
// }

// function createStateSelctionList(state, countryName){
//     const stateSelection = document.querySelector('#state');
//     stateSelection.innerHTML = '<option>Select</option>'
//     const stateArr = findKey(state, countryName)
//     stateArr.forEach(stateName => {
//         stateSelection.innerHTML += `<option value="${stateName}">${stateName}</option>`
//     })
// }
// function createCitySelctionList(city, stateName){
//     const citySelection = document.querySelector('#city');
//     citySelection.innerHTML = '<option>Select</option>'
//     const cityArr = findKey(city, stateName)
//     cityArr.forEach(cityName => {
//         citySelection.innerHTML += `<option value="${cityName}">${cityName}</option>`
//     })
// }



function editRow(element) {
    let currRow = element.parentNode.parentNode;
    document.querySelector('#fullName').value = currRow.cells[0].textContent;
    document.querySelector('#email').value = currRow.cells[1].textContent;
    document.querySelector(`input[value="${currRow.cells[2].textContent}"]`).checked = true;

    // Handling hobbies
    currRow.cells[3].textContent.split(',').forEach(item => {
        document.querySelector(`input[value="${item}"]`).checked = true;
    });

    // Reflecting country, state, and city selections
    document.querySelector('#country').value = currRow.cells[4].textContent;
    creatSelctionList(state, currRow.cells[4].textContent, 'state');
    document.querySelector('#state').value = currRow.cells[5].textContent;
    creatSelctionList(city, currRow.cells[5].textContent, 'city');
    document.querySelector('#city').value = currRow.cells[6].textContent;

    console.log("Edit initiated", element.parentNode.parentNode);
}






//************************************************* */

document
.querySelector("#userForm")
.addEventListener("change", function (event) {
    let target = event.target
    console.log(target)
    if(target.id == fullNameInput.id){
        console.log([target.id, fullNameInput.id]   )
        if (fullNameInput.value.trim() === "") {
            showError(document.querySelector("#nameError"), "Full name is required");
            isValid = false;
        }
    }
    if(target.id == emailInput.id){
        console.log([target.id, emailInput.id])
        if (emailInput.value.trim() === "") {
            showError(document.querySelector("#emailError"), "Email is required");
            isValid = false;
        } else if (!validateEmailFormat(emailInput.value.trim())) {
            showError(document.querySelector("#emailError"), "Invalid email format");
            isValid = false;
        } 
        // else {
        //     isValid = emailExist(email);
        // }
    }
    if(target.id == genderInput.id){
        console.log([target.id, genderInput.id])
        let genderChecked = false;
        if (genderInput) {
            genderChecked = true;
        }
        if (!genderChecked) {
            showError(
                document.querySelector("#genderError"), 
                "Please select a gender"
            );
            isValid = false;
        }
    }
    if(target.id == hobbyChecked.id){
        console.log([target.id, hobbyChecked.id])
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
    }
    if(target.id == countrySelect.id){
        console.log([target.id, countrySelect.id])
        if (countrySelect.value === "Select") {
            showError(
                document.querySelector("#countryError"),
                "Please select a country"
            );
            isValid = false;
        }
    }
    if(target.id == stateSelect.id){
        console.log([target.id, stateSelect.id])
        if (stateSelect.value === "Select") {
            showError(
                document.querySelector("#stateError"),
                 "Please select a state"
            );
            isValid = false;
        }
    }
    if(target.id == citySelect.id){
        console.log([target.id, citySelect.id])
        if (citySelect.value === "Select") {
            showError(
                document.querySelector("#cityError"), 
                "Please select a city"
            );
            isValid = false;
        }
    }
   
});
return isValid;



///


function emailExist(email) {
    if (emailDataBase.includes(email)) {
        showError(document.querySelector("#emailError"), "email already exist");
        return false;
    } else {
        emailDataBase.push(email);
        return true;
    }
}

/////extra validation

function validRadio(){
    clearErrors();
    let isValid = true
    const genderInput = document.querySelector('input[name="gender"]:checked');
    let genderChecked = false;
    if (genderInput) {
        genderChecked = true;
    }
    if (!genderChecked) {
        showError(document.querySelector("#genderError"), "Please select a gender");
        isValid = false;
    }

    return isValid
}
function validCheckbox(){
    clearErrors();
    let isValid = true
    const hobbyInput = document.querySelector('input[type="checkbox"]:checked');
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
    return isValid
}
function validSelection(){
    clearErrors();
    let isValid = true
    const countrySelect = document.querySelector("#country");
    const stateSelect = document.querySelector("#state");
    const citySelect = document.querySelector("#city");
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
    return isValid
}

///

function validNoneTextInput(){
        clearErrors();
        const genderInput = document.querySelector('input[name="gender"]:checked');
        const hobbyInput = document.querySelector('input[type="checkbox"]:checked');
        const countrySelect = document.querySelector("#country");
        const stateSelect = document.querySelector("#state");
        const citySelect = document.querySelector("#city");
        let genderChecked = false;
        if (genderInput) {
            genderChecked = true;
        }
        if (!genderChecked) {
            showError(document.querySelector("#genderError"), "Please select a gender");
            return false;
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
            return false;
        }

        if (countrySelect.value === "Select") {
            showError(
                document.querySelector("#countryError"),
                "Please select a country"
            );
            return false;
        }

        if (stateSelect.value === "Select") {
            showError(document.querySelector("#stateError"), "Please select a state");
            return false;
        }

        if (citySelect.value === "Select") {
            showError(document.querySelector("#cityError"), "Please select a city");
            return false;
        }

    return true;
}