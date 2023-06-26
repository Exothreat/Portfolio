{
  const overlayHide = document.querySelector(".overlay__hide");
  const menuButton = document.getElementById("js-menu-button");
  const exit = document.getElementById("js-menu-exit");

  menuButton.addEventListener("click", () => {
    overlayHide.classList.add("overlay");
  });

  exit.addEventListener("click", () => {
    overlayHide.classList.remove("overlay");
  });
}
