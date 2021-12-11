import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<any>({
    width: undefined,
  })

  useEffect(() => {
    const resizeFunc = () => {
      setWindowSize({width: window.innerWidth})
    }
    window.addEventListener('resize', resizeFunc);
    resizeFunc();

    return () => window.removeEventListener('resize', resizeFunc);
  }, [])

  return windowSize
} 

export default useWindowSize;