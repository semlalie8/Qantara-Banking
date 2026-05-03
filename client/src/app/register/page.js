'use client';
import { useState } from 'react';
import { useAuth } from '../context/auth.context';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const { register } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register(formData);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to register');
    }
  };

  return (
    <main className="hero" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="hero-bg-grid"></div>
      <div className="glass-card" style={{ padding: '40px', width: '100%', maxWidth: '450px', position: 'relative', zIndex: 10 }}>
        <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '8px' }}>Join <span className="gradient-text">MOUJ</span></h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Start your journey to financial intelligence.</p>
        
        {error && <p style={{ color: '#ef4444', marginBottom: '16px', fontSize: '0.875rem' }}>{error}</p>}
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>First Name</label>
              <input 
                type="text" 
                name="firstName"
                className="cta-input" 
                placeholder="John" 
                value={formData.firstName}
                onChange={handleChange}
                required 
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Last Name</label>
              <input 
                type="text" 
                name="lastName"
                className="cta-input" 
                placeholder="Doe" 
                value={formData.lastName}
                onChange={handleChange}
                required 
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Email Address</label>
            <input 
              type="email" 
              name="email"
              className="cta-input" 
              placeholder="name@company.com" 
              value={formData.email}
              onChange={handleChange}
              required 
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Password</label>
            <input 
              type="password" 
              name="password"
              className="cta-input" 
              placeholder="••••••••" 
              value={formData.password}
              onChange={handleChange}
              required 
              style={{ width: '100%' }}
            />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
            Create Account
          </button>
        </form>
        
        <p style={{ marginTop: '24px', textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          Already have an account? <Link href="/login" className="gradient-text" style={{ fontWeight: '600' }}>Log in</Link>
        </p>
      </div>
    </main>
  );
}
