'use client';
import { useState } from 'react';
import { useAuth } from '../../context/auth.context';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to login');
    }
  };

  return (
    <main className="hero" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="hero-bg-grid"></div>
      <div className="glass-card" style={{ padding: '40px', width: '100%', maxWidth: '400px', position: 'relative', zIndex: 10 }}>
        <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '8px' }}>Welcome <span className="gradient-text">Back</span></h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Sign in to manage your Qantara account.</p>
        
        {error && <p style={{ color: '#ef4444', marginBottom: '16px', fontSize: '0.875rem' }}>{error}</p>}
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Email Address</label>
            <input 
              type="email" 
              className="cta-input" 
              placeholder="name@company.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Password</label>
            <input 
              type="password" 
              className="cta-input" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              style={{ width: '100%' }}
            />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
            Sign In
          </button>
        </form>
        
        <p style={{ marginTop: '24px', textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          Don't have an account? <Link href="/register" className="gradient-text" style={{ fontWeight: '600' }}>Create one</Link>
        </p>
      </div>
    </main>
  );
}
