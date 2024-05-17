console.log("hello!!!");


const runawayBtn = document.getElementById("runaway-btn")
const OFFSET = 50 //how close mouse needs to be before it starts moving//

//alert pops up and index.html opens in a new tab when button is clicked//

document.addEventListener("DOMContentLoaded", () => {
    const fishButtons = document.querySelectorAll(".fish-btn");
  
    fishButtons.forEach(button => {
      button.addEventListener("click", () => {
        const img = button.querySelector("img");
        const text = button.querySelector(".reveal-text");
        
        img.classList.add("hidden");
        text.style.display = "inline"; // Or use a CSS class to handle the display
      });
    });
  });


//click on background changes background color, looped between pink & dark gray//

var box = document.querySelector("body"),
    colors = ["darkRed", "black"];

box.onclick = function () {
    color = colors.shift();
    colors.push(color);
    box.style.backgroundColor = color;
};


document.onclick = function (e) {
    let x = e.pageX;
    let y = e.pageY;

let span = document.createElement("span");
span.classList.add("click_effect");
span.style.top = y + "px";
span.style.left = x + "px";
document.body.appendChild(span);

setTimeout(() => {
    span.remove();
}, 500);
}