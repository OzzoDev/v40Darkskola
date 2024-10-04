const rapNames = [
    "Drake Spitta",
    "Fire Flow",
    "Frostbite MC",
    "Shadow Blaze",
    "Rhyme Wing",
    "Dragon Lyricist",
    "Beast Mode Drake",
    "Scaly Bars",
    "Cloud Chaser",
    "Smoke Breath"
];

function generateDragonRapName() {
    const randomIndex = Math.floor(Math.random() * dragonRapNames.length);
    return dragonRapNames[randomIndex];
  }
  
  // Event listener for the button
  document.getElementById("generate-dragon-name-button").addEventListener("click", function() {
    const dragonRapName = generateDragonRapName();
    document.getElementById("dragon-name-display").innerText = dragonRapName;
  });