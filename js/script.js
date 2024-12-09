const navbar = document.getElementById('scroll-nav');

navbar.style.display = "none";
window.onscroll = () => {
  if (window.scrollY >= 600) {
    navbar.style.width = "100%";
    navbar.style.backgroundColor = "#FEFAE0";
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.boxShadow = "0 0 10px black";
    navbar.style.display = "block";
    navbar.style.zIndex = 5;
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.position = "relative";
    navbar.style.display = "none";
  }
}


var typed = new Typed(".typing-text", {
  strings: ["Java Full-Stack Development", "Frontend Development", "Backend Development", "Web Designing", "Web Development"],
  loop: true,
  typeSpeed: 40,
  backSpeed: 25,
  backDelay: 500,
});