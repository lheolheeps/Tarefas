document.getElementById('menu').addEventListener("click", () => {
    let header = document.getElementById('header');
    if (header.style.height === "auto") {
        header.removeAttribute("style");
    } else {
        header.style.height = "auto";
    }
});