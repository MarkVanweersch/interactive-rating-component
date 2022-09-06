window.onload = onLoad;

function onLoad() {
  // set up variables
  const labels = document.querySelectorAll(".label");
  const labelArray = [...labels]
  const radios = document.querySelectorAll("input[type=radio]");
  const allRadios = [...radios];
  const submitButton = document.querySelector("button");
  const formCard = document.querySelector(".form-card");
  const submitCard = document.querySelector(".submit-card");
  const popup = document.querySelector(".popup");

  // make ratings clickable
  for(let i in labelArray) {
    labelArray[i].addEventListener("click", selectOption);
  }

  // add function to submitbutton
  submitButton.addEventListener("click", toNextCard);

  // change look of clicked rating and check the radio button
  function selectOption(event) {
    for (let i in labelArray) {
      labelArray[i].classList.remove("selected");
    }

    let label = event.currentTarget;
    console.log(label);

    // let labelContainer = event.currentTarget.parentElement;
    // console.log(labelContainer);
    
    const radio = label.querySelector("input[type=radio]");



    /* if (label.tagName === "LABEL") {
      let parentLabel = label.parentElement;
      console.log(parentLabel);
      parentLabel.classList.add("selected");
    } */

    

    for (let i in allRadios) {
      allRadios[i].setAttribute("checked", "false");
    }

    label.classList.add("selected");
    radio.setAttribute("checked", "true");
  }

  // go to the card showing which rating was submitted
  function toNextCard() {
    const submitValue = document.querySelector("input[type=radio][checked=true]");

    if (submitValue === null) {
      popup.classList.add("visible");
    } else {
      formCard.style.display = "none";
      submitCard.style.display = "block";
      document.getElementById("submitValue").innerText = submitValue.value;
    }
  }
}