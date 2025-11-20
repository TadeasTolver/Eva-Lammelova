const menuBar = document.querySelector("#navigation");

window.openMenu = () => {
    if (menuBar.style.opacity === "0") {
        menuBar.style.opacity = "1";
    } else {
        menuBar.style.opacity = "0";
    }
}

if (document.body.id === "index") {
    if (visualViewport.width < 665) {

        document.body.style.backgroundImage = 'url("evaainka nastojato.jpg")';
    }
} 