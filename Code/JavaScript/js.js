// Events
console.log("Events On The Page")
console.log("")

// Click Check
document.querySelector('html').addEventListener('click', function() {
        console.warn("Clicked")
});



// Copy Check
document.querySelector('html').addEventListener('copy', function() {
        console.warn("Copied")
});