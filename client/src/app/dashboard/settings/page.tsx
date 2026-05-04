'use client';
import React from 'react';
import { User, Lock, Bell, Globe, Shield, CreditCard, ChevronRight } from 'lucide-react';
import { useAuth } from '@/context/auth.context';

export default function SettingsPage() {
  const { user } = useAuth();

  const sections = [
    { icon: <User size={20} />, title: 'Profile Information', desc: 'Manage your personal details and identity.' },
    { icon: <Lock size={20} />, title: 'Security & Password', desc: 'Two-factor authentication and login history.' },
    { icon: <Bell size={20} />, title: 'Notifications', desc: 'Configure how you receive alerts and reports.' },
    { icon: <Globe size={20} />, title: 'Language & Region', desc: 'Set your preferred currency and language.' },
    { icon: <Shield size={20} />, title: 'Privacy & Data', desc: 'Manage CNDP compliance and data sharing.' },
    { icon: <CreditCard size={20} />, title: 'Payment Methods', desc: 'Saved cards, bank accounts, and wallets.' },
  ];

  return (
    <div>
      <header style={{ marginBottom: '32px' }}>
        <h1 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '4px' }}>
          Account <span className="gradient-text">Settings</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>Manage your personal preferences and security.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
        {/* User Card */}
        <div>
          <div className="glass-card" style={{ padding: '32px', textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ 
              width: '100px', height: '100px', borderRadius: '50%', background: 'var(--gradient-brand)',
              margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <User size={48} color="white" />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{user?.firstName} {user?.lastName}</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px' }}>{user?.email}</p>
            <button className="btn-secondary" style={{ width: '100%', padding: '10px', fontSize: '0.85rem' }}>Edit Profile</button>
          </div>
          
          <div className="glass-card" style={{ padding: '24px' }}>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '16px', color: 'var(--text-muted)' }}>Verification Status</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '8px', background: 'rgba(20, 184, 166, 0.1)', color: 'var(--accent-teal)' }}>
              <Shield size={18} />
              <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Identity Verified (KYC)</span>
            </div>
          </div>
        </div>

        {/* Settings Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {sections.map((section, i) => (
            <button 
              key={i}
              style={{
                display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 24px',
                background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                borderRadius: '16px', cursor: 'pointer', textAlign: 'left', transition: 'var(--transition)',
                width: '100%', color: 'inherit'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-accent)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.background = 'var(--bg-card)';
              }}
            >
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)' }}>
                {section.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '2px' }}>{section.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{section.desc}</p>
              </div>
              <ChevronRight size={20} color="var(--text-muted)" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
