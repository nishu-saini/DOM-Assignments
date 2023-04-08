# Assignment 8

## Task 1
```javascript
let aside = document.querySelector("aside");
aside.style.height = "auto";

// create elements..
let hr = document.createElement("hr");
hr.className = "hr-line";

let new_h2 = document.createElement("h2");
new_h2.className = "new-head";
new_h2.textContent = "This is my custom heading";

let new_p = document.querySelector("p");
new_p.className = "new-p";
new_p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt et iusto quod nostrum cupiditate corrupti.";

// append new element to aside..
aside.appendChild(hr);
aside.appendChild(new_h2);
aside.appendChild(new_p);
```
Output
![Task 1](./images/output1.png 'Task 1')

## Task 2
```javascript
document.body.style.background = 'none';
```
Output
![Task 2](./images/output2.png 'Task 2')

## Task 3
```javascript
// get the navbar toggler button..
let navbarToggler = document.querySelector(".navbar-toggler");

// get the collapse elements..
let navbarCollapse = document.querySelector(".navbar-collapse");

// add click event listener to the navbar toggler button.
navbarToggler.addEventListener('click', function() {
    // Toggle the 'show' class on the collapse element..
    navbarCollapse.classList.toggle('show');

});
```
Output
![Task 3](./images/output2.png 'Task 3')