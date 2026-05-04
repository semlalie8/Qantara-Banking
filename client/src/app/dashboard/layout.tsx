'use client';
import React, { ReactNode, useEffect, useState, useRef } from 'react';
import { useAuth } from '@/context/auth.context';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '../../components/Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  CreditCard, 
  HandCoins, 
  TrendingUp, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  LogOut,
  ShieldCheck,
  Bell,
  Search,
  ChevronDown,
  User,
  LucideIcon
} from 'lucide-react';

interface NavItem {
  name: string;
  icon: LucideIcon;
  href: string;
  adminOnly?: boolean;
}

const navItems: NavItem[] = [
  { name: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Payments', icon: CreditCard, href: '/dashboard/payments' },
  { name: 'Lending', icon: HandCoins, href: '/dashboard/lending' },
  { name: 'Wealth', icon: TrendingUp, href: '/dashboard/wealth' },
  { name: 'AI Advisor', icon: MessageSquare, href: '/dashboard/ai-advisor' },
  { name: 'Analytics', icon: BarChart3, href: '/dashboard/analytics' },
  { name: 'Admin Panel', icon: ShieldCheck, href: '/dashboard/admin', adminOnly: true },
  { name: 'Support Inbox', icon: MessageSquare, href: '/dashboard/admin/inbox', adminOnly: true },
  { name: 'Settings', icon: Settings, href: '/dashboard/settings' },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (loading || !user) return <div style={{ background: 'var(--bg-primary)', height: '100vh' }}></div>;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Sidebar */}
      <aside style={{ 
        width: '260px', 
        background: 'var(--bg-secondary)', 
        borderRight: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh',
        zIndex: 100
      }}>
        <div style={{ padding: '24px' }}>
          <Link href="/" style={{ cursor: 'pointer', display: 'block' }}>
            <Logo size={28} />
          </Link>
        </div>

        <nav style={{ flex: 1, padding: '0 16px' }}>
          <ul style={{ listStyle: 'none' }}>
            {navItems.filter(item => !item.adminOnly || user.role === 'ADMIN').map((item) => (
              <li key={item.name} style={{ marginBottom: '4px' }}>
                <Link href={item.href} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  color: item.adminOnly ? 'var(--accent-blue)' : 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  transition: 'var(--transition)',
                  fontWeight: item.adminOnly ? '600' : 'normal'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = item.adminOnly ? 'var(--accent-blue)' : 'var(--text-secondary)';
                  e.currentTarget.style.background = 'transparent';
                }}
                >
                  <item.icon size={18} />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ padding: '24px', borderTop: '1px solid var(--border-subtle)' }}>
          <button onClick={logout} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            width: '100%',
            padding: '12px 16px',
            borderRadius: 'var(--radius-md)',
            border: 'none',
            background: 'transparent',
            color: '#ef4444',
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'var(--transition)'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.05)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div style={{ flex: 1, marginLeft: '260px', display: 'flex', flexDirection: 'column' }}>
        {/* Top Navigation Bar */}
        <header style={{ 
          height: '70px', 
          background: 'rgba(10, 15, 25, 0.8)', 
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          position: 'sticky',
          top: 0,
          zIndex: 90
        }}>
          {/* Search Bar */}
          <div style={{ position: 'relative', width: '300px' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search anything..." 
              style={{ 
                width: '100%', 
                padding: '10px 12px 10px 40px', 
                borderRadius: '50px', 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem'
              }} 
            />
          </div>

          {/* User Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', position: 'relative' }}>
              <Bell size={20} />
              <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', background: 'var(--accent-blue)', borderRadius: '50%', border: '2px solid var(--bg-primary)' }}></span>
            </button>

            {/* Avatar Dropdown */}
            <div style={{ position: 'relative' }} ref={dropdownRef}>
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid var(--border-subtle)',
                  padding: '6px 12px',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: '0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => !showDropdown && (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
              >
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%', 
                  overflow: 'hidden',
                  border: user.role === 'ADMIN' ? '1.5px solid var(--accent-blue)' : 'none'
                }}>
                  <img src="/avatar.png" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>{user.firstName}</span>
                <ChevronDown size={16} color="var(--text-muted)" style={{ transform: showDropdown ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
              </button>

              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 12px)',
                      right: 0,
                      width: '220px',
                      background: 'rgba(15, 20, 30, 0.95)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '16px',
                      padding: '8px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                      zIndex: 1000
                    }}
                  >
                    <div style={{ padding: '12px', borderBottom: '1px solid var(--border-subtle)', marginBottom: '8px' }}>
                      <p style={{ fontSize: '0.85rem', fontWeight: '700' }}>{user.firstName} {user.lastName}</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{user.email}</p>
                    </div>

                    <Link 
                      href="/dashboard/profile" 
                      onClick={() => setShowDropdown(false)}
                      style={{ 
                        display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px',
                        borderRadius: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)',
                        transition: 'var(--transition)'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                    >
                      <User size={18} /> My Profile
                    </Link>

                    {user.role === 'ADMIN' && (
                      <Link 
                        href="/dashboard/admin" 
                        onClick={() => setShowDropdown(false)}
                        style={{ 
                          display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px',
                          borderRadius: '10px', fontSize: '0.85rem', color: 'var(--accent-blue)',
                          fontWeight: '600', transition: 'var(--transition)'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(37, 99, 235, 0.05)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                      >
                        <ShieldCheck size={18} /> Admin Panel
                      </Link>
                    )}

                    <Link 
                      href="/dashboard/settings" 
                      onClick={() => setShowDropdown(false)}
                      style={{ 
                        display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px',
                        borderRadius: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)',
                        transition: 'var(--transition)'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                    >
                      <Settings size={18} /> Settings
                    </Link>

                    <button 
                      onClick={() => { logout(); setShowDropdown(false); }}
                      style={{ 
                        display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px',
                        borderRadius: '10px', fontSize: '0.85rem', color: '#ef4444',
                        transition: 'var(--transition)', width: '100%', background: 'transparent', border: 'none', cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.05)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                    >
                      <LogOut size={18} /> Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* Main Viewport */}
        <main style={{ padding: '40px' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
