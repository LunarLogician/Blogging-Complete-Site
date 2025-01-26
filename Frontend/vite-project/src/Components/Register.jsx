import React, { useState } from 'react';
import { Coins } from 'lucide-react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!username.trim()) {
      setError('Username is required');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || 'Failed to register');
      }

      window.location.href = '/login';
    } catch (err) {
      setError(err.message || 'Unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#213555] flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-[#3E5879] p-8 rounded-xl border border-[#3E5879]">
        <div className="flex flex-col items-center">
          <Coins className="h-12 w-12 text-[#D8C4B6]" />
          <h2 className="mt-6 text-3xl font-bold text-[#D8C4B6]">Create Account</h2>
          <p className="mt-2 text-[#F5EFE7]">Join SigCoin and start mining today</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-[#F5EFE7]">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full bg-[#3E5879] border border-[#3E5879] rounded-md shadow-sm py-2 px-3 text-[#F5EFE7] focus:outline-none focus:ring-2 focus:ring-[#D8C4B6] focus:border-[#D8C4B6]"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#F5EFE7]">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full bg-[#3E5879] border border-[#3E5879] rounded-md shadow-sm py-2 px-3 text-[#F5EFE7] focus:outline-none focus:ring-2 focus:ring-[#D8C4B6] focus:border-[#D8C4B6]"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#F5EFE7]">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full bg-[#3E5879] border border-[#3E5879] rounded-md shadow-sm py-2 px-3 text-[#F5EFE7] focus:outline-none focus:ring-2 focus:ring-[#D8C4B6] focus:border-[#D8C4B6]"
              />
            </div>
          </div>

          <button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full bg-[#D8C4B6] text-[#213555] py-2 rounded-md shadow-sm hover:bg-[#3E5879] hover:text-[#F5EFE7]"
            isLoading={isLoading}
            disabled={isLoading} // Prevent clicking during the loading state
          >
            Create Account
          </button>

          <p className="text-center text-[#F5EFE7]">
            Already have an account?{' '}
            <a href="/login" className="text-[#D8C4B6] hover:text-[#F5EFE7]">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
