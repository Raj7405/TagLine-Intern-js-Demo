const arr =  ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const obj = arr.reduce((acc, currItem)=>{
    if(acc[currItem]){
        acc[currItem] = acc[currItem] + 1;
    }
    else{
        acc[currItem] = 1
    }
    return acc
},{})

console.log(obj)

{
    function groupByObj(obj){
        return obj.reduce((acc, curr) => {
            if(!acc[curr.age]){
                acc[curr.age] = []
            }
            acc[curr.age].push(curr)
    
            return acc
        },{})
    }
    const people = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 25 },
        { name: 'Dave', age: 30 }
      ];
      
      console.log(groupByObj(people))
}