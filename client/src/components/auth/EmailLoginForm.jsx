import React, { useState } from 'react';

export default function EmailLoginForm({ onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="w-80 flex flex-col gap-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-gray-400">Log in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-300">Email Address</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#a3e6d7] transition-colors"
            placeholder="you@example.com"
          />
        </div>
        
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-300">Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#a3e6d7] transition-colors"
            placeholder="••••••••"
          />
        </div>

        <button 
          type="submit"
          className="mt-4 w-full py-2 bg-[#a3e6d7] text-gray-900 font-bold rounded-md hover:bg-[#8ecebf] transition-colors"
        >
          Sign In
        </button>
      </form>

      <button 
        onClick={onBack}
        className="text-gray-400 hover:text-white transition-colors text-sm"
      >
        &larr; Back to login methods
      </button>
    </div>
  );
}
