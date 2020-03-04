import { useCallback, useEffect } from 'react';

export default function useIntersectionObserver(callback, elements, dependencies) {
  const savedCallback = useCallback(callback, dependencies);
  useEffect(() => {
    const observer = new IntersectionObserver(savedCallback, {threshold: [0.0, 0.1,0.2,0.3,0.4,0.5,0.6,0.7]});
    // observer.observe(elements[0]);
    console.log("CREATE INTERSECTION OBSERVER")
    console.log(elements)
    elements.forEach(element => {
      if (element.current)
        observer.observe(element.current);
    });
    return () => observer.disconnect()
  }, dependencies);
};