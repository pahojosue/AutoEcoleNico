// liste complete des actualites
const newslist = [
    {
    title:"nouveaux vehicules automatiques",
    Date:"2025-07-12T10:30",
    image:"voiture1.jpg",
    description:"Auto-ecole NICO enrichit sa flotte avec des voitures automatiques pour faciliter l'apprentissage des debutants.Conduite plus souple, apprentissage plus rapide! Reservez dès maintenant votre premiere leçon."
}
  {
    title:"Journee porte ouvertes",
    Date:"2025-05-10T09:30",
    image:"Oip 1.webp",
    description:"Venez decouvrir notre auto-ecole ce samedi! Visitez nos locaux et notre terrain de conduite,profitez egalement d'une reduction pour toute inscription sur place.de 09h a 15h30 entrée libre!"
}
  {
    title:"Formation numerique",
    Date:"2025-06-15T10:30",
    image:"moniteur.jpg",
    description:"Suivez des modules interactifs et preparez-vous avec notre simulateur de conduite en ligne."
}
  {
    title:"Equipe pedagogiques",
    Date:"2025-06-28T14:30",
    image:"Oip 3.webp",
    description:"Une equipe dynamique et qualifiee pour vous accompagner tout au long de votre parcours chez Auto-ecole NICO."
}
  {
    title:"Reduction pour etudiant",
    Date:"2025-07-10T14:30",
    image:"Oip 2.jpg",
    description:"Vous etes etudiant(e) ? Beneficiez de 15% de reduction sur nos packs permis B.une façon de vous accompagner a reussir votre permis sans vous ruiner"
}
  {
    title:"Stage acceléré",
    Date:"2025-06-10T14:30",
    image:"Oip 4.webp",
    description:"Obtenez votre permis en un temps record avec Auto-ecole NICO, Inscrivez-vous des maintenant!."
}
];
//REferences DOM
const container = document.querySelector("news-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const searchInput = document.getElementById("search-input");
// creer la modale
const modal = document.createElement("div");
modal.className = "modal";
modal.innerHTML = `
<div class="modal-content">
span class="close-btn" id="close-btn">&times;</span>
<h2 id="modal-title"></h2>
<p class=modal-date" id="modal-date"></p>
<p class="modal-description id="modal-description"></p>
</div>
`;
document.body.appendChild(modal);
//Etats
let currentIndex = 0;
let filteredlist = [...container.newslist]; //liste filtree pour pagination
 
// Formater la date
function formatDate(dateStr){
    const d = new Date (dateStr);
    return d.tolocaleDateString() + "à" +d:tolocatimeString([], {hour:'2-digit', minute:'2-digit'});
}
// Afficher les actualites 
function renderNews(index){
    container.innerHTML="";
    const slice = filteredlist.slice(index, index +3);
    if(slice.lenght === 0){
        container.innerHTML = "<p>Aucune actualités trouvée.</p>;
return;
    }
    slice.forEach(news =>{
        const card = document.createElement("div");
        card.className = "news-card";
        card.innerHTML =`
        <img src="${news.image}" alt="${news.title}">
        <div class="content">
        <h3>${news.title}</h3>
        <p class="date">publié le ${formatDate(news.date)}</p>
        <p>${news.description.slice(0,100)}....</p>
        <button class="read-more">lire plus </button>
        </div>
        `;
        card.querySelector(".read-more").onclick = () => showModal(news);
        container.appendChild(card);
    });
    // Activer/desactiver les boutons
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex + 3 >=filteredlist.length;
}
// Afficher la modale
function showModal(news){
    document.getElementById("modal-title").textContent = news.title;
    document.getElementById("modal-date").textContent = "publié le " + formatDate(news.Date);
    document.getElementById("modal-description").textContent = news.description;
    modal.style.display = "flex";
}
//fermer la modale
modal.querySelector("#close-btn"). onclick = () => modal.style.display ="none";
window.onclick = (e) =>{
    if (e.target === modal)modal.style.display ="none";
};
//navigation
prevBtn.onclick = () =>{
    if (currentIndex > 0){
        currentIndex--;
        renderNews(currentIndex);
    }
};
nextBtn.onclick = () => {
    if (currentIndex = 3 < filteredlist.length){
        currentIndex++;
        renderNews(currentIndex);
    }
};
//Recherche
searchInput.addEventListener("input", () =>{
    const query = searchInput.value.tolowerCase();
    filteredlist = newslist.filter(news => 
        news.title.tolowerCase().includes(query) ||
        news.description.tolowerCase().includes(query)
    );
    currentIndex = 0;
    renderNews(currentIndex);
});
// initialisation
renderNews(currentIndex);