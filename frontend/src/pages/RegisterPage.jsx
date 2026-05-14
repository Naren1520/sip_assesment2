import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { FormInput, Button, FormContainer } from '../components/FormComponents';
import { Toast } from '../components/Toast';

export const RegisterPage = () => {
  const { register: registerUser, loading } = useAuth();
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setToast({ message: 'Passwords do not match', type: 'error' });
      return;
    }

    const result = await registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    if (result.success) {
      setToast({ message: 'Registration successful! Redirecting...', type: 'success' });
      setTimeout(() => navigate('/dashboard'), 1500);
    } else {
      setToast({ message: result.error, type: 'error' });
    }
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
        title="Create Account"
        subtitle="Join our learning platform"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          label="Full Name"
          name="name"
          placeholder="John Doe"
          register={register}
          errors={errors}
          icon={User}
          required
        />

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

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          register={register}
          errors={errors}
          icon={Lock}
          required
        />

        <Button
          type="submit"
          loading={loading}
          className="bg-gradient-primary hover:opacity-90 text-white mt-6"
        >
          Create Account
        </Button>

        <p className="text-center text-gray-400 text-sm mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-400 hover:text-primary-300 font-medium">
            Login here
          </Link>
        </p>
      </FormContainer>
    </>
  );
};
