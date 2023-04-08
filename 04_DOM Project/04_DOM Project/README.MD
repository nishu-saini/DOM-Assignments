# Assignment 4

```javascript
// select nodeList of all cards stats
let stats = document.querySelectorAll(".clash-card .clearfix");

// fill color in card stats..
stats[0].style.background = 'rgb(236,155,59)';
stats[1].style.background = 'rgb(238,84,135)';
stats[2].style.background = 'rgb(246,144,26)';
stats[3].style.background = 'rgb(130,187,48)';
stats[4].style.background = 'rgb(79,172,255)';

// change font color..
stats.forEach((stat) => {
    let children = stat.children;
    
    for (child of children)
        child.style.color = '#ffffff';
});
```

Output
![Task 1](./Output/output1.png 'Task 1')