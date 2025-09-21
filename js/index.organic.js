import { showAlert } from "./alert.js";
import { getProductById } from "./products.js";
import { CartModal } from "./cart-modal.js";

function attachOrganicCartHandlers() {
  const organicButtons = document.querySelectorAll(".organic__button");
  organicButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const productCard = btn.closest(".organic__product");
      if (!productCard) return;
      const id = parseInt(productCard.dataset.id);
      const productData = getProductById(id);
      if (!productData) {
        showAlert("Product not found!", false);
        return;
      }
      try {
        const cart = new CartModal();
        cart.addProduct(productData);
        showAlert("Product added to cart!", true);
      } catch (error) {
        showAlert("Failed to add product to cart!", false);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", attachOrganicCartHandlers);
document.body.addEventListener("htmx:afterOnLoad", attachOrganicCartHandlers);
