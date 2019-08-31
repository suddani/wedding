import {useLayoutEffect, useCallback} from 'react';
export default function useOnScroll(callback, deps) {
  // debugger
  const onScroll = useCallback(callback, deps)
  useLayoutEffect(() => {
    console.log("Register")
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);
}