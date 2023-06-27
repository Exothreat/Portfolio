{
  function openGallery(imgs) {
    let expandImg = document.getElementById("expandedImg");
    let imgText = document.getElementById("imgText");

    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }
}
