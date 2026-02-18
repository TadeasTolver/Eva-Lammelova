const menuBar = document.querySelector("#navigation");

window.openMenu = () => {
    if (menuBar.style.display === "none") {
        menuBar.style.display = "flex";

        if (visualViewport.width < 665) {
            document.body.style.overflowY = "hidden";
        }
    } else {
        menuBar.style.display = "none";
        document.body.style.overflowY = "initial";
    }
}

if (document.body.id === "index") {
    if (visualViewport.width < 665) {
        document.body.style.backgroundImage = 'url("mobily nastojato.jpg")';
    } else {
        menuBar.style.display = "flex";
    }
} 

if (document.body.id === "player") {
    const film = new URL(window.location.href).searchParams.get("film");
    if (film === "anomalie") {
        document.querySelector("video").innerHTML += '<source src="anomalie-film.mp4" type="video/mp4"/>';
        document.querySelector("video").poster = "anomalie.webp";
        document.querySelector("#player-film-title").innerHTML = "Anomálie";
        document.querySelector("#player-film-link").href = "https://dafilms.cz/film/10696-anomalie"
        document.querySelector("#player-film-link").innerHTML = "K vzhlédnutí také na dafilms.cz"
    } else if (film === "arbor-vitae") {
        document.querySelector("video").innerHTML += '<source src="arbor vitae.mp4" type="video/mp4"/>';
        document.querySelector("video").poster = "arbor vitae.png";
        document.querySelector("#player-film-title").innerHTML = "Arbor Vitae";
    } else {
        window.location.href = "https://lammelova.com/films"
    }
}
