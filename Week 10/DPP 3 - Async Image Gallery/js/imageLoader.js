// Simulated async image loading function
export function loadImage(url) {
  return new Promise((resolve, reject) => {
    // Simulate network delay (between 0 to 2 seconds)
    const delay = Math.random() * 2000;

    setTimeout(() => {
      const img = new Image();
      // If image loads successfully, resolve the promise
      img.onload = () => resolve(url);
      // If image fails to load, reject the promise
      img.onerror = () => reject(new Error(`Failed to load: ${url}`));
      // Start loading the image
      img.src = url;
    }, delay);
  });
}
