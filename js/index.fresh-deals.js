const tabs = document.querySelectorAll(".fresh-deals__tab");
const productGroups = document.querySelectorAll(".fresh-deals__products");
const indicator = document.querySelector(".fresh-deals__indicator");

function moveIndicator(tab) {
  const tabRect = tab.getBoundingClientRect();
  const parentRect = tab.parentElement.getBoundingClientRect();

  indicator.style.width = `${tabRect.width}px`;
  indicator.style.left = `${tabRect.left - parentRect.left}px`;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    tabs.forEach((t) => t.classList.remove("fresh-deals__tab--active"));
    tab.classList.add("fresh-deals__tab--active");

    const category = tab.dataset.category;

    productGroups.forEach((group) => {
      group.hidden = group.dataset.category !== category;
    });

    moveIndicator(tab);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const activeTab = document.querySelector(".fresh-deals__tab--active");
  moveIndicator(activeTab);
})



