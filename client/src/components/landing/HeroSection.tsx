'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Wallet, Shield } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function HeroSection() {
  return (
    <section id="hero" style={{ 
      paddingTop: '180px', paddingBottom: '120px', position: 'relative', overflow: 'hidden' 
    }}>
      <div className="hero-bg-grid" style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: 'radial-gradient(var(--border-subtle) 1px, transparent 1px)',
        backgroundSize: '40px 40px', opacity: 0.3, zIndex: 0
      }} />
      
      {/* Background Glows */}
      <motion.div 
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{
          position: 'absolute', top: '10%', right: '10%', width: '400px', height: '400px',
          background: 'rgba(37, 99, 235, 0.15)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0
        }} 
      />
      <motion.div 
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        style={{
          position: 'absolute', bottom: '10%', left: '10%', width: '350px', height: '350px',
          background: 'rgba(20, 184, 166, 0.1)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '8px', 
            padding: '6px 16px', borderRadius: '20px', background: 'rgba(37, 99, 235, 0.1)',
            border: '1px solid var(--border-accent)', color: 'var(--accent-blue)',
            fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px', marginBottom: '24px'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)', display: 'inline-block' }} />
            MOROCCO FINTECH CENTER — BACKED BY 15+ BANKS
          </div>
          <h1 style={{ fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '24px' }}>
            The Future of <span className="gradient-text">Digital Finance</span> Starts in Morocco
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px' }}>
            Qantara delivers next-generation payments, lending, and wealth management — built for Africa's most promising fintech frontier and scaling globally.
          </p>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/register" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              Join the Waitlist <ArrowRight size={20} />
            </Link>
            <Link href="#services" className="btn-secondary" style={{ padding: '16px 36px', fontSize: '1rem' }}>
              Explore Services
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '48px', marginTop: '60px' }}>
            {[
              { value: '15M+', label: 'Unbanked Moroccans' },
              { value: '$10B+', label: 'Annual Remittances' },
              { value: '137%', label: 'Mobile Penetration' }
            ].map(stat => (
              <div key={stat.label}>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)' }}>{stat.value}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          {/* Card Visual */}
          <div className="glass-card" style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <h4 style={{ fontSize: '1.1rem' }}>Growth Trajectory</h4>
              <span style={{ 
                padding: '4px 10px', borderRadius: '4px', background: 'rgba(20, 184, 166, 0.1)',
                color: 'var(--accent-teal)', fontSize: '0.7rem', fontWeight: '700'
              }}>▲ LIVE</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '120px', marginBottom: '32px' }}>
              {[40, 65, 45, 80, 55, 90, 70, 100].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  style={{ 
                    flex: 1, background: 'var(--gradient-brand)', borderRadius: '4px 4px 0 0',
                    opacity: 0.6 + (i * 0.05)
                  }}
                />
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Financial Inclusion</p>
                <p style={{ fontWeight: '700', color: 'var(--accent-teal)' }}>44% → 75%</p>
              </div>
              <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Embedded Finance</p>
                <p style={{ fontWeight: '700', color: 'var(--accent-blue)' }}>$7.2T</p>
              </div>
            </div>
          </div>

          {/* Float Cards */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ 
              position: 'absolute', top: '-40px', left: '-40px',
              padding: '16px 20px', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)',
              borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: 'var(--shadow-card)'
            }}
          >
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)' }}>
              <Wallet size={18} />
            </div>
            <div>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Payments</p>
              <p style={{ fontSize: '0.9rem', fontWeight: '700' }}>+2,430%</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            style={{ 
              position: 'absolute', bottom: '20px', right: '-30px',
              padding: '16px 20px', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)',
              borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: 'var(--shadow-card)'
            }}
          >
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(20,184,166,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-teal)' }}>
              <Shield size={18} />
            </div>
            <div>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Security</p>
              <p style={{ fontSize: '0.9rem', fontWeight: '700' }}>Bank-Grade</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
