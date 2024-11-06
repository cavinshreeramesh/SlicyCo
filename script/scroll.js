// window.addEventListener("scroll", updateProgressBar);

// function updateProgressBar() {
//  // Calculate the scroll percentage
// const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
// const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// const scrollPercentage = (scrollTop / scrollHeight) * 100;

// // Update the width of the progress bar
// document.getElementById("progress-bar").style.width = scrollPercentage + "%";
// }

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", updateProgressBar);

    function updateProgressBar() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        document.getElementById("progress-bar").style.width = scrollPercentage + "%";
    }
});