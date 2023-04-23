import { useEffect } from "react";

const useKeydown = (callback, key) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === key) {
        callback(e);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [callback, key]);
};

export default useKeydown;
