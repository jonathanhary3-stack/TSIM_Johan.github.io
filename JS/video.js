document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.querySelector(".nav-bar");
    let lastScrollY = window.scrollY;
    let scrollThreshold = 10; 

    // --- INTERACTION CURSEUR (ORDINATEUR) ---
    // Quand la souris entre dans la barre de navigation, on bascule en mode survol fluide
    navBar.addEventListener("mouseenter", () => {
        navBar.classList.add("is-hovered");
    });

    // Quand la souris quitte la barre de navigation, on remet l'effet fixe sur la page actuelle
    navBar.addEventListener("mouseleave", () => {
        navBar.classList.remove("is-hovered");
    });


    // --- DESCENTE / COMPORTEMENT COMPLÉMENTAIRE (MOBILE) ---
    window.addEventListener("scroll", () => {
        if (window.innerWidth <= 768) {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 0) return; 

            if (currentScrollY > lastScrollY + scrollThreshold) {
                navBar.classList.add("nav-hidden");
            } 
            else if (currentScrollY < lastScrollY - scrollThreshold) {
                navBar.classList.remove("nav-hidden");
            }

            lastScrollY = currentScrollY;
        }
    });

    const navContainer = document.querySelector("nav");
    let isDown = false;
    let startX;
    let scrollLeft;

    navContainer.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - navContainer.offsetLeft;
        scrollLeft = navContainer.scrollLeft;
    });
    navContainer.addEventListener("mouseleave", () => { isDown = false; });
    navContainer.addEventListener("mouseup", () => { isDown = false; });
    navContainer.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - navContainer.offsetLeft;
        const walk = (x - startX) * 2; 
        navContainer.scrollLeft = scrollLeft - walk;
    });
});