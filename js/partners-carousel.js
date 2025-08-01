document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector(".partners__list");
  const btnNext = document.querySelector(".partners__button--next");
  const btnPrev = document.querySelector(".partners__button--prev");

  const scrollAmount = 200;

  if (!list || !btnNext || !btnPrev) {
    console.warn("Елементи каруселі не знайдені");
    return;
  }

  btnNext.addEventListener("click", () => {
    list.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  btnPrev.addEventListener("click", () => {
    list.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
});