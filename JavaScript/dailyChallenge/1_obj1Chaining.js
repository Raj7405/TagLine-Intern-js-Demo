// JavaScript this keyword refers to the current object in which it is called. Thus, when a method returns this, it simply returns an instance of the object in which it is returned. Since the returned value is an instance of an object, it is, therefore, possible to call another method of an object to the returned value, which is its instance. This makes method chaining possible in JavaScript.

const obj = {
    num: 0
}
obj.add = function(value){
    this.num += value;
    return this;
}
obj.subtract = function(value){
    this.num -= value;
    return this;
}
obj.multiply= function(value){
    this.num *= value;
    return this;
}
obj.devide =function(value){
    this.num /= value;
    return this;
}

// obj.add(29).subtract(20).multiply(30).devide(3).multiply(2).add(2)
console.log(obj.add(29).subtract(20).multiply(30).devide(3).multiply(2).add(2))
console.log(obj.num)

