import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { responses } from '../data/responses';
import { EmptyState, PolicyLinks } from '../components/Content';
import Metadata from '../components/Metadata';

export default function Home() {
  const [taglineLanguage, setTaglineLanguage] = useState('ur');
  const isUrdu = taglineLanguage === 'ur';

  return <>
    <Metadata path="/" description="A nonprofit public-interest journalism project examining public concerns through evidence, verification and the responses of concerned authorities." />
    <section className="hero"><div className="container hero-grid">
      <div><div className="eyebrow">Awam Ki Awaaz, Saboot Ke Saath.</div><h1 className="display-title">Public Problems.<br />Verified Facts.<br />Official Responses.</h1><p className="lead">A nonprofit public-interest journalism project examining public concerns through evidence, verification and the responses of concerned authorities.</p>
        <div className="actions"><Link className="button" to="/submit">Submit a Public Problem</Link><Link className="button secondary" to="/cases">Explore Verified Cases</Link></div>
      </div>
      <aside className="hero-aside">
        <div className="tagline-switch">
          <p id="hero-tagline" className="urdu-line" lang={isUrdu ? 'ur' : 'en'} dir={isUrdu ? 'rtl' : 'ltr'} aria-live="polite">
            {isUrdu ? 'عوام کی آواز، ثبوت کے ساتھ' : "The people's voice, backed by evidence."}
          </p>
          <button
            className="language-toggle"
            type="button"
            data-testid="tagline-language-toggle"
            aria-controls="hero-tagline"
            aria-label={`Switch tagline to ${isUrdu ? 'English' : 'Urdu'}`}
            aria-pressed={!isUrdu}
            onClick={() => setTaglineLanguage(isUrdu ? 'en' : 'ur')}
          >
            {isUrdu ? 'EN' : 'UR'}
          </button>
        </div>
        <p>We do not manufacture a daily news cycle. We receive concerns, check what can be established, ask those involved to respond, then decide whether publication serves the public interest.</p><Link to="/editorial-policy">How we make editorial decisions →</Link>
      </aside>
    </div></section>
    <section className="band tinted"><div className="container mission-grid"><div><div className="eyebrow">Why this exists</div><h2 className="page-title" style={{fontSize:'42px'}}>A careful process for questions that matter.</h2></div><p className="mission-copy">People deserve a fair way to raise demonstrable public concerns. We assess evidence, seek the relevant authority’s account and publish only when the facts and public interest justify it.</p></div></section>
    <section className="band"><div className="container"><div className="section-heading"><div><div className="eyebrow">Our method</div><h2>Four steps. No shortcuts.</h2></div><p>Every concern is reviewed. A submission is not a finding, and publication is never promised.</p></div>
      <div className="step-list">{[['01','Receive the concern','We screen for public interest, clarity and safe handling.'],['02','Verify the evidence','We check records, dates and independent corroboration.'],['03','Seek the official response','Relevant people and institutions have a fair opportunity to reply.'],['04','Publish responsibly','Editors weigh evidence, privacy, fairness and public value.']].map(([n,t,d])=><article className="step" key={n}><span className="step-number">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
    </div></section>
    <section className="band tinted"><div className="container"><div className="section-heading"><div><div className="eyebrow">The record</div><h2>Verified cases</h2></div><Link to="/cases">All cases →</Link></div>
      {articles.length ? <div className="report-list">{articles.slice(0,3).map(article=><article className="report-card" key={article.slug}><div className="report-meta">{article.category}</div><h2><Link to={`/cases/${article.slug}`}>{article.title}</Link></h2><p>{article.summary}</p></article>)}</div> : <EmptyState title="A deliberate pause before the first report">No verified reports have been published yet. Every submission is reviewed before publication.</EmptyState>}
    </div></section>
    <section className="band"><div className="container mission-grid"><div><div className="eyebrow">Official responses</div><h2 className="page-title" style={{fontSize:'40px'}}>A reply is part of the record.</h2><p className="lead">We publish actual clarifications and action-taken updates, with context. Silence is not proof of an allegation.</p><Link to="/official-responses">Read about official responses →</Link></div><div>{responses.length ? responses.map((item,index)=><article className="report-card" key={item.id || index}><div className="report-meta">{item.status}</div><h3>{item.authority}</h3><p>{item.summary}</p></article>) : <EmptyState title="No official responses published">When a response is received and reviewed, it will be published here with its related report and context.</EmptyState>}</div></div></section>
    <section className="band tinted"><div className="container mission-grid"><div><div className="eyebrow">Trust through process</div><h2 className="page-title" style={{fontSize:'40px'}}>Editorial independence is a practice.</h2></div><div><p className="lead">Editorial decisions are not for sale and are not determined by political affiliation or personal influence. Evidence, fairness and public interest guide our work.</p><div className="link-row"><Link to="/verification">Our verification method</Link><Link to="/right-of-reply">Right of reply</Link><Link to="/corrections">Corrections policy</Link></div></div></div></section>
    <section className="band"><div className="container"><div className="section-heading"><div><div className="eyebrow">Care with information</div><h2>Privacy is not a promise we can overstate.</h2></div><p>Email is the only submission route in this first version. Ordinary email cannot guarantee anonymity or secure handling.</p></div><div className="callout">Please do not send passwords, one-time codes, banking credentials, unnecessary identity documents, or classified and highly sensitive material through ordinary email. Redact third-party personal information where possible.</div><div className="link-row"><Link to="/privacy">Read our privacy policy</Link><Link to="/submit">Submission guidance</Link><Link to="/contact">Contact the project</Link></div></div></section>
    <div className="container"><PolicyLinks /></div>
  </>;
}
