// Assignment 3
// select all forms
let forms = document.querySelectorAll("main form");

forms.forEach( (form) => {
    let form_children = form.children;
    // change placeholder for all inputs..
    form_children[0].placeholder = "FSJS 2.0";
    form_children[1].placeholder = "fsjs@ineuron.ai";
    form_children[2].placeholder = "Hello World";
});

