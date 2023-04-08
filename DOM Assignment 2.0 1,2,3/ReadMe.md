# Assignment 1

## Task 1
```javascript
const ul = document.querySelector('ul');

// create li element..
let li = document.createElement('li');
li.innerHTML = '<a href="#">Hire Me</a>';

// add child to ul..
ul.appendChild(li);
```
Output
![Task 1](./firstAssignmentImage/output1.png 'Task 1')

## Task 2

```javascript
const items = document.querySelectorAll("nav ul li");
items[2].innerText = "Projects";

const input = document.querySelector(".search-field input");
input.placeholder = "Search My Project";
```

Output
![Task 2](./firstAssignmentImage/output2.png 'Task 2')

## Task 3

```javascript
const items = document.querySelectorAll("nav ul li");
items[2].innerText = "Projects";

// select all spans which are inside hero-left-section > p
const spans = document.querySelectorAll(".hero-left-section p span");
spans[1].innerText = 'an Employee';
spans[2].innerText = 'iNeuron Intelligence Pvt Ltd';
```

Output
![Task 3](./firstAssignmentImage/output3.png 'Task 3')

## Task 4

```javascript
const items = document.querySelectorAll("nav ul li");
items[2].innerText = "Projects";

const image = document.querySelector('.hero-right-section img');
image.src = "./hitesh_sir.png";
```

Output
![Task 4](./firstAssignmentImage/output4.png 'Task 4')

## Task 5

```javascript
const items = document.querySelectorAll("nav ul li");
items[2].innerText = "Projects";

const new_btn = document.createElement('button');
new_btn.innerText = "Support Me";

// add new_btn to dom..
let btn_section = document.querySelector(".hero-right-section-btns");
btn_section.appendChild(new_btn);
```

Output
![Task 5](./firstAssignmentImage/output5.png 'Task 5')


