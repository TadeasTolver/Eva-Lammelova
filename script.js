const menuBar = document.querySelector("#navigation");

window.openMenu = () => {
    if (menuBar.style.opacity === "0") {
        menuBar.style.opacity = "1";

        if (visualViewport.width < 665) {
            document.body.style.overflowY = "hidden";
        }
    } else {
        menuBar.style.opacity = "0";
        document.body.style.overflowY = "initial";
    }
}

if (document.body.id === "index") {
    if (visualViewport.width < 665) {
        document.body.style.backgroundImage = 'url("mobily nastojato.jpg")';
    } else {
        menuBar.style.opacity = "1";
    }
} 
