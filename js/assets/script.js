const numbers = [0, 1, 2, 3, 4];

//foreach method
let item="</ul>";
numbers.forEach(myFunction);
item += "</ul>";
document.getElementById("array").innerHTML = item;

function myFunction(value){
    item += "<li>" + value + "</li>";
}

// length of array
document.getElementById("array-length").innerHTML = numbers.length;

// first element
document.getElementById("first").innerHTML = numbers[0];

// last element
document.getElementById("last").innerHTML = numbers[numbers.length - 1];

// to string
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("toString").innerHTML = fruits.toString();
document.getElementById("join").innerHTML = fruits.join("*");

// adding a element to last 
numbers.push(5);
numbers[numbers.length] = 6; 
document.getElementById("push").innerHTML = numbers;

// removing last element
numbers.pop();
document.getElementById("pop").innerHTML = numbers;

// removing last element
numbers.shift();
document.getElementById("shift").innerHTML = numbers;

// adding last element
numbers.unshift(0);
document.getElementById("unshift").innerHTML = numbers;

// concat arrays
let newArr = numbers.concat(fruits)
// adding element with concat
let newArr1 = newArr.concat("Kiwi")
document.getElementById("concat").innerHTML = newArr1;

// splice method
//splice(start index, elements to be deleted , new elements)
numbers.splice(2,0,10,20);
document.getElementById("splice").innerHTML = numbers;

// Slice method
let sliceArr= numbers.slice(2,6);
document.getElementById("slice").innerHTML = sliceArr;

// Sort method
document.getElementById("sort").innerHTML = fruits.sort();
// sorting numbers
// number.sort(function(a, b){return a - b});

// reverse method
fruits.sort();
document.getElementById("reverse").innerHTML = fruits.reverse();





