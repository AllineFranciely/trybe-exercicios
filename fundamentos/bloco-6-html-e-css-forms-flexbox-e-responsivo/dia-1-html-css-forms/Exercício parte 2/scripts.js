const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function preservaLink(event) {
    event.preventDefault();
}
HREF_LINK.addEventListener("click", preservaLink);

function preservaCheckbox(event) {
    event.preventDefault();
}
INPUT_CHECKBOX.addEventListener("click", preservaCheckBox);

function previneTexto(event) {
    const character = event.key;
    if (character !== 'a') {
      event.preventDefault();
    }
  });
  INPUT_TEXT.addEventListener('keypress', previneTexto);