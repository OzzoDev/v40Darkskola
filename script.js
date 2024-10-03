document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    card.querySelector(".card-back").style.display = "block"; // Show the back
    card.querySelector("p").style.display = "none"; // Hide the front text
    button.style.display = "none"; // Hide the "Read More" button
  });
});

document.querySelectorAll(".read-less").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    card.querySelector(".card-back").style.display = "none"; // Hide the back
    card.querySelector("p").style.display = "block"; // Show the front text
    card.querySelector(".read-more").style.display = "block"; // Show the button again
  });
});
