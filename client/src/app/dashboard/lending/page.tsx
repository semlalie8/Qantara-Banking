'use client';
import React from 'react';
import { HandCoins, Info, CheckCircle2, AlertCircle } from 'lucide-react';

export default function LendingPage() {
  return (
    <div>
      <header style={{ marginBottom: '32px' }}>
        <h1 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '4px' }}>
          Smart <span className="gradient-text">Lending</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>AI-powered credit scoring and micro-loan management.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '32px' }}>
        <div>
          {/* Active Loans */}
          <div className="glass-card" style={{ padding: '24px', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Active Loans <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent-blue)' }}>1</span>
            </h3>
            <div style={{ padding: '20px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>MOUJ Micro-loan #4920</p>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: '700' }}>1,200.00 MAD</h4>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Remaining Term</p>
                  <p style={{ fontWeight: '600' }}>4 Months</p>
                </div>
              </div>
              <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '12px', overflow: 'hidden' }}>
                <div style={{ width: '65%', height: '100%', background: 'var(--gradient-brand)' }}></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                <span>Paid: 2,800.00 MAD</span>
                <span>Total: 4,000.00 MAD</span>
              </div>
            </div>
          </div>

          {/* Loan Offers */}
          <h3 style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Available For You</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {[
              { title: 'Emergency Cash', amount: '5,000 MAD', rate: '2.5%', term: '6 Months', color: 'var(--accent-blue)' },
              { title: 'SME Growth', amount: '25,000 MAD', rate: '4.2%', term: '18 Months', color: 'var(--accent-teal)' },
            ].map((offer, i) => (
              <div key={i} className="glass-card" style={{ padding: '24px' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '12px' }}>{offer.title}</h4>
                <p style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: offer.color }}>{offer.amount}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                  <span>Interest: {offer.rate}</span>
                  <span>Term: {offer.term}</span>
                </div>
                <button className="btn-secondary" style={{ width: '100%', padding: '10px' }}>Apply Now</button>
              </div>
            ))}
          </div>
        </div>

        {/* Credit Score */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div className="glass-card" style={{ padding: '24px', textAlign: 'center', background: 'var(--gradient-card)' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '24px' }}>AI Credit Score</h3>
            <div style={{ 
              width: '160px', height: '160px', borderRadius: '50%', margin: '0 auto 24px',
              border: '8px solid rgba(20, 184, 166, 0.1)', borderTopColor: 'var(--accent-teal)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
            }}>
              <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-teal)' }}>782</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>EXCELLENT</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Your score improved by <strong>12 points</strong> this month due to consistent bill payments.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Info size={16} /> Tips to Improve
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', gap: '12px', fontSize: '0.85rem' }}>
                <CheckCircle2 size={16} color="var(--accent-teal)" style={{ flexShrink: 0 }} />
                <span style={{ color: 'var(--text-secondary)' }}>Automate your utility bill payments to avoid delays.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '0.85rem' }}>
                <AlertCircle size={16} color="#ffc107" style={{ flexShrink: 0 }} />
                <span style={{ color: 'var(--text-secondary)' }}>Try to keep your balance above 500 MAD consistently.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
