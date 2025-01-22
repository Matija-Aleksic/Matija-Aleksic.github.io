document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileArtistContainer = document.querySelector(".artist-container");

    hamburgerBtn.addEventListener("click", function () {
        mobileNav.classList.toggle("open");
        if (mobileArtistContainer) {
            mobileArtistContainer.classList.toggle("close");
        }
    });
});