let current = 0;
const track = document.querySelector('.carousel-track');
const totalCards = track.children.length;

function goTo(n) {
  current = n;
  track.style.transform = `translateX(-${current * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) =>
    d.classList.toggle('active', i === current)
  );
}

document.querySelector('.nav-arrow.right').onclick = () => goTo((current + 1) % totalCards);
document.querySelector('.nav-arrow.left').onclick  = () => goTo((current - 1 + totalCards) % totalCards);