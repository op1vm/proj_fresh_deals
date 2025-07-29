const tabs = document.querySelectorAll(".fresh-deals__tab");
const productGroups = document.querySelectorAll(".fresh-deals__products");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    tabs.forEach((t) => t.classList.remove("fresh-deals__tab--active"));
    tab.classList.add("fresh-deals__tab--active");
    const category = tab.dataset.category;
    
    productGroups.forEach((group) => {
      if (group.dataset.category === category) {
        group.hidden = false;
      } else {
        group.hidden = true;
      }
    });
  });
});



