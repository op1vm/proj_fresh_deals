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

const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

document.querySelectorAll(".favorite-btn").forEach((btn) => {
  const productName = btn.dataset.name;
  if (favorites.includes(productName)) {
    btn.classList.add("favorited");
  }
  btn.addEventListener("click", () => {
    const index = favorites.indexOf(productName);
    if (index !== -1) {
      favorites.splice(index, 1);
      btn.classList.remove("favorited");
    } else {
      favorites.push(productName);
      btn.classList.add("favorited");
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  });
});

const favoriteBtn = document.querySelector(".favorite-btn");
const notification = document.getElementById("favorite-notification");

favoriteBtn.addEventListener("click", () => {
  notification.classList.add("notification--visible");

  setTimeout(() => {
    notification.classList.remove("notification--visible");
  }, 3000);
})


  





