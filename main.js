let openWindow = document.querySelectorAll(".open-window");
let popupWindow = document.querySelectorAll(".window");
let close = document.querySelectorAll(".close");

for (let i = 0; i < openWindow.length; i++) {
    openWindow[i].onclick = function () {
        popupWindow[i].style.display = "block";
    }
    close[i].onclick = function () {
        popupWindow[i].style.display = "none";
    }
    popupWindow[i].onclick = function (e) {
        if (e.target === popupWindow[i]) {
            popupWindow[i].style.display = "none";
        }
    }
}

let mainBar = document.querySelector(".mainBar");

window.addEventListener('resize', function () {
    if (window.innerWidth <= 880) {
        mainBar.style.display = 'none';
    } else if (window.innerWidth > 880) {
        mainBar.style.display = 'inline-block';
    }
});

let menuButton = document.querySelector("a i[class='fa fa-bars']");

menuButton.onclick = function () {
    let menu = document.querySelector(".hamburger");
    let background = document.getElementById("headerBackground");
    if (menu.style.display === 'none' && window.innerWidth <= 880) {
        menu.style.display = 'block';
        background.style.marginTop = '16.25rem';
        background.style.height = 'calc(100vh - 16.25rem)';
    } else {
        menu.style.display = 'none';
        background.style.marginTop = '3.25rem';
        background.style.height = 'calc(100vh - 3.25rem)';
    }
}