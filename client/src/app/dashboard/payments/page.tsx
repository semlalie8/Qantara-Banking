'use client';
import React from 'react';
import { CreditCard, ArrowUpRight, ArrowDownLeft, Search, Plus, Filter } from 'lucide-react';

export default function PaymentsPage() {
  return (
    <div>
      <header style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '4px' }}>
            Digital <span className="gradient-text">Payments</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>Manage your transfers, bills, and payment methods.</p>
        </div>
        <button className="btn-primary">
          <Plus size={18} /> New Payment
        </button>
      </header>

      {/* Payment Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        <div className="glass-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ 
            width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)'
          }}>
            <ArrowUpRight size={24} />
          </div>
          <div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Total Inbound</p>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>12,450.00 MAD</h3>
          </div>
        </div>
        <div className="glass-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ 
            width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444'
          }}>
            <ArrowDownLeft size={24} />
          </div>
          <div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Total Outbound</p>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>8,210.00 MAD</h3>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            className="cta-input" 
            placeholder="Search transactions, recipients..." 
            style={{ width: '100%', paddingLeft: '48px', height: '48px' }}
          />
        </div>
        <button className="btn-secondary" style={{ height: '48px', padding: '0 16px' }}>
          <Filter size={18} />
        </button>
      </div>

      {/* Transactions List */}
      <div className="glass-card" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', background: 'rgba(255,255,255,0.02)' }}>
              <th style={{ padding: '16px 24px', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>RECIPIENT / SENDER</th>
              <th style={{ padding: '16px 24px', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>TYPE</th>
              <th style={{ padding: '16px 24px', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>DATE</th>
              <th style={{ padding: '16px 24px', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>STATUS</th>
              <th style={{ padding: '16px 24px', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600', textAlign: 'right' }}>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Inwi Recharge', type: 'Utility', date: 'May 12, 2024', status: 'Completed', amount: '-100.00', color: 'var(--text-primary)' },
              { name: 'Reda Mansouri', type: 'P2P Transfer', date: 'May 10, 2024', status: 'Completed', amount: '+2,500.00', color: 'var(--accent-teal)' },
              { name: 'Netflix', type: 'Subscription', date: 'May 08, 2024', status: 'Pending', amount: '-125.00', color: 'var(--text-primary)' },
              { name: 'Amine El Amrani', type: 'P2P Transfer', date: 'May 05, 2024', status: 'Completed', amount: '+450.00', color: 'var(--accent-teal)' },
            ].map((t, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '16px 24px', fontSize: '0.9rem', fontWeight: '500' }}>{t.name}</td>
                <td style={{ padding: '16px 24px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{t.type}</td>
                <td style={{ padding: '16px 24px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.date}</td>
                <td style={{ padding: '16px 24px' }}>
                  <span style={{ 
                    fontSize: '0.75rem', padding: '4px 8px', borderRadius: '4px',
                    background: t.status === 'Completed' ? 'rgba(20, 184, 166, 0.1)' : 'rgba(255, 193, 7, 0.1)',
                    color: t.status === 'Completed' ? 'var(--accent-teal)' : '#ffc107'
                  }}>{t.status}</span>
                </td>
                <td style={{ padding: '16px 24px', fontSize: '0.9rem', fontWeight: '700', textAlign: 'right', color: t.color }}>{t.amount} MAD</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
