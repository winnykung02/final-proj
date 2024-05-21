// //click on background changes text color, looped between pink & dark gray//
// // box.onclick = function () {
// //     document.getElementById("textColor").style.color,
// //     colors = ["pink", "rgb(30, 30, 35)"];
// // box.onclick = function changeFontColor() {
// //     if (color == "pink") { // if bg color is pink change it to gray otherwise change it to pink.
// //         box.style.color = "rgb(30, 30, 35)";
// //      } else {
// //         box.style.color = "pink";

// //     box.style.textDecorationColor = textColor;}


let circles;
let spots;
let img;
let canCreateCircles = true; // controls creation of circles
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // start the animation when element is visible
            loop();
            // stop observing
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

// observe the canvas container
observer.observe(document.querySelector('.canvas-container'));

function preload() {
    img = loadImage("media/2050.png");
}

function setup() {
    let canvas = createCanvas(900, 400);
    canvas.parent('the-canvas');
    img.loadPixels();
    spots = [];
    circles = [];
    for (let x = 0; x < img.width; x++) {
        for (let y = 0; y < img.height; y++) {
            let index = x + y * img.width;
            let c = img.pixels[index * 4];
            let b = brightness([c]);
            if (b > 1) {
                spots.push(createVector(x, y));
            }
        }
    }
    noLoop(); // Ensure drawing is paused initially
}

setTimeout(() => {
    canCreateCircles = false;
}, 12000);

function draw() {
    background(0);

    let total = 5;
    let count = 0;
    let attempts = 0;

    while (count < total && canCreateCircles) {
        let newC = newCircle();
        if (newC !== null) {
            circles.push(newC);
            count++;
        }
        attempts++;
        if (attempts > 500) {
            noLoop();
            break;
        }
    }

    for (let i = 0; i < circles.length; i++) {
        let circl = circles[i];

        if (circl.growing) {
            if (circl.edges()) {
                circl.growing = false;
            } else {
                for (let j = 0; j < circles.length; j++) {
                    let other = circles[j];
                    if (circl !== other) {
                        var d = dist(circl.x, circl.y, other.x, other.y);
                        var distance = circl.r + other.r;

                        if (d - 1 < distance) {
                            circl.growing = false;
                            break;
                        }
                    }
                }
            }
        }

        circl.show();
        circl.grow();
    }
}

function newCircle() {
    var r = int(random(0, spots.length));
    var spot = spots[r];
    var x = spot.x;
    var y = spot.y;

    var valid = true;
    for (var i = 0; i < circles.length; i++) {
        var circle = circles[i];
        var d = dist(x, y, circle.x, circle.y);
        if (d < circle.r) {
            valid = false;
            break;
        }
    }
    if (valid) {
        return new Circle(x, y);
    } else {
        return null;
    }
}

class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 1;
        this.growing = true;
    }

    grow() {
        if (this.growing) {
            this.r += 1;
        }
    }

    edges() {
        return (this.x + this.r > width || this.x - this.r < 0 || this.y + this.r > height || this.y - this.r < 0);
    }

    show() {
        stroke(255);
        strokeWeight(1);
        noFill();
        ellipse(this.x, this.y, this.r * 2);
    }
}