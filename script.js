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
const darkBtnWhite = document.getElementById("dark-btn-white")
let darkState = localStorage.getItem("dark")

darkBtnGray.addEventListener("click", darkMode)
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

if (darkState == 1) {
    body.classList.add("dark-mode")
}

if (darkState == 0) {
    body.classList.remove("dark-mode")
}

//Project Description
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
