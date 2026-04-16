'use client'

const SERVICES = [
  {
    id: 'safie',
    icon: '📰',
    title: 'SAFie',
    subtitle: 'AI by SA Footballer',
    description: 'AI-powered match report generation for magazines, web articles and social media posts in seconds.',
    badge: 'AI · Core',
    badgeColor: '#e6fe00',
    badgeText: '#000',
    url: 'https://nextjs-safie.onrender.com',
    btnLabel: 'Launch SAFie',
    btnStyle: 'yellow',
    accentColor: '#e6fe00',
    glowColor: 'rgba(230,254,0,0.15)',
  },
  {
    id: 'admin',
    icon: '⚙️',
    title: 'Admin Dashboard',
    subtitle: 'System Management',
    description: 'Complete analytics, user management, cost tracking, match links and full system administration.',
    badge: 'Admin',
    badgeColor: 'rgba(44,163,238,0.2)',
    badgeText: '#2ca3ee',
    badgeBorder: '#2ca3ee',
    url: 'https://safie-admin.onrender.com',
    btnLabel: 'Launch Admin',
    btnStyle: 'blue',
    accentColor: '#2ca3ee',
    glowColor: 'rgba(44,163,238,0.12)',
  },
  {
    id: 'leagues',
    icon: '🏅',
    title: 'Ladders Fetcher',
    subtitle: 'Live Standings',
    description: 'Live league ladders and standings synced daily from PlayHQ across all competitions.',
    badge: 'Live Data',
    badgeColor: 'rgba(74,222,128,0.15)',
    badgeText: '#4ade80',
    badgeBorder: '#4ade80',
    url: 'https://ladder-fetcher.onrender.com',
    btnLabel: 'View Ladders',
    btnStyle: 'green',
    accentColor: '#4ade80',
    glowColor: 'rgba(74,222,128,0.1)',
  },
  {
    id: 'stats',
    icon: '📊',
    title: 'Player Stats Fetcher',
    subtitle: 'Season & Round Stats',
    description: 'Games played, goals scored and best player awards per player across all leagues and rounds.',
    badge: 'Statistics',
    badgeColor: 'rgba(251,191,36,0.15)',
    badgeText: '#fbbf24',
    badgeBorder: '#fbbf24',
    url: 'https://stats-fetcher.onrender.com',
    btnLabel: 'View Stats',
    btnStyle: 'amber',
    accentColor: '#fbbf24',
    glowColor: 'rgba(251,191,36,0.1)',
  },
]

const BTN_STYLES: Record<string, { bg: string; color: string; shadow: string }> = {
  yellow: { bg: '#e6fe00',                                   color: '#000', shadow: 'rgba(230,254,0,0.35)' },
  blue:   { bg: 'linear-gradient(135deg,#2ca3ee,#00b8f1)',   color: '#fff', shadow: 'rgba(44,163,238,0.35)' },
  green:  { bg: 'rgba(74,222,128,0.15)',                     color: '#4ade80', shadow: 'rgba(74,222,128,0.2)' },
  amber:  { bg: 'rgba(251,191,36,0.15)',                     color: '#fbbf24', shadow: 'rgba(251,191,36,0.2)' },
}

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>

      {/* Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, background: 'linear-gradient(160deg, #000 0%, #050f05 30%, #050a0f 65%, #000 100%)' }} />
      <div style={{ position: 'fixed', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: 900, height: 400, background: 'radial-gradient(ellipse, rgba(44,163,238,0.1) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', bottom: '-5%', right: '-5%', width: 500, height: 500, background: 'radial-gradient(ellipse, rgba(230,254,0,0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '3rem 1.5rem 4rem' }}>

        {/* Header — single logo centred */}
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <img
              src="/logo.png"
              alt="SA Footballer"
              style={{ height: 80, filter: 'drop-shadow(0 4px 16px rgba(44,163,238,0.45))' }}
            />
          </div>
          <h1 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: '#fff', margin: 0, lineHeight: 1.1,
          }}>
            The South Australian Footballer
          </h1>
          <div style={{ marginTop: '0.75rem' }}>
            <span style={{
              display: 'inline-block', background: '#e6fe00', color: '#000',
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '4px 18px', borderRadius: 20,
            }}>Master Dashboard</span>
          </div>
          <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem' }}>
            All services in one place — select a tool to get started
          </p>
        </div>

        {/* Stats bar */}
        <div className="fade-up-1" style={{
          display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap',
          background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(44,163,238,0.2)',
          borderRadius: 16, padding: '1.5rem 2rem', marginBottom: '3rem',
        }}>
          {[
            { num: '4',    label: 'Active Services' },
            { num: '24/7', label: 'Availability'    },
            { num: '⚡',   label: 'AI Powered'      },
            { num: '🏈',   label: 'SA Football'     },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '2.2rem', color: '#e6fe00', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Service Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
          {SERVICES.map((s, i) => {
            const btn = BTN_STYLES[s.btnStyle]
            return (
              
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`fade-up-${i + 1}`}
                style={{
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  background: 'rgba(0,0,0,0.7)', borderRadius: 20,
                  border: '1.5px solid rgba(44,163,238,0.2)',
                  padding: '2rem 1.75rem', textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                  minHeight: 320,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = s.accentColor
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = `0 20px 60px ${s.glowColor}, 0 8px 32px rgba(0,0,0,0.4)`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(44,163,238,0.2)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)'
                }}
              >
                <div>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.6rem', color: s.accentColor, lineHeight: 1.1, marginBottom: 4 }}>
                    {s.title}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {s.subtitle}
                  </div>
                  <span style={{
                    display: 'inline-block', fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '3px 12px', borderRadius: 20, marginBottom: '0.875rem',
                    background: s.badgeColor, color: s.badgeText,
                    border: (s as any).badgeBorder ? `1px solid ${(s as any).badgeBorder}` : 'none',
                  }}>{s.badge}</span>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                    {s.description}
                  </p>
                </div>
                <div style={{ marginTop: '1.5rem' }}>
                  <span style={{
                    display: 'block', textAlign: 'center',
                    background: btn.bg, color: btn.color,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.08em',
                    textTransform: 'uppercase', padding: '0.875rem 1.5rem',
                    borderRadius: 50,
                    border: s.btnStyle === 'green' || s.btnStyle === 'amber' ? `1.5px solid ${s.accentColor}` : 'none',
                    boxShadow: `0 6px 20px ${btn.shadow}`,
                  }}>
                    🚀 {s.btnLabel}
                  </span>
                </div>
              </a>
            )
          })}
        </div>

        {/* Quick access */}
        <div className="fade-up-4" style={{ marginBottom: '3rem' }}>
          <h3 style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
            fontSize: '1.2rem', color: '#2ca3ee', textTransform: 'uppercase',
            letterSpacing: '0.06em', paddingBottom: '0.5rem',
            borderBottom: '2px solid rgba(44,163,238,0.2)', marginBottom: '1.25rem',
          }}>
            🔗 Quick Access
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {SERVICES.map(s => (
              
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(44,163,238,0.15)',
                  borderRadius: 12, padding: '0.875rem 1.25rem', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = s.accentColor
                  e.currentTarget.style.background = s.glowColor
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(44,163,238,0.15)'
                  e.currentTarget.style.background = 'rgba(0,0,0,0.4)'
                }}
              >
                <span style={{ fontSize: '1.25rem' }}>{s.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: s.accentColor }}>{s.title}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginTop: 1 }}>{'Open in new tab'}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center', paddingTop: '2rem',
          borderTop: '1px solid rgba(44,163,238,0.15)',
          color: 'rgba(255,255,255,0.25)', fontSize: '0.82rem',
        }}>
          <p>
            🏈{' '}
            <span style={{ color: '#2ca3ee', fontWeight: 700 }}>The South Australian Footballer</span>
            {' · Professional Sports Content Management'}
          </p>
          <p style={{ marginTop: '0.4rem' }}>
            {'Powered by '}
            <span style={{ color: '#2ca3ee', fontWeight: 700 }}>SAFie AI</span>
            {' · '}
            <span style={{ color: '#e6fe00', fontWeight: 600 }}>AI by SA Footballer</span>
          </p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)' }}>
            {'Developed by Mian Talha Sarfraz · '}
            <a href="https://github.com/talha-11-11" style={{ color: '#2ca3ee' }}>GitHub</a>
            {' · '}
            <a href="mailto:talhasarfraz29@gmail.com" style={{ color: '#2ca3ee' }}>talhasarfraz29@gmail.com</a>
          </p>
          <p style={{ marginTop: '0.4rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.15)' }}>
            {'© 2026 The South Australian Footballer. All rights reserved.'}
          </p>
        </div>

      </div>
    </div>
  )
}