import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { articles } from '../data/articles';
import Metadata from '../components/Metadata';
import { EmptyState, PageIntro } from '../components/Content';

export function Cases() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All categories');
  const hasPublishedReports = articles.length > 0;
  const hasActiveFilters = query.trim().length > 0 || category !== 'All categories';
  const categories = useMemo(() => ['All categories', ...new Set(articles.map(item => item.category).filter(Boolean))], []);
  const filtered = articles.filter(item => {
    const words = `${item.title} ${item.summary} ${item.category} ${(item.keywords || []).join(' ')}`.toLowerCase();
    return words.includes(query.trim().toLowerCase()) && (category === 'All categories' || item.category === category);
  });
  return <>
    <Metadata title="Verified cases" path="/cases" description="Browse public reports published after evidence review, right of reply and editorial assessment." />
    <PageIntro eyebrow="Public record" title="Verified cases" description="Reports are published only after editorial review. Search titles and keywords, or narrow the record by category." />
    <section className="container narrow" style={{paddingTop:28,paddingBottom:70}}>
      <div className="search-controls"><div className="field"><label htmlFor="case-search">Search reports</label><input id="case-search" data-testid="case-search" type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search title or keyword" /></div><div className="field"><label htmlFor="category-filter">Category</label><select id="category-filter" data-testid="case-category-filter" value={category} onChange={event=>setCategory(event.target.value)}>{categories.map(item=><option key={item}>{item}</option>)}</select></div></div>
      <p className="results-note" aria-live="polite">{hasPublishedReports ? `${filtered.length} ${filtered.length === 1 ? 'report' : 'reports'} found.` : 'No reports are currently published.'}</p>
      {filtered.length ? <div className="report-list">{filtered.map(item=><article className="report-card" key={item.slug}><div className="report-meta"><span>{item.category}</span>{item.location && <span>{item.location}</span>}</div><h2><Link to={`/cases/${item.slug}`}>{item.title}</Link></h2><p>{item.summary}</p><span className="date">Published {item.publishedAt}{item.updatedAt ? ` · Updated ${item.updatedAt}` : ''}</span></article>)}</div> : hasPublishedReports
        ? <EmptyState title="No reports match these filters">
            {hasActiveFilters ? <>Try another keyword or category, or <button className="text-button" data-testid="clear-case-filters" type="button" onClick={() => { setQuery(''); setCategory('All categories'); }}>clear your filters</button>.</> : 'No published reports match the current listing.'}
          </EmptyState>
        : <EmptyState title="A careful start to the public record">
            No verified reports have been published yet. Every submission is reviewed before publication. Allegations are not automatically treated as verified facts. Read <Link to="/verification">how verification works</Link> or <Link to="/submit">learn how to submit a concern</Link>.
          </EmptyState>}
    </section>
  </>;
}

function ListSection({ title, content, list }) {
  if (!content && (!list || !list.length)) return null;
  const renderItem = (item, i) => {
    if (typeof item === 'string') return <li key={i}>{item}</li>;
    const label = item.title || item.label || item.name || item.summary || 'Public source';
    return <li key={i}>{item.url ? <a href={item.url} target="_blank" rel="noreferrer">{label}</a> : label}{item.date ? ` · ${item.date}` : ''}{item.description ? ` — ${item.description}` : ''}</li>;
  };
  const contentItems = Array.isArray(content) ? content : content ? [content] : [];
  return <section className="report-section"><h2>{title}</h2>{contentItems.length > 0 && <ul>{contentItems.map((item, i) => typeof item === 'string' ? <li key={i}>{item}</li> : renderItem(item, i))}</ul>}{list?.length > 0 && <ul>{list.map(renderItem)}</ul>}</section>;
}

export function ReportDetails() {
  const { slug } = useParams();
  const article = articles.find(item => item.slug === slug);
  if (!article) return <><Metadata title="Report not found" path={`/cases/${slug}`} /><PageIntro eyebrow="Public record" title="Report not found" description="This report does not exist in the published record. It may have been removed or the address may be incorrect." /><div className="container narrow" style={{paddingBottom:70}}><Link className="button" to="/cases">Browse verified cases</Link></div></>;
  const details = [
    ['Background and chronology', article.body], ['Evidence examined', article.evidence],
    ['Independently verified facts', article.verifiedFacts], ['Unverified or disputed claims', article.unverifiedClaims],
    ['Questions sent to the concerned authority', article.questions], ['Official response', article.officialResponse],
    ['Factual status of response', article.factualStatus],
    ['Editorial assessment', article.assessment], ['Limitations and unresolved questions', article.limitations],
    ['Subsequent updates', article.updates], ['Corrections history', article.corrections],
  ];
  return <><Metadata title={article.title} path={`/cases/${article.slug}`} description={article.summary} />
    <article className="container report-article">
      <div className="eyebrow"><Link to="/cases">Verified cases</Link> / {article.category}</div><h1 className="page-title">{article.title}</h1>
      <div className="report-meta"><span>{article.category}</span>{article.location && <span>{article.location}</span>}</div>
      <p className="summary">{article.summary}</p><p className="date">Published {article.publishedAt}{article.updatedAt ? ` · Last updated ${article.updatedAt}` : ''}</p>
      {article.authority && <p className="date">Concerned authority: {article.authority}</p>}
      {details.map(([title, content])=><ListSection key={title} title={title} content={content} />)}
      <ListSection title="Relevant public records and sources" list={article.sources} />
      <ListSection title="Response timing" content={article.deadline ? `Response deadline documented: ${article.deadline}` : null} />
      {article.relatedReports?.length > 0 && <section className="report-section"><h2>Related reports</h2><ul>{article.relatedReports.map(slug=>{const related=articles.find(item=>item.slug===slug);return related && <li key={slug}><Link to={`/cases/${slug}`}>{related.title}</Link></li>;})}</ul></section>}
      <div className="callout">This report distinguishes allegations, evidence, verified facts, official statements and editorial assessment. The absence of an official response does not establish that an allegation is true.</div>
      <Link to="/corrections">Request a correction or clarification →</Link>
    </article>
  </>;
}
