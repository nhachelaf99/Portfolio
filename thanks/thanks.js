//Paralax
document.body.addEventListener("mousemove", parallax);
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
let darkState = localStorage.getItem("dark")

function darkMode() {
    let darkState = localStorage.getItem("dark")
    if (darkState == 0) {
        body.classList.remove("dark-mode")
    }
    if (darkState == undefined) {
        body.classList.remove("dark-mode")
    }
    if (darkState == 1) {
        body.classList.add("dark-mode")
    }
}

darkMode()
