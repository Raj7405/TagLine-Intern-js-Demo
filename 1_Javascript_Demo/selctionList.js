

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
















