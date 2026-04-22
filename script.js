window.openMenu = () => {
    if (document.querySelector("#navigation").style.display === "none") {
        document.querySelector("#navigation").style.display = "flex";
        console.log(document.querySelector("#navigation").style.display)

        if (visualViewport.width < 665) {
            document.body.style.overflowY = "hidden";
        }
    } else {
        document.querySelector("#navigation").style.display = "none";
        document.body.style.overflowY = "initial";
    }
}


if (visualViewport.width < 665) {
    if (document.body.id === "index") {
        document.body.style.backgroundImage = 'url("fotky/mobily nastojato.jpg")';
    }
} else {
    document.querySelector("#navigation").style.display = "flex";
}

if (document.body.id === "player") {
    const film = new URL(window.location.href).searchParams.get("film");
    if (film === "anomalie") {
        document.querySelector("video").innerHTML += '<source src="https://www.dropbox.com/scl/fi/lm2svd8myhz9oat9rgm1n/anomalie-film.mp4?rlkey=a5ccci2umrkfo9mc8ffrazuzz&st=o9yhl8jo&raw=1" type="video/mp4"/>';
        document.querySelector("video").poster = "anomalie.webp";
        document.querySelector("#player-film-title").innerHTML = "Anomálie";
        document.querySelector("#player-film-link").href = "https://dafilms.cz/film/10696-anomalie"
        document.querySelector("#player-film-link").innerHTML = "K vzhlédnutí také na dafilms.cz"
    } else if (film === "arbor-vitae") {
        document.querySelector("video").innerHTML += '<source src="https://www.dropbox.com/scl/fi/nl14g5iycfoxwhi388p09/arbor-vitae.mp4?rlkey=qx7274x68plqrlfqmpvit77dk&st=6mb2mjhg&raw=1" type="video/mp4"/>';
        document.querySelector("video").poster = "arbor vitae.png";
        document.querySelector("#player-film-title").innerHTML = "Arbor Vitae";
    } else if (film === "asexualove") {
        document.querySelector("video").innerHTML += '<source src="https://drive.google.com/file/d/1Ngd7kD1NyGHF1fLFDz9azfvZz2OGKbOQ/preview';
        document.querySelector("video").poster = "asexualove.webp";
        document.querySelector("#player-film-title").innerHTML = "AsexuaLOVE";
        document.querySelector("#player-film-link").href = "https://dafilms.cz/film/10486-asexualove"
        document.querySelector("#player-film-link").innerHTML = "K vzhlédnutí také na dafilms.cz"
    } else {
        window.location.href = "https://lammelova.com/films"
    }
}


const changeToEn = () => {
    console.log("change to english")

    localStorage.setItem(`${document.body.id}CzOg`, document.body.innerHTML);
    localStorage.setItem("lang", "en");

    fetch(`${document.body.id}ENGLISH.html`)
        .then(response => response.text())
        .then(html => {document.body.innerHTML = html;}
    );


}

const changeToCz = () => {
    document.body.innerHTML = localStorage.getItem(`${document.body.id}CzOg`);
    localStorage.setItem("lang", "cz");
    document.querySelector("#navigation").style.display = "flex";
}

if (localStorage.getItem("lang") === "en") {
    changeToEn();
};
