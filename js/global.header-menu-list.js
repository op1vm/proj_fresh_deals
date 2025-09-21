const menuLinks = [
  { href: "#about", label: "About Us" },
  { href: "#shop", label: "Shop" },
  { href: "#deals", label: "Best Deals" },
  { href: "#app", label: "App" },
  { href: "#contacts", label: "Contacts" },
];

const menuContainer = document.querySelector(".header__menu");

menuContainer.innerHTML = menuLinks
  .map(
    (link) => `
  <li class="header__menu-item">
    <a class="header__menu-link" href="${link.href}">${link.label}</a>
  </li>
`
  )
  .join("");
