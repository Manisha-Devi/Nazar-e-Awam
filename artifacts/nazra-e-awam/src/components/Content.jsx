import { Link } from 'react-router-dom';

export function PageIntro({ eyebrow = 'Nazra-e-Awam', title, description }) {
  return <header className="page-intro"><div className="container narrow"><div className="eyebrow">{eyebrow}</div><h1 className="page-title">{title}</h1>{description && <p className="lead">{description}</p>}</div></header>;
}

export function Section({ title, children }) {
  return <section className="content-section"><h2>{title}</h2>{children}</section>;
}

export function EmptyState({ title, children }) {
  return <div className="empty-state"><span className="empty-icon" aria-hidden="true">—</span><div><h3>{title}</h3><p>{children}</p></div></div>;
}

export function PolicyLinks() {
  return <nav className="policy-links" aria-label="Related policies">
    <Link to="/editorial-policy">Editorial policy</Link><Link to="/verification">Verification method</Link><Link to="/right-of-reply">Right of reply</Link><Link to="/corrections">Corrections</Link><Link to="/privacy">Privacy</Link>
  </nav>;
}

export function MailLink({ subject, children = 'genz@nazar-e-awam.com' }) {
  return <a href={`mailto:genz@nazar-e-awam.com?subject=${encodeURIComponent(subject)}`}>{children}</a>;
}
