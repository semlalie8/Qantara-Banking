'use client';
import Link from 'next/link';
import { ArrowRight, Shield, Zap, Globe, BarChart3, Clock, Users } from 'lucide-react';
import Logo from '../components/Logo';

export default function LandingPage() {
  return (
    <div className="landing-root">
      {/* Navbar */}
      <nav style={{ 
        position: 'fixed', top: 0, width: '100%', zIndex: 100, 
        backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-subtle)',
        padding: '15px 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo />
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <Link href="#services" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Services</Link>
            <Link href="#roadmap" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Roadmap</Link>
            <Link href="/login" className="btn-secondary" style={{ padding: '8px 24px' }}>Login</Link>
            <Link href="/register" className="btn-primary" style={{ padding: '8px 24px' }}>Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" style={{ paddingTop: '160px', paddingBottom: '100px', textAlign: 'center' }}>
        <div className="hero-bg-grid"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-badge">REDEFINING FINANCE IN MOROCCO</div>
          <h1 className="hero-title" style={{ maxWidth: '900px', margin: '0 auto 24px' }}>
            The Future of <span className="gradient-text">Intelligent Banking</span> is Here.
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
            MOUJ is bridging the gap between traditional banking and the digital future. 
            AI-driven, secure, and accessible financial inclusion for all.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link href="/register" className="btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
              Create Account <ArrowRight size={18} />
            </Link>
            <Link href="#services" className="btn-secondary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            {[
              { label: 'Unbanked Market', value: '15M+' },
              { label: 'Remittance Potential', value: '$10B+' },
              { label: 'Growth Target', value: '137%' },
              { label: 'AI Models', value: '6' }
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <h2 className="gradient-text" style={{ fontSize: '3rem', fontWeight: '800' }}>{stat.value}</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '80px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '60px' }}>
            <div>
              <Logo size={40} className="mb-6" />
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '16px' }}>Building the financial infrastructure for the next generation of Moroccan innovators.</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '24px' }}>Platform</h4>
              <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>Payments</li>
                <li>Lending</li>
                <li>Wealth</li>
                <li>AI Advisor</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '24px' }}>Company</h4>
              <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '24px' }}>Legal</h4>
              <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
          <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '40px' }}>
            &copy; 2024 MOUJ. All rights reserved. 
          </div>
        </div>
      </footer>

      <style jsx>{`
        .hero { position: relative; overflow: hidden; }
        .hero-bg-grid {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background-image: radial-gradient(var(--border-subtle) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.3;
        }
        .hero-badge {
          display: inline-block; padding: 6px 16px; border-radius: 20px;
          background: rgba(37, 99, 235, 0.1); color: var(--accent-blue);
          font-size: 0.75rem; font-weight: 700; letter-spacing: 1px;
          margin-bottom: 24px; border: 1px solid var(--border-accent);
        }
        .hero-title { font-size: 4.5rem; }
        .hero-subtitle { font-size: 1.25rem; color: var(--text-secondary); }
        .btn-primary {
          background: var(--gradient-brand); color: white; border: none;
          display: flex; alignItems: center; gap: 8px; border-radius: var(--radius-md);
          font-weight: 600; cursor: pointer; transition: var(--transition);
        }
        .btn-primary:hover { transform: translateY(-2px); filter: brightness(1.1); }
        .btn-secondary {
          background: rgba(255,255,255,0.05); color: var(--text-primary); border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md); font-weight: 600; cursor: pointer; transition: var(--transition);
        }
        .btn-secondary:hover { background: rgba(255,255,255,0.1); }
      `}</style>
    </div>
  );
}
