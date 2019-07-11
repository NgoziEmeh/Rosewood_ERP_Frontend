// Google Map
function initMap() {
    // Your location
    const loc = { lat: 6.446860, lng: 3.530710 };

    // DOM manipulation
    const map = new google.maps.Map(document.querySelector('.map'),
        {
            zoom: 14,
            center: loc
        });

    const marker = new google.maps.Marker({
        position: loc, map: map
    });
}
// Nav hamburger

const hamburger = document.querySelector(".hamburger");
const navigationLinks = document.querySelector(".links");
const singleLink = document.querySelectorAll(".links li");

hamburger.addEventListener('click', () => {
    navigationLinks.classList.toggle("open");
    singleLink.forEach(link => {
        link.classList.toggle("fade");
    });
});