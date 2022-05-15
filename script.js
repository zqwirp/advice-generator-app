document.addEventListener("DOMContentLoaded", () => {
  const diceBtnElement = document.getElementById("dice-btn");

  diceBtnElement.addEventListener("click", async event => {
    event.target.disabled = true;

    const adviceElement = document.getElementById("advice");
    const adviceIdElement = document.getElementById("advice-id");
    adviceElement.innerText = null;

    const loader = adviceElement.nextElementSibling;
    loader.style.display = "block";

    const slipId = Math.floor(Math.random() * (100 - 1)) + 1;
    const data = await fetch("https://api.adviceslip.com/advice/" + slipId)
      .then(res => res.json())
      .then(res => {
        return {
          id: res.slip.id,
          advice: res.slip.advice,
        };
      });

    const textAdvice = document.createElement("q");
    textAdvice.innerText = data.advice;
    adviceIdElement.innerText = data.id;
    adviceElement.appendChild(textAdvice);
    loader.style.display = "none";

    setTimeout(() => {
      event.target.disabled = false;
    }, 5000);
  });
});
