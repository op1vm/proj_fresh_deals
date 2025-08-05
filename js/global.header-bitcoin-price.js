const priceEl = document.getElementById("price");

async function fetchBitcoinPrice() {
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    const price = data.bitcoin.usd;

    priceEl.textContent = `$${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  } catch (error) {
    console.error('Error fetching Bitcoin price:', error);
    priceEl.textContent = 'Failed to load Bitcoin price 😢';
  }
}

fetchBitcoinPrice();

setInterval(fetchBitcoinPrice, 60000);
