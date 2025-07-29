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
let data3 = ul.innerText;
let data4 = ul.textContent;
console.log(data2)
console.log(data3)
console.log(data4)

//dynamically adding using js, here for multiple lines of string -> use a template literal
ul.innerHTML = `<li class="item">Item4</li>
        <li class="item">Item5</li>
        <li class="item">Item6</li>`

//getAttribute, setAttribute, classList
console.log(el6[0])
console.dir(el6) //in form of an object

console.dir(el5.getAttribute("id")) //null
console.log(el5.getAttribute("class"))

el5.setAttribute("id","js")
console.log(el5.getAttribute("id")) 

//classList -> to deal with classes
console.dir(el5)
console.log(el5.classList)
el5.classList.add = "delete"
console.log(el5.classList.contains("item"))
el5.classList.remove("c")
console.log(el5.classList)


//toggle button
let signup = document.querySelector(".SignUp")
let form = document.querySelector("#signup");
signup.addEventListener("click",()=>{
        form.classList.toggle("hide")
})
