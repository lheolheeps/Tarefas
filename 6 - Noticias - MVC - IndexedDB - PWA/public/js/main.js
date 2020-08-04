window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('service-worker.js');
    }
}

document.getElementById('menu').addEventListener("click", () => {
    let header = document.getElementById('header');
    if (header.style.height === "auto") {
        header.removeAttribute("style");
    } else {
        header.style.height = "auto";
    }
});

const app = new App();
app.run();

let menus = document.getElementsByClassName('href');
for (let index = 0; index < menus.length; index++) {
    menus[index].addEventListener("click", () => {
        // TO-DO resolver XGH
        setTimeout(() => {
            app.run();
        }, 100);
    });
}