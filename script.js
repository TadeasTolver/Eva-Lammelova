const hideNav = () => {
    document.querySelector("#navigation").style.display = "none";
    document.body.style.position = "static";
}

window.openMenu = () => {
    if (document.querySelector("#navigation").style.display === "none") {
        document.querySelector("#navigation").style.display = "flex";

        if (document.body.id != "index" && visualViewport.width < 665) {
            document.body.style.position = "fixed"; // !
        }

    } else {
        hideNav();
    }
}


if (visualViewport.width < 665) {
    if (document.body.id === "index") {
        document.body.style.backgroundImage = 'url("fotky/mobily nastojato.jpg")';
    }
}

if (document.body.id === "player") {
    const film = new URL(window.location.href).searchParams.get("film");
    if (film === "anomalie") {
        document.querySelector("video").innerHTML += '<source src="https://pub-1726f15402af4e268e3702d6c499f570.r2.dev/anomalie-film.mp4"/>';
        document.querySelector("video").poster = "anomalie.webp";
        document.querySelector("#player-film-title").innerHTML = "Anomálie";
        document.querySelector("#player-film-link").href = "https://dafilms.cz/film/10696-anomalie";
        document.querySelector("#player-film-link").innerHTML = "K vzhlédnutí také na dafilms.cz";
    } else if (film === "arbor-vitae") {
        document.querySelector("video").innerHTML += '<source src="https://pub-1726f15402af4e268e3702d6c499f570.r2.dev/arbor-vitae.mp4" type="video/mp4"/>';
        document.querySelector("video").poster = "arbor vitae.png";
        document.querySelector("#player-film-title").innerHTML = "Arbor Vitae";
    } else if (film === "asexualove") {
        document.body.innerHTML =  `
        <iframe src="https://drive.google.com/file/d/1Ngd7kD1NyGHF1fLFDz9azfvZz2OGKbOQ/preview" width="640" height="400" allow="autoplay"></iframe>
        <br><br>
        <h4 id="player-film-title">AsexuaLOVE</h4>
        <a id="player-film-link" href="https://dafilms.cz/film/10486-asexualove">K vzhlédnutí také na dafilms.cz</a>
        `
    } else if (film === "v-atelieru") {
        document.querySelector("video").innerHTML += '<source src="https://pub-1726f15402af4e268e3702d6c499f570.r2.dev/v%20atelieru.mp4" type="video/mp4"/>';
        document.querySelector("#player-film-title").innerHTML = "V ateliéru";
    }
    else {
        window.location.href = "https://lammelova.com/films";
    }
}


const changeToEn = () => {

    localStorage.setItem(`${document.body.id}CzOg`, document.body.innerHTML);
    localStorage.setItem("lang", "en");

    fetch(`${document.body.id}ENGLISH.html`)
        .then(response => response.text())
        .then(html => {document.body.innerHTML = html 
        hideNav();
        }
    );
}

const changeToCz = () => {

    document.body.innerHTML = localStorage.getItem(`${document.body.id}CzOg`);
    localStorage.setItem("lang", "cz");
    hideNav();
}

if (localStorage.getItem("lang") === "en") {
    changeToEn(); 
};

hideNav();
