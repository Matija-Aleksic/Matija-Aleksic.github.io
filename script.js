document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileArtistContainer = document.querySelector(".artist-container");
  const eventSchedule = document.querySelector(".event-schedule");
  const spotlight = document.querySelector(".spotlight");

  hamburgerBtn.addEventListener("click", function () {
    mobileNav.classList.toggle("open");
    if (mobileArtistContainer) {
      mobileArtistContainer.classList.toggle("close");
    }
    if (eventSchedule) {
      eventSchedule.classList.toggle("close");
    }
    if (spotlight) {
      spotlight.classList.toggle("close");
    }
  });
});
