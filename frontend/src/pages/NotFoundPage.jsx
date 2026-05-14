import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <motion.h1
          className="text-9xl font-bold text-transparent bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          404
        </motion.h1>

        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-neutral-600 mb-8">
          The page you're looking for doesn't exist. It may have been moved or removed.
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
