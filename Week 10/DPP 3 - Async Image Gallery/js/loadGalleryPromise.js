import { loadImage } from './imageLoader.js';

export function loadGalleryPromise(imageUrls) {
  const gallery = document.getElementById('gallery');

  imageUrls.forEach((url) => {
    const containerDiv = document.createElement('div');
    containerDiv.className = 'image-container';

    loadImage(url)
      .then((result) => {
        // If image loads successfully
        const imgElement = document.createElement('img');
        imgElement.src = result;
        containerDiv.appendChild(imgElement);
      })
      .catch((error) => {
        // If image fails to load
        console.error(error);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = 'Image not found';
        containerDiv.appendChild(errorDiv);
      })
      .finally(() => {
        // Add the container to the gallery, regardless of success or failure
        gallery.appendChild(containerDiv);
      });
  });
}
