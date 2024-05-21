document.getElementById("myImage").addEventListener("click", function () {
    // Add the hide class to trigger the transition
    this.classList.add("hide");

    // Remove the image from the DOM after the transition
    setTimeout(() => {
        this.remove();
    }, 500); // Adjust the delay to match the transition duration
});

