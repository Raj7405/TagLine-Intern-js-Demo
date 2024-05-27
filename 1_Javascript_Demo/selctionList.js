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
function findKey(obj, itemName){
    for(let key in obj){
        if(key == itemName){
            console.log(key)
            return obj[key]
        }
    }
}
function createCountrySelctionList(country){
    const countrySelection = document.querySelector('#country')
    country.forEach(country => {
        countrySelection.innerHTML += `<option value="${country}">${country}</option>`
    })
}

function createStateSelctionList(state, countryName){
    const stateSelection = document.querySelector('#state');
    stateSelection.innerHTML = '<option>Select</option>'
    const stateArr = findKey(state, countryName)
    stateArr.forEach(stateName => {
        stateSelection.innerHTML += `<option value="${stateName}">${stateName}</option>`
    })
}
function createCitySelctionList(city, stateName){
    const citySelection = document.querySelector('#city');
    citySelection.innerHTML = '<option>Select</option>'
    const cityArr = findKey(city, stateName)
    cityArr.forEach(cityName => {
        citySelection.innerHTML += `<option value="${cityName}">${cityName}</option>`
    })
}
document.addEventListener('DOMContentLoaded', function(){
    createCountrySelctionList(country)
})
document.querySelector('#country').addEventListener('change', function(event){
    createStateSelctionList(state, this.value)
})
document.querySelector('#state').addEventListener('change', function(event){
    createCitySelctionList(city, this.value)
})

















