// Lijst van afbeeldingen en bijbehorende mp3-bestanden
const images = [
    { src: "images/kat.png", audio: "sounds/Kat.mp3" },
    { src: "images/hond.png", audio: "sounds/Hond.mp3" },
    { src: "images/vis.png", audio: "sounds/Vis.mp3" },
    { src: "images/vogel.png", audio: "sounds/Vogel.mp3" },
    { src: "images/zombie.webp", audio: "sounds/Zombie.mp3" },
    { src: "images/fee.webp", audio: "sounds/Fee.mp3" },
    { src: "images/vampier.png", audio: "sounds/Vampier.mp3" },
    { src: "images/mens.webp", audio: "sounds/Mens.mp3" },
    { src: "images/oog.png", audio: "sounds/Oog.mp3" },
    { src: "images/voet.webp", audio: "sounds/Voet.mp3" },
    { src: "images/neus.png", audio: "sounds/Neus.mp3" },
    { src: "images/maan.png", audio: "sounds/Maan.mp3" },
    { src: "images/ster.webp", audio: "sounds/Ster.mp3" },
    { src: "images/aarde.png", audio: "sounds/Aarde.mp3" },
    { src: "images/vuur.png", audio: "sounds/Vuur.mp3" },
    { src: "images/sneeuwpop.png", audio: "sounds/Sneeuwpop.mp3" },
    { src: "images/zon.png", audio: "sounds/Zon.mp3" },
    { src: "images/boom.webp", audio: "sounds/Boom.mp3" },
    { src: "images/auto.png", audio: "sounds/Auto.mp3" },
    { src: "images/vliegtuig.webp", audio: "sounds/Vliegtuig.mp3" }
];

// Het grid-element ophalen
const grid = document.getElementById("imageGrid");

// Afbeeldingen toevoegen en klik-events koppelen
images.forEach(item => {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = "Klik om te horen";

    img.addEventListener("click", () => {
        const audio = new Audio(item.audio);
        audio.play();
    });

    grid.appendChild(img);
});

