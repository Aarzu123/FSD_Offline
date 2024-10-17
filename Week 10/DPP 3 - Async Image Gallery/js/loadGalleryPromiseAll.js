import { loadImage } from './imageLoader.js';

export function loadGalleryPromiseAll(imageUrls) {
  const gallery = document.getElementById('gallery');

  // Create an array of promises, one for each image
  const imagePromises = imageUrls.map((url) => {
    return loadImage(url)
      .then((result) => {
        // If image loads successfully
        const containerDiv = document.createElement('div');
        containerDiv.className = 'image-container';
        const imgElement = document.createElement('img');
        imgElement.src = result;
        containerDiv.appendChild(imgElement);
        return containerDiv;
      })
      .catch((error) => {
        // If image fails to load
        console.error(error);
        const containerDiv = document.createElement('div');
        containerDiv.className = 'image-container';
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = 'Image not found';
        containerDiv.appendChild(errorDiv);
        return containerDiv;
      });
  });

  // Wait for all promises to resolve, then add all containers to the gallery
  Promise.all(imagePromises).then((loadedImages) => {
    loadedImages.forEach((containerDiv) => gallery.appendChild(containerDiv));
  });
}
