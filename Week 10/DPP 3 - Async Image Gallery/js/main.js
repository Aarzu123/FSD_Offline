import { loadGalleryPromise } from './loadGalleryPromise.js';
import { loadGalleryPromiseAll } from './loadGalleryPromiseAll.js';
import { loadGalleryAsync } from './loadGalleryAsync.js';

// Array of image URLs to be loaded. Only the first 5 images will load successfully. The rest will fail. This is to test the error handling.
const imageUrls = [
  'img/img1.jpg',
  'img/img2.jpg',
  'img/img3.jpg',
  'img/img4.jpg',
  'img/img5.jpg',
  'img/img6.jpg',
  'img/img7.jpg',
  'img/img8.jpg',
  'img/img9.jpg',
  'img/img10.jpg',
];

// Uncomment the version you want to use

loadGalleryPromise(imageUrls); // Uses individual promises
//loadGalleryPromiseAll(imageUrls); // Uses Promise.all
//loadGalleryAsync(imageUrls); // Uses async/await
