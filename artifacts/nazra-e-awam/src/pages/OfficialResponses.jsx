import { Link } from 'react-router-dom';
import { responses } from '../data/responses';
import Metadata from '../components/Metadata';
import { EmptyState, PageIntro } from '../components/Content';

export default function OfficialResponses() {
  return <><Metadata title="Official responses" path="/official-responses" description="Read verified official replies, clarifications and action-taken updates connected to published reports." />
    <PageIntro eyebrow="Accountability includes a reply" title="Official responses" description="This page records actual replies, clarifications and action-taken updates connected to published reports. A response is presented with context, not as an automatic endorsement." />
    <section className="container narrow" style={{paddingTop:32,paddingBottom:75}}>{responses.length ? <div className="report-list">{responses.map((item,index)=><article className="report-card" key={item.id || index}><div className="report-meta">{item.status}{item.date ? ` · ${item.date}` : ''}</div><h2>{item.authority}</h2><p>{item.summary}</p>{item.reportSlug && <Link to={`/cases/${item.reportSlug}`}>View related report →</Link>}{item.sourceUrl && <p><a href={item.sourceUrl} target="_blank" rel="noreferrer">Official source document</a></p>}</article>)}</div> : <EmptyState title="No official responses have been published yet">No replies or action-taken updates are in the public record yet. An absent response does not prove an allegation. When a response is received and verified, it will be published with the related report, date and status where known.</EmptyState>}</section>
  </>;
}
