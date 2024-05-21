document.addEventListener("DOMContentLoaded", () => {
    const fishButtons = document.querySelectorAll(".fish-btn");

    fishButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.stopPropagation(); // prevent triggering the background click event
            const img = button.querySelector("img");
            const text = button.querySelector(".hidden-text");
            // const rect = button.getBoundingClientRect(); // button position
            // hide fish button with an ease-out animation
            img.style.transition = "opacity 0.6s ease-out";
            img.style.opacity = "0";

            setTimeout(() => {
                img.classList.add("hidden");
                // text.style.top = `${rect.top}px`;
                // text.style.left = `${rect.left}px`;
                // shows hidden text with ease-in
                text.classList.remove("hidden");
                text.style.opacity = "1";
            }, 600);
        });
    });
});

//click on background changes background color, looped between  black & dark red//

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