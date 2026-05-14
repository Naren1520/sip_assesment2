import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = '', hoverable = false }) => {
  return (
    <motion.div
      whileHover={hoverable ? { y: -4 } : {}}
      className={`bg-white border border-neutral-200 rounded-3xl p-6 shadow-luxury ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const StatCard = ({ title, value, subtitle, icon: Icon, color = 'primary' }) => {
  const colorClasses = {
    primary: 'from-primary-100 to-primary-200',
    accent: 'from-accent-100 to-accent-200',
    green: 'from-emerald-100 to-emerald-200',
    blue: 'from-sky-100 to-sky-200',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-gradient-to-br ${colorClasses[color]} rounded-3xl p-6 text-neutral-900 shadow-luxury`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-neutral-500 text-sm font-medium mb-2">{title}</p>
          <h3 className="text-3xl font-semibold">{value}</h3>
          {subtitle && <p className="text-neutral-600 text-sm mt-1">{subtitle}</p>}
        </div>
        {Icon && (
          <div className="bg-white rounded-2xl p-3 shadow-sm">
            <Icon className="w-6 h-6 text-neutral-700" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export const SkeletonLoader = () => {
  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="bg-neutral-200 rounded-2xl h-16 w-full"
    />
  );
};
