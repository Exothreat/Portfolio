{
  const overlayHide = document.querySelector(".overlay__hide");
  const menuButton = document.getElementById("js-menu-button");
  const exit = document.getElementById("js-menu-exit");
  const body = document.querySelector(".body");

  menuButton.addEventListener("click", () => {
    overlayHide.classList.add("overlay");
    body.style = "overflow: hidden;";
  });

  exit.addEventListener("click", () => {
    overlayHide.classList.remove("overlay");
    body.style = "none";
  });

  overlayHide.addEventListener("click", () => {
    overlayHide.classList.remove("overlay");
    body.style = "none";
  });
}
