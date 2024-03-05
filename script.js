 //document.getElementById("count-el").innerText = 5

 //let count = 5




// camelCase
let countEl = document.getElementById("count-el")
let tahaEl = document.getElementById("taha")

console.log(countEl)
console.log(tahaEl)

let count = parseInt(localStorage.getItem("taha")) || 0; // Retrieve count from localStorage

document.getElementById("count-el").innerText= parseInt(localStorage.getItem("taha"))

function increment() {
count = count + 1
countEl.innerText = count
console.log("count")
localStorage.setItem("taha", count); // Update localStorage
}







function decrement() {
count = count - 1
countEl.innerText = count
console.log("count")
localStorage.setItem("taha", count); // Update localStorage
}



function save() {
  tahaEl.textContent +=  count +" - "
  
}
// Google: 
// innertext alternative mdn
// textContent 

function zero() {
  count=0
  document.getElementById("count-el").innerText= count
}
