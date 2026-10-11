import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const mainLinks = [
  ['/cases', 'Verified cases'],
  ['/official-responses', 'Official responses'],
  ['/about', 'About'],
];
const footerGroups = [
  { title: 'The work', links: [['/cases', 'Verified cases'], ['/official-responses', 'Official responses'], ['/submit', 'Submit a concern'], ['/verification', 'Verification']] },
  { title: 'Standards', links: [['/editorial-policy', 'Editorial policy'], ['/right-of-reply', 'Right of reply'], ['/corrections', 'Corrections'], ['/privacy', 'Privacy'], ['/terms', 'Terms']] },
  { title: 'About this project', links: [['/governance', 'Governance'], ['/funding', 'Funding'], ['/open-source', 'Open source'], ['/contact', 'Contact'], ['/accessibility', 'Accessibility'], ['/sitemap', 'Sitemap']] },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const close = () => setOpen(false);
  return <header className="site-header">
    <div className="header-inner">
      <Link to="/" className="brand" onClick={close} aria-label="Nazar-e-Awam home">
        <span className="brand-mark" aria-hidden="true">ن</span>
        <span><span className="brand-name">Nazar-e-Awam</span><span className="brand-note">Public-interest journalism</span></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {mainLinks.map(([url, label]) => <NavLink key={url} to={url} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}
        <Link to="/submit" className="nav-submit">Submit a problem</Link>
      </nav>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? 'Close menu' : 'Menu'}</button>
    </div>
    {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
      {[...mainLinks, ['/editorial-policy', 'Editorial policy'], ['/verification', 'Verification'], ['/contact', 'Contact'], ['/submit', 'Submit a problem']].map(([url, label]) =>
        <NavLink key={url} to={url} onClick={close} className={location.pathname === url ? 'active' : ''}>{label}</NavLink>)}
    </nav>}
  </header>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <Link to="/" className="brand"><span className="brand-mark" aria-hidden="true">ن</span><span className="brand-name">Nazar-e-Awam</span></Link>
        <p>Public Problems. Verified Facts. Official Responses.<br />Awam Ki Awaaz, Saboot Ke Saath.</p>
        <a href="mailto:genz@nazar-e-awam.com?subject=General%20Enquiry">genz@nazar-e-awam.com</a>
      </div>
      {footerGroups.map(group => <section className="footer-column" key={group.title}><h2>{group.title}</h2><div className="footer-links">{group.links.map(([url, label]) => <Link to={url} key={url}>{label}</Link>)}</div></section>)}
    </div>
    <div className="container footer-bottom"><span>Independent public-interest work. Publication is evidence-led and never guaranteed.</span><span>© {new Date().getFullYear()} Nazar-e-Awam</span></div>
  </footer>;
}

export function PageLayout({ children }) {
  return <><a href="#main-content" className="skip-link">Skip to content</a><Header /><main id="main-content" className="site-main">{children}</main><Footer /></>;
}
