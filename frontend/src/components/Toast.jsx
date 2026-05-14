import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, X } from 'lucide-react';

export const Toast = ({ message, type = 'success', onClose }) => {
  const bgColor =
    type === 'success'
      ? 'bg-green-50 border-green-300 text-green-800'
      : type === 'error'
      ? 'bg-red-50 border-red-300 text-red-800'
      : 'bg-blue-50 border-blue-300 text-blue-800';

  const icon =
    type === 'success' ? (
      <CheckCircle className="w-5 h-5 text-green-600" />
    ) : (
      <AlertCircle className="w-5 h-5 text-red-600" />
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex items-center gap-3 p-4 rounded-lg border ${bgColor} shadow-luxury`}
    >
      {icon}
      <span className="flex-1 font-medium">{message}</span>
      <button
        onClick={onClose}
        className="text-neutral-400 hover:text-neutral-600 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};
