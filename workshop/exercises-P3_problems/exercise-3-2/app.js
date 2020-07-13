// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

const btnList = document.querySelector("#btn-list");

for (let id = 1; id < 5; id++) {
  const button = document.getElementById(`btn-${id}`);
  button.style.opacity = "100";
  button.style.backgroundColor = "gold";
}

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
    default:
      break;
  }
};
btnList.addEventListener("click", clickHandler);
