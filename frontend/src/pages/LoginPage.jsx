import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { FormInput, Button, FormContainer } from '../components/FormComponents';
import { Toast } from '../components/Toast';

export const LoginPage = () => {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const result = await login(data);

    if (result.success) {
      setToast({ message: 'Login successful! Redirecting...', type: 'success' });
      setTimeout(() => {
        if (result.user.role === 'admin') {
          navigate('/admin/dashboard');
        } else {
          navigate('/student/dashboard');
        }
      }, 1500);
    } else {
      setToast({ message: result.error, type: 'error' });
    }
  };

  // Sample credentials for testing
  const fillAdminCredentials = () => {
    document.querySelector('input[name="email"]').value = 'admin@platform.com';
    document.querySelector('input[name="password"]').value = 'admin123';
  };

  const fillStudentCredentials = () => {
    document.querySelector('input[name="email"]').value = 'student@platform.com';
    document.querySelector('input[name="password"]').value = 'student123';
  };

  return (
    <>
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

      <FormContainer
        title="Welcome Back"
        subtitle="Sign in to access your account securely"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="you@example.com"
          register={register}
          errors={errors}
          icon={Mail}
          required
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
          register={register}
          errors={errors}
          icon={Lock}
          required
        />

        <Button
          type="submit"
          loading={loading}
          className="bg-primary-600 hover:bg-primary-700 text-white font-semibold mt-6"
        >
          Sign In
        </Button>

        <p className="text-center text-neutral-600 text-sm mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary-600 hover:text-primary-700 font-semibold">
            Create one now
          </Link>
        </p>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
          <p className="text-neutral-700 text-xs font-semibold mb-3 flex items-center gap-2">
            <User className="w-4 h-4" /> Test Credentials
          </p>
          <div className="space-y-2">
            <button
              type="button"
              onClick={fillAdminCredentials}
              className="w-full text-left text-xs py-2 px-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-900 font-medium transition-colors"
            >
              Admin: admin@platform.com / admin123
            </button>
            <button
              type="button"
              onClick={fillStudentCredentials}
              className="w-full text-left text-xs py-2 px-3 bg-emerald-50 hover:bg-emerald-100 rounded-lg text-emerald-900 font-medium transition-colors"
            >
              Student: student@platform.com / student123
            </button>
          </div>
        </div>
      </FormContainer>
    </>
  );
};
