function ImageLoader() {
  const states = {};
  const promises = {};
  this.wait = (src) => {
    states[src] = states[src] || 'loading';

    if (states[src] == 'loading') {
      promises[src] = promises[src] || new Promise((resolve) => {
        const image = new Image();
        image.onload = () => {
          states[src] = "done";
          resolve();
        }
        image.src = src;
      });

      throw promises[src];
    }
  }
}

const Loader = new ImageLoader();

export default function useImagePreloader(src) {
  return Loader;
}