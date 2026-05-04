'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Logo from '../Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ 
      position: 'fixed', top: 0, width: '100%', zIndex: 100, 
      backdropFilter: scrolled ? 'blur(15px)' : 'none', 
      background: scrolled ? 'rgba(10, 22, 40, 0.8)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border-subtle)' : 'none',
      padding: scrolled ? '12px 0' : '24px 0',
      transition: 'all 0.4s ease'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/">
          <Logo size={32} />
        </Link>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {['Services', 'Market', 'Opportunity', 'Roadmap', 'Verticals'].map(item => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', transition: 'var(--transition)' }}
              >
                {item}
              </Link>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link href="/login" className="btn-secondary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>Login</Link>
            <Link href="/register" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
