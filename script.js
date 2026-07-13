const shareButton = document.querySelector('.share-container');
const closeButton = document.querySelector('.share-container-2');
const sharePanel = document.querySelector('.active');

function toggleSharePanel() {
  if (!sharePanel) return;

 sharePanel.classList.toggle('show');
 if (shareButton) {
 const isOpen = sharePanel.classList.contains('show');
 shareButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
 }
  console.log('clicked');
}

if (shareButton && closeButton && sharePanel) {
  shareButton.addEventListener('click', toggleSharePanel);
  closeButton.addEventListener('click', toggleSharePanel);
}
