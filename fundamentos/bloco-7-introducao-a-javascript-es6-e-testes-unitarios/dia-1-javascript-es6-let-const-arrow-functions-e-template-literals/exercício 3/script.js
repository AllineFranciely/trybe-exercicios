let clickCount = 0;
  let textToDisplay = document.getElementById("texto");

  document.getElementById('botao')
          .addEventListener("click", () => textToDisplay.innerHTML = clickCount += 1);
