function mergeObjects(obj1, obj2) {
    let merged = { ...obj1 };
  
    for (let key in obj2) {
      if (typeof obj2[key] === 'object' && obj2[key] !== null && !Array.isArray(obj2[key])) {
        merged[key] = mergeObjects(obj1[key] || {}, obj2[key]);
      } else {
        merged[key] = obj2[key];
      }
    }
  
    return merged;
  }
  
  let obj1 = {
    a: 1,
    b: {
      c: 2,
      d: 3
    }
  };
  
  let obj2 = {
    a: 5,
    b: {
      c: 7,
      e: 8
    }
  };
  
  let mergedObject = mergeObjects(obj1, obj2);
  console.log(mergedObject);