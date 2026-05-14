import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

export const FormInput = ({
  label,
  name,
  type = 'text',
  placeholder,
  register,
  errors,
  icon: Icon,
  required = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mb-4"
    >
      <label className="block text-sm font-medium text-neutral-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <input
          type={isPassword && showPassword ? 'text' : type}
          placeholder={placeholder}
          {...register(name)}
          className={`w-full pl-10 pr-10 py-3 rounded-xl bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all ${
            errors?.[name] ? 'border-red-500' : ''
          }`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
      {errors?.[name] && (
        <p className="text-red-600 text-sm mt-1">{errors[name].message}</p>
      )}
    </motion.div>
  );
};

export const Button = ({ children, loading = false, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={loading}
      {...props}
      className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
        props.className || ''
      } disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </motion.button>
  );
};

export const FormContainer = ({ children, title, subtitle, onSubmit }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4 py-8 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-luxury">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-semibold text-neutral-900 mb-2">{title}</h1>
            <p className="text-neutral-500">{subtitle}</p>
          </motion.div>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-4">
            {children}
          </form>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-neutral-500 text-sm mt-6"
        >
          Your data is encrypted and handled securely.
        </motion.p>
      </motion.div>
    </div>
  );
};
