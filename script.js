const shareButton = document.querySelector('.share-container');
const closeButton = document.querySelector('.share-container-2');
const sharePanel = document.querySelector('.active');

function toggleSharePanel() {
  if (!sharePanel) return;

  sharePanel.hidden = !sharePanel.hidden;

  if (shareButton) {
    shareButton.setAttribute('aria-expanded', sharePanel.hidden ? 'false' : 'true');
  }
}

if (shareButton && closeButton && sharePanel) {
  shareButton.addEventListener('click', toggleSharePanel);
  closeButton.addEventListener('click', toggleSharePanel);
}
