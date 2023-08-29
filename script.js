//Paralax
const intro = document.getElementById("intro-container")
intro.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".par-img").forEach(function(move){
        let movie_value = move.getAttribute("data-value")
        let x = (e.clientX * movie_value) / 150;
        let y = (e.clientY * movie_value) / 150;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)  rotate("+ x +"deg)"
    })
}

//DarkMode
const body = document.body
const darkBtnGray = document.getElementById("dark-btn-gray")
let darkState = localStorage.getItem("dark")
const darkEnvelope = document.getElementById("envelope-black")
const whiteEnvelope = document.getElementById("envelope-white")


darkBtnGray.addEventListener("click", () => {
    darkMode();
    envelopeContrast();
})
function darkMode() {
    body.classList.toggle("dark-mode")
    let darkState = localStorage.getItem("dark")
    if (darkState == 0) {
        localStorage.setItem("dark", 1)
    }
    if (darkState == undefined) {
        localStorage.setItem("dark", 1)
    }
    if (darkState == 1) {
        localStorage.setItem("dark", 0)
    }
}

function envelopeContrast() {
    let darkState = localStorage.getItem("dark")
    if (darkState == 1) {
        darkEnvelope.classList.add("active")
        whiteEnvelope.classList.remove("active")
    }

    if (darkState == 0) {
        whiteEnvelope.classList.add("active")
        darkEnvelope.classList.remove("active")
    }

    if (darkState == undefined) {
        whiteEnvelope.classList.add("active")
        darkEnvelope.classList.remove("active")
    }
}

envelopeContrast()

if (darkState == 1) {
    body.classList.add("dark-mode")
}

if (darkState == 0) {
    body.classList.remove("dark-mode")
}



//Project Description
const projectDesc5 = document.getElementById("project-desc5")
const Project5 = document.getElementById("project5")
const projectImg5 = document.getElementById("project-img5")

Project5.addEventListener("mouseover", ProjectOverlay5);
    function ProjectOverlay5() {
    projectDesc4.classList.add("active")
    projectImg4.classList.add("active")
}

Project5.addEventListener("mouseout", ProjectUnhover5)
function ProjectUnhover5() {
    projectDesc5.classList.remove("active")
    projectImg5.classList.remove("active")
}

const projectDesc4 = document.getElementById("project-desc4")
const Project4 = document.getElementById("project4")
const projectImg4 = document.getElementById("project-img4")

Project4.addEventListener("mouseover", ProjectOverlay4);
    function ProjectOverlay4() {
    projectDesc4.classList.add("active")
    projectImg4.classList.add("active")
}

Project4.addEventListener("mouseout", ProjectUnhover4)
function ProjectUnhover4() {
    projectDesc4.classList.remove("active")
    projectImg4.classList.remove("active")
}

const projectDesc1 = document.getElementById("project-desc1")
const Project1 = document.getElementById("project1")
const projectImg1 = document.getElementById("project-img1")

Project1.addEventListener("mouseover", ProjectOverlay1);
    function ProjectOverlay1() {
    projectDesc1.classList.add("active")
    projectImg1.classList.add("active")
}

Project1.addEventListener("mouseout", ProjectUnhover1)
function ProjectUnhover1() {
    projectDesc1.classList.remove("active")
    projectImg1.classList.remove("active")
}

const projectDesc2 = document.getElementById("project-desc2")
const Project2 = document.getElementById("project2")
const projectImg2 = document.getElementById("project-img2")

Project2.addEventListener("mouseover", ProjectOverlay2);
    function ProjectOverlay2() {
    projectDesc2.classList.add("active")
    projectImg2.classList.add("active")
}

Project2.addEventListener("mouseout", ProjectUnhover2)
function ProjectUnhover2() {
    projectDesc2.classList.remove("active")
    projectImg2.classList.remove("active")
}


//Form Opener
const formOpener1 = document.getElementById("form-opener1")
const formOpener2 = document.getElementById("form-opener2")
const formOpener3 = document.getElementById("form-opener3")
const formOpener4 = document.getElementById("form-opener4")
const formOpener5 = document.getElementById("form-opener5")
const aboutContainer = document.getElementById("about-container")
const aboutMe = document.getElementById("about-me")
const aboutForm = document.getElementById("about-form")
const xbar = document.getElementById("xbar")
const parallaxContainer = document.getElementById("parallax-container")
const navbar = document.getElementById("navbar")
const footer = document.getElementById("footer")
const projects = document.getElementById("projects")

formOpener1.addEventListener("click", toggleForm)
function toggleForm() {
    aboutContainer.classList.toggle("active")
    aboutForm.classList.toggle("active")
    aboutMe.classList.toggle("active")
    xbar.classList.toggle("active")
    parallaxContainer.classList.toggle("active")
    navbar.classList.toggle("active")
    footer.classList.toggle("active")
    projects.classList.toggle("active")
    intro.classList.toggle("active")
    body.classList.toggle("active")
}

formOpener2.addEventListener("click", openForm)
formOpener3.addEventListener("click", openForm)
formOpener4.addEventListener("click", openForm)
formOpener5.addEventListener("click", openForm)
function openForm() {
    aboutContainer.classList.add("active")
    aboutForm.classList.add("active")
    aboutMe.classList.add("active")
    xbar.classList.add("active")
    parallaxContainer.classList.add("active")
    navbar.classList.add("active")
    footer.classList.add("active")
    projects.classList.add("active")
    intro.classList.add("active")
    body.classList.add("active")
}


projects.addEventListener("click", closeForm)
xbar.addEventListener("click", closeForm)
function closeForm() {
    aboutContainer.classList.remove("active")
    aboutForm.classList.remove("active")
    aboutMe.classList.remove("active")
    xbar.classList.remove("active")
    parallaxContainer.classList.remove("active")
    navbar.classList.remove("active")
    footer.classList.remove("active")
    projects.classList.remove("active")
    intro.classList.remove("active")
    body.classList.remove("active")
}


//Form Sender



