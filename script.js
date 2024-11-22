function opennavipanel() {
    document.getElementById('toggler').classList.toggle('clicked');
    document.getElementById('mobMenu').classList.toggle('activate');
}

const carCards = document.querySelectorAll(".car-card");
carCards.forEach((card) => {
    card.addEventListener("click", () => {
        window.location.href = "https://siranjeev-iqtm.github.io/cars-app/cardetails.html";
    });
});
