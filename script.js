document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileArtistContainer = document.querySelector(".artist-container");
  const eventSchedule = document.querySelector(".event-schedule");
  const spotlight = document.querySelector(".spotlight");
  const naslovna = document.querySelector(".naslovna");
  const video_background_container = document.querySelector(".video-background-container");
  const contact_container = document.querySelector(".contact-container");

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
    if (naslovna) {
      naslovna.classList.toggle("close");
    }
    if (video_background_container) {
      video_background_container.classList.toggle("close");
    }
    if (contact_container) {
      contact_container.classList.toggle("close");
    }
  });
});