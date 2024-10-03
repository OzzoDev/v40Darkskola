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

document.getElementById('generateNameButton').addEventListener('click', () => {
    const randomName = rapNames[Math.floor(Math.random() * rapNames.length)];
    document.getElementById('dragonNameDisplay').textContent = `Rap Name: ${randomName}`;
});