// Assginment 5

let navDivs = document.querySelectorAll("nav .nav-center div");
let btnDiv = navDivs[2];

// create new button..
let newBtn = document.createElement("a");
newBtn.href = "./index.html";
newBtn.className = "btn";
newBtn.textContent = "Pro Subscription";
newBtn.style.border = "none";

// add newBtn to btnDiv...
btnDiv.appendChild(newBtn);