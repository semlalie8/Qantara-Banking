'use client';
import { useAuth } from '../../context/auth.context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import Logo from '../../components/Logo';
import { 
  LayoutDashboard, 
  CreditCard, 
  HandCoins, 
  TrendingUp, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  LogOut,
  User
} from 'lucide-react';

const navItems = [
  { name: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Payments', icon: CreditCard, href: '/dashboard/payments' },
  { name: 'Lending', icon: HandCoins, href: '/dashboard/lending' },
  { name: 'Wealth', icon: TrendingUp, href: '/dashboard/wealth' },
  { name: 'AI Advisor', icon: MessageSquare, href: '/dashboard/ai-advisor' },
  { name: 'Analytics', icon: BarChart3, href: '/dashboard/analytics' },
  { name: 'Settings', icon: Settings, href: '/dashboard/settings' },
];

export default function DashboardLayout({ children }) {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading]);

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
          <Logo size={28} />
        </div>

        <nav style={{ flex: 1, padding: '0 16px' }}>
          <ul style={{ listStyle: 'none' }}>
            {navItems.map((item) => (
              <li key={item.name} style={{ marginBottom: '4px' }}>
                <Link href={item.href} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  transition: 'var(--transition)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              background: 'var(--gradient-brand)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <User size={20} color="white" />
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>{user.firstName} {user.lastName}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{user.email}</p>
            </div>
          </div>
          <button onClick={logout} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            width: '100%',
            padding: '10px',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            background: 'transparent',
            color: '#ef4444',
            cursor: 'pointer',
            fontSize: '0.875rem',
            transition: 'var(--transition)'
          }}>
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, marginLeft: '260px', padding: '40px' }}>
        {children}
      </main>
    </div>
  );
}
