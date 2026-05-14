import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Calendar, Edit2 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { studentAPI } from '../services/api';
import { Card, StatCard } from '../components/Cards';
import { Button } from '../components/FormComponents';
import { Toast } from '../components/Toast';
import { DashboardLayout } from '../layouts/DashboardLayout';

export const StudentDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    setLoading(true);
    try {
      const response = await studentAPI.getDashboardStats();
      setStats(response.data.stats);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await studentAPI.updateProfile(formData);
      setToast({ message: 'Profile updated successfully!', type: 'success' });
      setIsEditing(false);
    } catch (error) {
      setToast({ message: error.response?.data?.message || 'Failed to update profile', type: 'error' });
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-neutral-900 mb-2">
            Welcome, {user?.name.split(' ')[0]}
          </h1>
          <p className="text-neutral-600">Manage your profile and account settings</p>
        </motion.div>

        {/* Toast */}
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-20 right-4 z-50"
          >
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast(null)}
            />
          </motion.div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatCard
            title="Account Created"
            value={new Date(stats?.accountCreated).toLocaleDateString()}
            icon={Calendar}
            color="primary"
          />
          <StatCard
            title="Role"
            value={stats?.role?.charAt(0).toUpperCase() + stats?.role?.slice(1) || 'N/A'}
            icon={User}
            color="accent"
          />
        </div>

        {/* Profile Card */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-neutral-900">Profile Information</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            {isEditing ? 'Cancel' : 'Edit'}
          </motion.button>
        </div>

        {isEditing ? (
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>

            <Button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 text-white"
            >
              Save Changes
            </Button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-neutral-50 border border-neutral-200">
              <User className="w-5 h-5 text-neutral-500" />
              <div>
                <p className="text-sm text-neutral-600">Full Name</p>
                <p className="text-neutral-900 font-semibold">{stats?.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-neutral-50 border border-neutral-200">
              <Mail className="w-5 h-5 text-neutral-500" />
              <div>
                <p className="text-sm text-neutral-600">Email Address</p>
                <p className="text-neutral-900 font-semibold">{stats?.email}</p>
              </div>
            </div>
          </div>
        )}
      </Card>
      </div>
    </DashboardLayout>
  );
};
