const shareButton = document.querySelector('.share-button');
const closeButton = document.querySelector('.share-button-2');
const sharePanel = document.querySelector('.active');

function toggleSharePanel() {
  if (!sharePanel || !shareButton) return;

  const isOpen = sharePanel.classList.toggle('show');
  shareButton.classList.toggle('share-open', isOpen);
  shareButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

if (shareButton && closeButton && sharePanel) {
  shareButton.addEventListener('click', toggleSharePanel);
  closeButton.addEventListener('click', toggleSharePanel);
}
