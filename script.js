const rapNames = [
    "Drake Spitta",
    "Fire Flow",
    "Frostbite MC",
    "Shadow Blaze",
    "Rhyme Wing",
    "Dragon Lyricist",
    "Dragon Bars",
    "Scaly Bars",
    "Lil Ice",
    "Busta Breath"
];

function generateDragonRapName() {
    const randomIndex = Math.floor(Math.random() * rapNames.length); // Corrected variable name
    return rapNames[randomIndex]; // Use rapNames instead of dragonRapNames
}

// Event listener for the button
document.getElementById("generate-dragon-name-button").addEventListener("click", function() {
    const dragonRapName = generateDragonRapName();
    document.getElementById("dragon-name-display").innerText = dragonRapName;
});