function initImageRotation() {
  const rotateBtn = document.querySelector(".rotate-btn");
  const aboutUsImage = document.getElementById("aboutUsImage");

  if (rotateBtn && aboutUsImage) {
    rotateBtn.addEventListener("click", function () {
      aboutUsImage.classList.toggle("rotated");

      const svgPath = this.querySelector("svg path");
      if (aboutUsImage.classList.contains("rotated")) {
        svgPath.setAttribute(
          "d",
          "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z",
        );
      } else {
        svgPath.setAttribute(
          "d",
          "M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z",
        );
      }
    });
  }
}

document.body.addEventListener("htmx:afterOnLoad", function (event) {
  if (
    event.detail.elt.getAttribute("data-hx-get") ===
    "index.about-us.partial.html"
  ) {
    initImageRotation();
  }
});
