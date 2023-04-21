import { useEffect } from "react";

const useEscapeKey = (callback) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Escape") {
        callback(e);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);
};

export default useEscapeKey;
