import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-dark px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md"
      >
        <motion.div
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-20 h-20 bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-red-700"
        >
          <AlertTriangle className="w-10 h-10 text-red-400" />
        </motion.div>

        <h1 className="text-4xl font-bold text-white mb-2">403</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
          Access Denied
        </h2>
        <p className="text-gray-400 mb-8">
          You don't have permission to access this resource. Please check your role and try again.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary hover:opacity-90 text-white font-medium transition-all"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};
