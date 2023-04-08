# Assignment 9

## Task 1
```javascript
let heading = document.querySelector(".caption h1");
heading.style.color = "#c93d44";
```

Output
![Task 1](./images/output1.png 'Task 1')

## Task 2
```javascript
let cart_btn = document.querySelector(".add-to-cart");

// add mouseenter event listener to cart button..
cart_btn.addEventListener('mouseenter', function() {
    // change element background..
    this.style.background = "#c92d44";
});

// add mouseleave listener to cart button..
cart_btn.addEventListener('mouseleave', function() {
    // change element color back to normal..
    this.style.background = "#3c8067";
});
```

Output
![Task 2](./images/output2.png 'Task 2')