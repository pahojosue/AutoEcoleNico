var typePermis = "";

let menuOpen = false;
function openClose() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');

    if (menuOpen == false) {
        sidebar.style.display = "flex";
        menuOpen = true;
        hamburger.style.transform = "rotate(90deg)";
    }
    else if (menuOpen == true) {
        sidebar.style.display = "none";
        menuOpen = false;
        hamburger.style.transform = "rotate(180deg)";
    }
}

function fetchHeaderFooter() {
    fetch('header.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            document.querySelectorAll('.nav-link').forEach(link => {
                if(link.href === window.location.href) {
                    link.setAttribute('aria-current', 'page');
                }
            });

            if (!document.body.classList.contains("scroll-effect-page")) {
                var nav = document.getElementById('navbar');
                var li = nav.querySelectorAll('.nav-link');
                nav.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
                // lin.style.backgroundColor = "rgb(6, 35, 56)";
                li.forEach(el => {
                    el.style.color="black";
                });

                var hamb = document.querySelectorAll('.bar');
                hamb.forEach(el => {
                    el.style.backgroundColor = "black";
                });
            }

            document.querySelectorAll('.sidebar').forEach(link => {
                if(link.href === window.location.href) {
                    link.setAttribute('aria-current', 'page');
                }
            });
        });
    
    fetch('footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });
}

function setValue(prix, type, image) {
    sessionStorage.setItem('type', type);
    sessionStorage.setItem('prix', prix);
    sessionStorage.setItem('image', image);
}

function fetchPermis() {
    var permisType = document.getElementById('type_de_formation');
    permisType.value = sessionStorage.getItem('type');

    var prixElement = document.getElementById('prix');
    prixElement.value = sessionStorage.getItem('prix');

    var typeImage = document.getElementById('imageType');
    typeImage.src = sessionStorage.getItem('image');

    sessionStorage.clear();
}

function changePrix() {
    var prixElement = document.getElementById('prix');
    var typeElement = document.getElementById('type_de_formation');
    var typeImage = document.getElementById('imageType');
    var typeValue = typeElement.value;

    if (typeValue === "Permis Express") {
        prixElement.value = '65 000 FCFA';
        typeImage.src = 'images/permis express.jpg';
    }
    else if (typeValue === "Permis Classique") {
        prixElement.value = '230 000 FCFA';
        typeImage.src = 'images/permis classique.jpg';
    }
    else if (typeValue === "Permis Turbo") {
        prixElement.value = '280 000 FCFA';
        typeImage.src = 'images/permis turbo.JPG';
    }
    else if (typeValue === "Permis Campus") {
        prixElement.value = '170 000 FCFA';
        typeImage.src = 'images/permis campus.jpg';
    }
    else {
        prixElement.value = '';
        typeImage.src = '';
    }
}

window.addEventListener("scroll", function () {
    if (!document.body.classList.contains("scroll-effect-page")) return;
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
