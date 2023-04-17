import React, { useState } from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const createToast = (message, variant) => {
    const newToast = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];
    setToasts(newToast);
  };

  const dismissToast = (id) => {
    const newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  };

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
