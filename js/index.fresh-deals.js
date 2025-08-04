//import { CartModal } from "./cart-modal.js";
//import { showAlert } from "./alert.js";
const tabs = document.querySelectorAll(".fresh-deals__tab");
const productGroups = document.querySelectorAll(".fresh-deals__products");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    tabs.forEach((t) => t.classList.remove("fresh-deals__tab--active"));
    tab.classList.add("fresh-deals__tab--active");

    const category = tab.dataset.category;

    productGroups.forEach((group) => {
      group.hidden = group.dataset.category !== category;
    });
  });
});
const activeTab = document.querySelector(".fresh-deals__tab--active");
const activeCategory = activeTab?.dataset.category;

productGroups.forEach((group) => {
  group.hidden = group.dataset.category !== activeCategory;
})





