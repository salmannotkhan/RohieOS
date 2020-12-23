const darkBtn = document.querySelector("nav > img")
const navLinks = document.querySelector("nav > .nav-links")

function darkMode() {
    status = document.querySelector("body").classList.toggle("dark")
    localStorage.setItem("darkmode", status)
    if (status == "true") {
        darkBtn.src = "./moon-icon.webp"
        return status
    }
    darkBtn.src = "./sun-icon.webp"
    return status
}

if (localStorage.getItem('darkmode') == "true") {
    darkMode()
}

function toggleNav() {
    navLinks.classList.toggle('activated')
}