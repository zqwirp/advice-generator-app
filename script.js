document.addEventListener("DOMContentLoaded", () => {
  const diceBtnElement = document.getElementById("dice-btn");

  diceBtnElement.addEventListener("click", event => {
    event.target.disabled = true;
    const timeOutCounter = setInterval(() => {

    }, 1000)
    setTimeout(() => {
      event.target.disabled = false;
    }, 10000);
  });
});
