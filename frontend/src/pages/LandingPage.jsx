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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/95 border-b border-neutral-200 shadow-luxury">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">▲</span>
              </div>
              <span className="text-neutral-900 font-bold text-lg">AuthPlatform</span>
            </motion.div>

            <div className="flex gap-4">
              {isAuthenticated ? (
                <Link
                  to={user?.role === 'admin' ? '/admin/dashboard' : '/student/dashboard'}
                  className="px-6 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-6 py-2 rounded-lg text-neutral-700 hover:text-neutral-900 transition-colors font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-6 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all"
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
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              Enterprise Security Platform
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              A professional, secure authentication system built for modern learning platforms with role-based access control and real-time dashboard.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              {isAuthenticated ? (
                <Link
                  to={user?.role === 'admin' ? '/admin/dashboard' : '/student/dashboard'}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-all"
                >
                  Dashboard <ArrowRight className="w-5 h-5" />
                </Link>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-all"
                  >
                    Get Started <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold transition-all"
                  >
                    Sign In
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          >
            {[
              { label: 'Security Score', value: '99.9%' },
              { label: 'Uptime', value: '100%' },
              { label: 'Response Time', value: '<100ms' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gradient-primary rounded-2xl p-6 text-white text-center shadow-luxury"
              >
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm font-medium opacity-90">{stat.label}</p>
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
            className="text-4xl font-bold text-neutral-900 text-center mb-16"
          >
            Platform Capabilities
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
                  className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-luxury"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Highlights */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-neutral-900 text-center mb-12"
          >
            Security Features
          </motion.h2>

          <div className="space-y-4">
            {[
              'JWT-based token authentication',
              'Bcrypt password hashing',
              'Real-time session management',
              'Secure HTTP-only cookies',
              'Input validation and sanitization',
              'CORS protection and rate limiting',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-lg shadow-luxury"
              >
                <span className="text-2xl text-primary-600 font-bold">✓</span>
                <span className="text-neutral-900 text-lg font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Role System */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-neutral-900 text-center mb-16"
          >
            Role-Based Access System
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                role: 'Administrator',
                color: 'from-primary-500 to-primary-600',
                features: [
                  'Manage all users',
                  'View system analytics',
                  'Delete user accounts',
                  'Monitor statistics',
                ],
              },
              {
                role: 'Student',
                color: 'from-blue-500 to-cyan-500',
                features: [
                  'Personal dashboard',
                  'Profile management',
                  'Account settings',
                  'Data privacy control',
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 text-white shadow-luxury`}
              >
                <h3 className="text-2xl font-bold mb-6">{item.role}</h3>
                <ul className="space-y-3">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-12 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto text-center text-neutral-600">
          <p className="font-medium">
            © 2026 AuthPlatform. Developed by Naren S J.
          </p>
        </div>
      </footer>
    </div>
  );
};
