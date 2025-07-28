function attachCartEvents(cartModal) {
  const updateTotal = () => {
    let total = 0;
    cartModal.querySelectorAll('.cart-modal__product').forEach((product) => {
      const qty = parseInt(product.querySelector('.cart-modal__quantity-select')?.value || 1);
      const priceText = product.querySelector('.cart-modal__product-price')?.textContent || '0';
      const price = parseFloat(priceText.replace(',', '.'));
      total += price * qty;
    });

    const totalElement = cartModal.querySelector('.cart-modal__total strong');
    if (totalElement) {
      totalElement.textContent = total.toFixed(2).replace('.', ',') + 'USD';
    }
  };

  cartModal.querySelectorAll('.cart-modal__quantity-select').forEach((select) => {
    select.addEventListener('change', updateTotal);
  });

  cartModal.querySelectorAll('.cart-modal__remove-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.closest('.cart-modal__product')?.remove();
      updateTotal();
    });
  });

  updateTotal();
}

function initCartModal(cartModal) {
  if (!cartModal) return;

  const bsModal = bootstrap.Modal.getOrCreateInstance(cartModal);

  attachCartEvents(cartModal);

  // Закриття через кнопку ✖️
  const closeBtn = cartModal.querySelector('.btn-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => bsModal.hide());
  }

  // Сабміт форми
  const form = cartModal.querySelector('.cart-modal__form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Order placed!');
      bsModal.hide();
    });
  }
}

// Після повного завантаження
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#cartModal');
  if (modal) initCartModal(modal);
});

// Після HTMX вставки
document.body.addEventListener('htmx:afterOnLoad', (e) => {
  const modal = e.target.querySelector('#cartModal');
  if (modal) initCartModal(modal);
});

