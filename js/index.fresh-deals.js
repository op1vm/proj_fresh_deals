const tabs = document.querySelectorAll(".fresh-deals__tab");
const productGroups = document.querySelectorAll(".fresh-deals__products");
const indicator = document.querySelector(".fresh-deals__indicator");

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




