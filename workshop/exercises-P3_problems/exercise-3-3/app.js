// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.
const btnList = document.querySelector("#btn-list");

const reset = () => {
  for (let id = 1; id < 5; id++) {
    const button = document.getElementById(`btn-${id}`);
    button.style.opacity = "100";
    button.style.backgroundColor = "gold";

    if (id === 4 && button.classList.length > 0) {
      button.classList.remove("jitters");
    }
  }
};

reset();

const toggleColor = (id, color) => {
  const buttonElement = document.getElementById(id);
  const currentColor = buttonElement.style.backgroundColor;
  buttonElement.style.backgroundColor =
    currentColor === "gold" ? color : "gold";
};

const clickHandler = (event) => {
  const button = event.target.id;
  const buttonElement = document.getElementById(button);
  switch (button) {
    case "btn-1":
      buttonElement.style.opacity =
        buttonElement.style.opacity === "100" ? "0" : "100";
      break;
    case "btn-2":
      toggleColor(button, "crimson");
      break;
    case "btn-3":
      toggleColor(button, "lightblue");
      break;
    case "btn-4":
      buttonElement.classList.toggle("jitters");
      break;
    case "reset":
      reset();
      break;
    default:
      break;
  }
};
btnList.addEventListener("click", clickHandler);
