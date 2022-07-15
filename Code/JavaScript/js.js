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

// HTML MODIFIER
const main = () => {
        const checkbox = document.getElementsById("checkbox-dark-light")
        const span = document.getElementsById("ptitle")

        checkbox.addEventListener("change" , () => {
                if  (checkbox.checked) {
                        span.innerText = "light mode";
                        return;
                }
                span.innerText = "dark mode"
        })
}

document.addEventListener("DOMContentLoaded" , () => main());