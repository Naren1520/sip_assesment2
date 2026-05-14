import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Lock, Users } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export const LandingPage = () => {
  const { isAuthenticated, user } = useAuth();

  const features = [
    {
      icon: Lock,
      title: 'Secure Authentication',
      description: 'Industry-standard JWT tokens and bcrypt password hashing',
    },
    {
      icon: Users,
      title: 'Role-Based Access',
      description: 'Granular permissions for Admin and Student roles',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Fast and responsive API with optimized queries',
    },
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Your data is encrypted and protected at all times',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark-900/80 border-b border-primary-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AP</span>
              </div>
              <span className="text-white font-bold text-lg">AuthPlatform</span>
            </motion.div>

            <div className="flex gap-4">
              {isAuthenticated ? (
                <Link
                  to={user?.role === 'admin' ? '/admin/dashboard' : '/student/dashboard'}
                  className="px-6 py-2 rounded-lg bg-gradient-primary hover:opacity-90 text-white font-medium transition-all"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-6 py-2 rounded-lg text-white hover:bg-dark-700 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-6 py-2 rounded-lg bg-gradient-primary hover:opacity-90 text-white font-medium transition-all"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Secure Learning Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience a modern, secure, and feature-rich authentication system with role-based access control and real-time dashboard management.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              {isAuthenticated ? (
                <Link
                  to={user?.role === 'admin' ? '/admin/dashboard' : '/student/dashboard'}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-primary hover:opacity-90 text-white font-semibold transition-all"
                >
                  Go to Dashboard <ArrowRight className="w-5 h-5" />
                </Link>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-primary hover:opacity-90 text-white font-semibold transition-all"
                  >
                    Get Started <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-primary-500 text-primary-300 hover:bg-primary-900/20 font-semibold transition-all"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-6 mb-20"
          >
            {[
              { label: 'Security Score', value: '99.9%' },
              { label: 'Uptime', value: '100%' },
              { label: 'Fast Response', value: '<100ms' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="backdrop-blur-md bg-dark-800/50 border border-primary-700/30 rounded-xl p-6 text-center"
              >
                <p className="text-3xl font-bold text-primary-400 mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Why Choose AuthPlatform?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="backdrop-blur-md bg-dark-800/50 border border-primary-700/30 rounded-xl p-8"
                >
                  <Icon className="w-12 h-12 text-primary-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Highlights */}
      <section className="py-20 px-4 bg-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Security Features
          </motion.h2>

          <div className="space-y-4">
            {[
              'JWT-based token authentication',
              'Bcrypt password hashing',
              'Real-time session management',
              ' Secure HTTP-only cookies',
              'Input validation and sanitization',
              'CORS protection and rate limiting',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 backdrop-blur-md bg-dark-800/50 border border-primary-700/30 rounded-lg"
              >
                <span className="text-2xl">{item.substring(0, 1)}</span>
                <span className="text-white text-lg">{item.substring(2)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Role System */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Role-Based System
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                role: 'Admin',
                color: 'from-primary-500 to-primary-600',
                features: [
                  'View all users',
                  'Delete/manage users',
                  'System analytics',
                  'User statistics',
                ],
              },
              {
                role: 'Student',
                color: 'from-blue-500 to-cyan-600',
                features: [
                  'Personal dashboard',
                  'Profile management',
                  'View own data',
                  'Account settings',
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br ${item.color} rounded-xl p-8 text-white`}
              >
                <h3 className="text-2xl font-bold mb-6">{item.role}</h3>
                <ul className="space-y-3">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary-700/30 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>
            © 2026 AuthPlatform.
          </p>
        </div>
      </footer>
    </div>
  );
};
