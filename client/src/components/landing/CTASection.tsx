'use client';
import { motion } from 'framer-motion';
import React, { useState, FormEvent } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setEmail('');
  };

  return (
    <section id="cta" style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background Glow */}
      <div style={{ 
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '800px', height: '400px', background: 'var(--gradient-brand)', 
        opacity: 0.1, filter: 'blur(120px)', borderRadius: '50%', zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
          style={{ padding: '80px 40px', maxWidth: '900px', margin: '0 auto' }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent-teal)', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>✦ Join the Movement</span>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Be Part of Morocco's <span className="gradient-text">Fintech Revolution</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 40px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Get early access to Qantara's platform. Investors, partners, and early adopters — we're building something extraordinary.
          </p>

          <form onSubmit={handleSubmit} style={{ 
            display: 'flex', gap: '12px', maxWidth: '500px', margin: '0 auto' 
          }}>
            <input 
              type="email" 
              className="cta-input" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ flex: 1, height: '56px' }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '0 32px', height: '56px' }}>
              Join Waitlist
            </button>
          </form>

          {submitted && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ marginTop: '20px', color: 'var(--accent-teal)', fontWeight: '600' }}
            >
              ✓ Thank you! You've been added to the Qantara waitlist.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
