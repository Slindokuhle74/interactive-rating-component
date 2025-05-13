let selectedRating = 0;
const circles = document.querySelectorAll(".circle");

function selectRating(rating) {
  selectedRating = rating;
  circles.forEach((circle, index) => {
    if (index < rating) {
      circle.style.background = "orange";
    } else {
      circle.style.background = "#9d9d9f";
    }
  });
}

function submitRating() {
  if (selectedRating > 0) {
    localStorage.setItem("rating", selectedRating);
    window.location.href = "submit.html";
  } else {
    document.getElementById("error-message").innerHTML =
      "Please select a rating";
  }
}
