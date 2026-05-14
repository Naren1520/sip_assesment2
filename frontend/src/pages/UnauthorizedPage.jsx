import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md"
      >
        <motion.div
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-red-300"
        >
          <AlertTriangle className="w-10 h-10 text-red-600" />
        </motion.div>

        <h1 className="text-4xl font-bold text-neutral-900 mb-2">403</h1>
        <h2 className="text-2xl font-semibold text-neutral-700 mb-4">
          Access Denied
        </h2>
        <p className="text-neutral-600 mb-8">
          You don't have permission to access this resource. Please verify your role and try again.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-all"
        >
          <Home className="w-5 h-5" />
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};
