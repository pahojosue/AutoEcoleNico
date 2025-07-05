let menuOpen = false;
function openClose() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (menuOpen == false) {
        navLinks.style.display = "flex";
        menuOpen = true;
        hamburger.style.transform = "rotate(90deg)";
    }
    else if (menuOpen == true) {
        navLinks.style.display = "none";
        menuOpen = false;
        hamburger.style.transform = "rotate(180deg)";
    }
}

function openService() {

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
        });
    
    fetch('footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });
}

function fetchFooter() {

}