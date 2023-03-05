const ratingForm = document.getElementById("form");
const ratingNumber = document.querySelector("span");
const ratingCard = document.querySelector(".rating_state_container");
const thankCard = document.querySelector(".thank_you_state_container");
const rateNumber = document.querySelectorAll(".rate");

function ratingValue() {
  for (let i = 0; i < rateNumber.length; i++) {
    const element = rateNumber[i];
    if (element.checked) {
      ratingNumber.innerText = element.value;
    }
  }
}
console.log(ratingCard);
ratingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  thankCard.classList.remove("display");
  ratingCard.classList.add("display");
  ratingValue();
});
