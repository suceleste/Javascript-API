

const APICovid = "https://coronavirusapifr.herokuapp.com/data/live/france";

fetch(APICovid).then(response => response.json().then(data => {
    let dico = data[0];
    let divt = document.getElementById("Covid-19");
    divt.innerHTML = '<h2>Information Covid-19(France - '+dico.date+' ) :</h2>';
    divt.innerHTML += '<p> Nombre de cas : '+dico.conf+'</p>';
    divt.innerHTML += '<p> Personnes hospitalisé : '+dico.hosp+"</p>";
    divt.innerHTML += '<p> Personnes décédé à cause du Covid : '+dico.dc_tot+'</p>'
}));

const url = "https://api.nasa.gov/planetary/apod?api_key=iho1zSHviwkrk0SPFeoOCiUrBvmUZ6AfVB3HGpHE";

fetch(url).then(response => response.json().then(data => {
    let divt = document.getElementById("Nasa");
    let img = document.createElement("img");
    let titre = document.createElement("h3");
    let text = document.createElement("p");
    divt.appendChild(titre);
    divt.appendChild(img);
    divt.appendChild(text);
    titre.innerHTML = data.title + " _ " + data.date;
    img.src = data.url;
    img.className = "nasaImg";
    text.innerHTML = data.explanation;
    text.className = "nasaText";
    console.log(data.url);

}));