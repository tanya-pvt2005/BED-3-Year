//client side js
//accessing a node/ DOM element
//1. using id
//2. using class
//3. using tag
//4. query selector

let el1 = document.getElementById("heading")
let el2 = document.getElementsByClassName("item")
let el3 = document.getElementsByTagName("p")
//to check element is properly accessed or not; do console.log
console.log(el1)
//className -> gives a collection; to access an individual element from this, use index
console.log(el2) 
console.log(el2[2]) 
//tagName -> gives a collection; to access an individual element from this, use index
//even if one element is there, it still gives a collection
console.log(el3)

//Query Selector
let el4 = document.querySelector("p") //tagname -> gives first element of this tag
console.log(el4)
let el5 = document.querySelector(".item") //class -> gives first element of the matching class
console.log(el5)
//to select all
let el6 = document.querySelectorAll("p") //gives a collection
console.log(el6)

//PROPERTIES
let ul = document.querySelector("#container")
let data = el4.innerText; //gets the data in the paragraph
console.log(data)
el4.innerText = "Changed using js"


let data2 = ul.innerHTML;
console.log(data2)

