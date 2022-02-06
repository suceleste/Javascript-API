
// constante avec l'url de l'api
const APICovid = "https://coronavirusapifr.herokuapp.com/data/live/france";
//utilisation de fetch() sur l'api suivi de then() pour convertir le tout en .jso et aller cherche les data se trouvant dedans
fetch(APICovid).then(response => response.json().then(data => {
    //récupération de chaque donné et implémentation dans le html
    let dico = data[0];
    let divt = document.getElementById("Covid-19");
    divt.innerHTML = '<h2>Information Covid-19(France - '+dico.date+' ) :</h2>';
    divt.innerHTML += '<p> Nombre de cas : '+dico.conf+'</p>';
    divt.innerHTML += '<p> Personnes hospitalisé : '+dico.hosp+"</p>";
    divt.innerHTML += '<p> Personnes décédé à cause du Covid : '+dico.dc_tot+'</p>'
}));

// constante avec l'url de l'api
const url = "https://api.nasa.gov/planetary/apod?api_key=iho1zSHviwkrk0SPFeoOCiUrBvmUZ6AfVB3HGpHE";
//utilisation de fetch() sur l'api suivi de then() pour convertir le tout en .jso et aller cherche les data se trouvant dedans
fetch(url).then(response => response.json().then(data => {
    //récupération de chaque donné et implémentation dans le html
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
    //affichage du dictionaire se trouvant le .json dans la console
    console.log(data);

}));
