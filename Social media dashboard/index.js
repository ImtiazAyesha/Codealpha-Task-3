const toggler = document.getElementById("toggle_circle");
const togglebg = document.getElementById("toggle");
const body = document.body;

togglebg.addEventListener("click", function() {
    console.log("clicked");
    if (body.classList.contains("dark")) {
        console.log("clicked dark");
        body.classList.replace("dark", "light");
        toggler.style.transform = "translateX(20px)";
    } else {
        console.log("clicked light");
        body.classList.replace("light", "dark");
        toggler.style.transform = "translateX(0)";
    }
});