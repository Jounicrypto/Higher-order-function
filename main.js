
//loop
let myNums = [1,2,3,4,5,6];

let newArray = [];

for (let i = 0; i < myNums.length; i++){

    newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

//Map

let addself = myNums.map(function(element, index, arr){
    
    return element + element
});

console.log(addself);

