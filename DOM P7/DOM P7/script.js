// Assignment 7
// Task 1
// let languages = document.querySelectorAll(".main__languages a");

// for (lang of languages) {
//     let text = lang.innerText;
//     let n = text.length;

//     // last three chars..
//     let last_three = text.slice(n-3, );
//     if (last_three == "2.0")
//         lang.remove();
// }

// Task 2
let input = document.querySelector(".main__form-input");
input.disabled = false;
input.value = "click on submit button";

let submit = document.querySelector(".main__form-btn");
submit.disabled = false;

// add event listener to submit..
submit.addEventListener("click", () => {
    location.reload();
});

