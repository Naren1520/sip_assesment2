import React from 'react';
import { Navbar } from '../components/Navbar';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar user={user} onLogout={handleLogout} />

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
