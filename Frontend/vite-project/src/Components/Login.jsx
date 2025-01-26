import React, { useState } from 'react';
import { Coins } from 'lucide-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include', // Ensures cookies are sent and received
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      const token = data.key1;
      localStorage.setItem('Token', token);

      // Redirect user after successful login
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#213555] flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-[#3E5879] p-8 rounded-xl border border-[#D8C4B6] shadow-lg">
        <div className="flex flex-col items-center">
          <Coins className="h-12 w-12 text-[#D8C4B6]" />
          <h2 className="mt-6 text-3xl font-bold text-[#F5EFE7]">Welcome Back</h2>
          <p className="mt-2 text-[#F5EFE7]">Sign in to your SigCoin account</p>
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
                className="mt-1 block w-full bg-[#3E5879] border border-[#D8C4B6] rounded-md py-2 px-3 text-[#F5EFE7] placeholder-[#D8C4B6] focus:outline-none focus:ring-2 focus:ring-[#D8C4B6]"
                placeholder="Enter your username"
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
                className="mt-1 block w-full bg-[#3E5879] border border-[#D8C4B6] rounded-md py-2 px-3 text-[#F5EFE7] placeholder-[#D8C4B6] focus:outline-none focus:ring-2 focus:ring-[#D8C4B6]"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 bg-[#3E5879] border-[#D8C4B6] rounded text-[#D8C4B6] focus:ring-[#D8C4B6]"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-[#F5EFE7]">
                Remember me
              </label>
            </div>

            <a href="#" className="text-sm text-[#D8C4B6] hover:text-[#F5EFE7]">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#D8C4B6] text-[#213555] py-2 px-4 rounded-md shadow-md hover:bg-[#F5EFE7] focus:outline-none focus:ring-2 focus:ring-[#213555] disabled:opacity-50"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>

          <p className="text-center text-[#F5EFE7]">
            Don't have an account?{' '}
            <a href="/register" className="text-[#D8C4B6] hover:text-[#F5EFE7]">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
