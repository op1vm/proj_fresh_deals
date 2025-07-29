function updateOurAppClock() {
  const clock = document.getElementById('our-app-clock');
  if (!clock) return;
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  clock.textContent = `${h}:${m}:${s}`;
}

setInterval(updateOurAppClock, 1000);
document.addEventListener('DOMContentLoaded', updateOurAppClock);

