import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, UserCheck, UserX, Search, Trash2, Activity } from 'lucide-react';
import { adminAPI } from '../services/api';
import { Card, StatCard, SkeletonLoader } from '../components/Cards';

export const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    adminCount: 0,
    studentCount: 0,
  });

  useEffect(() => {
    fetchUsers();
  }, [search]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await adminAPI.getAllUsers({ search });
      setUsers(response.data.data.users);
      setStats(response.data.data.statistics);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await adminAPI.deleteUser(userId);
        setUsers(users.filter((u) => u._id !== userId));
      } catch (error) {
        console.error('Failed to delete user:', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">Admin Dashboard</h1>
        <p className="text-neutral-600">Manage users and system statistics</p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Users"
          value={stats.totalUsers}
          icon={Users}
          color="primary"
        />
        <StatCard
          title="Administrators"
          value={stats.adminCount}
          icon={UserCheck}
          color="accent"
        />
        <StatCard
          title="Students"
          value={stats.studentCount}
          icon={UserX}
          color="green"
        />
      </div>

      {/* User Management */}
      <Card>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-neutral-900 mb-4">User Management</h2>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-neutral-50 border border-neutral-300 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-primary-500 transition-colors"
            />
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">Email</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">Role</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">Status</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">Joined</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="px-4 py-3">
                    <SkeletonLoader />
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-4 py-3 text-center text-neutral-500">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user, index) => (
                  <motion.tr
                    key={user._id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors"
                  >
                    <td className="px-4 py-3 text-neutral-900 font-medium">{user.name}</td>
                    <td className="px-4 py-3 text-neutral-600">{user.email}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          user.role === 'admin'
                            ? 'bg-primary-100 text-primary-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-medium ${
                          user.isActive ? 'text-green-700' : 'text-red-700'
                        }`}
                      >
                        <Activity className="w-4 h-4" />
                        {user.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-neutral-600 text-sm">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDeleteUser(user._id)}
                        className="text-red-600 hover:text-red-700 transition-colors font-medium"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
