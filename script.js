let sr = ScrollReveal({
    duration: 2500,
    ddistance: "60px",
});

sr.reveal("#home", {delay: 400})
sr.reveal(".showcase-image", {origin:"top", delay: 400})

const navbar = document.querySelector("#navbar");

function stickyNavbar(){
    navbar.classList.toggle("scrolled", window.pageYOffset > 0);
}

window.addEventListener("scroll", stickyNavbar);