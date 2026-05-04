import Link from 'next/link';
import React from 'react';
import Logo from '../Logo';

export default function Footer() {
  return (
    <footer style={{ padding: '100px 0 60px', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '60px', marginBottom: '80px' }}>
          <div>
            <Logo size={40} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '24px', lineHeight: '1.7', maxWidth: '300px' }}>
              Building the financial infrastructure that Morocco — and the world — deserves. From Casablanca to the globe.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '1.1rem' }}>Platform</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="#services">Digital Payments</Link></li>
              <li><Link href="#services">Smart Lending</Link></li>
              <li><Link href="#services">Wealth Management</Link></li>
              <li><Link href="#verticals">All Verticals</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '1.1rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="#opportunity">About Us</Link></li>
              <li><Link href="#roadmap">Roadmap</Link></li>
              <li><Link href="#stats">Market Data</Link></li>
              <li><Link href="#cta">Waitlist</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '1.1rem' }}>Legal</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
              <li><Link href="#">CNDP Compliance</Link></li>
              <li><Link href="#">GDPR Notice</Link></li>
            </ul>
          </div>
        </div>
        <div style={{ 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
          paddingTop: '40px', borderTop: '1px solid rgba(148, 163, 184, 0.05)',
          color: 'var(--text-muted)', fontSize: '0.85rem' 
        }}>
          <span>&copy; 2025 Qantara. All rights reserved. Made in Morocco 🇲🇦</span>
          <span>Backed by Morocco Fintech Center</span>
        </div>
      </div>
    </footer>
  );
}
