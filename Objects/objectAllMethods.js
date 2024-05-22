Object.assign(target, source) //will assign only object properties to target object
Object.create(ProtoypeObj, PropertiesToDefine) //will assign prototype of source object to target and can define properties as well
Object.keys(objName) // return all enumerable keys
Object.values(objName) // return all enumerable values
Object.entries(objName) // return all enumerable key:value pair
Object.freeze(objName)  // it will freeze object, prevent from any change or addition or detelation of prop and prototype can not reassign
Object.seal(objName)  // work as freeze but it will allow changing in existing props


Object.defineProperty(objName, "propName", {value : value})   //can defien new properties and change existing prop like (writable:true) 
Object.defineProperties(objName,{ propName: { value : value}}) //can define multiple properties
Object.getOwnPropertyDescriptor(objName, propName) //will get property's discription
Object.getOwnPropertyDescriptors(objName) //will get all properties discription
Object.getOwnPropertyNames(objName)  //will return all property name in array form

Object.getPrototypeOf(objName)  //(obj1 === obj1)
Object.setPrototypeOf(objName, objNameOfPrototype) // !!
objName.isPrototypeOf(objName_for_search)  //check if prototype exist in chain

Object.hasOwn(objName, 'propName')  //it will not check for inherited properties
objName.hasOwnProperty(propName)    // it will check for inherited prop as well
//it only return true for object original properies, if any property are inherited or added usin prototype it will return false for it

Object.is(value1, value2)   //work like compaireson opretor
Object.isExtensible(objName)  //check wether we can add new properties in object
Object.preventExtensions(objName)  //prevent from adding new prop
Object.isFrozen(objName)  //check wether object is freezed
Object.isSealed(objName)  //check wether object is sealed or not