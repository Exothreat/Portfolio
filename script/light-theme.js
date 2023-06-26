{
  const body = document.querySelector(".body");
  const buttonTheme = document.getElementById("js-light-mode");
  const exo = document.getElementById("exo");
  const buttonMenu = document.getElementById("js-menu-button");
  const overlay = document.querySelector(".overlay__hide");
  let light = localStorage.getItem("light-mode");

  const lightModeEnable = () => {
    localStorage.setItem("light-mode", "enabled");
    buttonTheme.src = "images/moon-icon.png";
    body.classList.add("lightMode");
    exo.classList.add("exo--light");
    overlay.classList.add("overlay__light");
    buttonMenu.src = "images/menu-icon-black.png";
  };

  const lightModeDisable = () => {
    localStorage.setItem("light-mode", "disabled");
    buttonTheme.src = "images/sun-icon.png";
    body.classList.remove("lightMode");
    exo.classList.remove("exo--light");
    buttonMenu.src = "images/menu-icon.png";
  };

  if (light === "enabled") {
    lightModeEnable();
  }

  buttonTheme.addEventListener("click", () => {
    light = localStorage.getItem("light-mode");

    if (light === "disabled") {
      lightModeEnable();
    } else {
      lightModeDisable();
    }
  });
}
