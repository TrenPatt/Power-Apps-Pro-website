// Load header
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });

// Load footer
fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
  
const button = document.querySelector("button"); // Consultation Button

button.addEventListener("click", () => {
    alert("Thanks for your interest! Booking coming soon.");
});

document.getElementById("logoLink").addEventListener("click", function (event) { //Logo homepage button
    event.preventDefault();

    // Redirect to homepage
    window.location.href = "index.html";
});