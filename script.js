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