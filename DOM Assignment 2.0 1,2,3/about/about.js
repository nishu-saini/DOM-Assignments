// Assignment 2
/*
// Task 1
let all_para = document.querySelectorAll(".accordian p");
document.body.onload = () => {
  all_para[2].style.display = "block";
  all_para[3].style.display = "block";
}
*/

/*
// Task 2
let accordian_wrapper = document.querySelector(".accordian-wrapper");
let div = document.createElement("div");
div.className = "accordian";

let h3 = document.createElement("h3");
h3.innerHTML = "Skills";

let p = document.createElement("p");
p.innerHTML = "I posses a very good command over the full Stack Development technologies like MERN which can be seen in my work over the GitHub";

// append h3 and p inside div..
div.appendChild(h3);
div.appendChild(p);

// add div inside wrapper
accordian_wrapper.appendChild(div);
p.style.display = "block";
*/

// ------------------------------------------------------------------------------------
// Initial code
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

