getName = (person) => person.name;
getUpperCase = (string) => string.toUpperCase()
getSelectedPart = (string) => string.slice(0, string.length - 2)
getReverseStr = (string)  => string.split('').reverse().join('')

//without using pipe method
console.log(getReverseStr(getSelectedPart(getUpperCase(getName({name : 'Rajendra'})))))

//A pipe is a form of redirection that is used to send the output of one program to another program for further processing.

const pipe = (...func) => {

}
pipe(
    getName,
    getUpperCase,
    getSelectedPart,
    getReverseStr,
)({name : 'vijay'})