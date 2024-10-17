import { loadImage } from './imageLoader.js';

export async function loadGalleryAsync(imageUrls) {
  const gallery = document.getElementById('gallery');

  // Loop through each image URL
  for (const url of imageUrls) {
    const containerDiv = document.createElement('div');
    containerDiv.className = 'image-container';
    // Add container to gallery immediately (it will be empty at first)
    gallery.appendChild(containerDiv);

    try {
      // Attempt to load the image
      const result = await loadImage(url);
      // If successful, create and add the image element
      const imgElement = document.createElement('img');
      imgElement.src = result;
      imgElement.alt = `Image ${url}`;
      containerDiv.appendChild(imgElement);
    } catch (error) {
      // If image loading fails, display error message
      console.error(error);
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = 'Image not found';
      containerDiv.appendChild(errorDiv);
    }
  }
}
