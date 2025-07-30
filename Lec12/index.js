let btn = document.querySelector('#btn')
let box = document.querySelector(".box");

let colors = ["blue", "green", "pink", "red", "purple", "gray", "yellow", "orange", "cyan", "lavender"]

btn.onclick = () =>{
    let idx = Math.floor(Math.random()*10);
    box.style.backgroundColor = colors[idx];
}