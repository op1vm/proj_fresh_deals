document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector(".partners__list");
  const btnNext = document.querySelector(".partners__button--next");
  const btnPrev = document.querySelector(".partners__button--prev");

  if (!list || !btnNext || !btnPrev) {
    console.warn("Карусель: елементи не знайдено");
    return;
  }

  const scrollAmount = list.offsetWidth / 2; // прокрутка на половину видимої області

  btnNext.addEventListener("click", () => {
    list.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  btnPrev.addEventListener("click", () => {
    list.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
});
