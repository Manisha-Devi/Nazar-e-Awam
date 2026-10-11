import { Link } from 'react-router-dom';
import Metadata from '../components/Metadata';
import { MailLink, PageIntro, PolicyLinks, Section } from '../components/Content';
import { articles } from '../data/articles';

function Page({ title, eyebrow, description, children, path }) {
  return <><Metadata title={title} path={path} description={description} /><PageIntro title={title} eyebrow={eyebrow || 'Our standards'} description={description} /><div className="container narrow" style={{paddingBottom:28}}>{children}<PolicyLinks /></div></>;
}

export function Submit() {
  return <Page title="Submit a public problem" path="/submit" eyebrow="Raise a concern" description="We consider demonstrable public-interest concerns. Email is the only submission method in this first version; there is no web form or secure upload portal.">
    <Section title="What may be relevant"><p>You may write to us about:</p><ul><li>Public-service problems and delays in official processes.</li><li>Administrative irregularities.</li><li>Public expenditure and service-delivery concerns.</li><li>Questions about public institutions.</li><li>Difficulty accessing public information or seeking accountability.</li><li>Other demonstrable matters of public interest.</li></ul></Section>
    <Section title="What to include"><ul><li>A concise description of the problem.</li><li>The department or institution concerned.</li><li>Dates and location, where relevant.</li><li>Supporting documents or public records, if available.</li><li>Specific questions that may be independently checked.</li><li>Whether you request that your identity not be disclosed publicly.</li><li>Optional contact details if you would like follow-up.</li></ul></Section>
    <div className="callout"><strong>Before sending:</strong> An email does not guarantee anonymity or confidential handling. Do not send passwords, one-time passwords, banking credentials or unnecessary identity documents. Redact third-party personal information where possible. Do not send classified or highly sensitive information through ordinary email without appropriate guidance.</div>
    <Section title="What happens next"><p>A submission is reviewed, not automatically published. An allegation is not automatically a verified fact. We may request clarification, check available evidence and contact the relevant authority for a response. Private correspondence is not automatically published. We do not guarantee coverage, action by an authority or a particular outcome.</p><p>Ordinary email and the email and hosting providers involved have limits. Please consider the information and risks before writing.</p></Section>
    <Section title="Send by email"><p>Suggested subject: <strong>Public Interest Submission — [Short Issue Title]</strong></p><p><MailLink subject="Public Interest Submission — [Short Issue Title]">Email a public-interest submission to genz@nazar-e-awam.com</MailLink></p></Section>
  </Page>;
}

export function About() {
  return <Page title="About Nazar-e-Awam" path="/about" eyebrow="Our purpose" description="An independent public-interest platform examining concerns through evidence, verification and the responses of concerned authorities.">
    <Section title="Awam Ki Awaaz, Saboot Ke Saath."><p>Nazar-e-Awam receives public concerns, reviews available evidence, independently verifies relevant facts, seeks the concerned authority's official response, and publishes responsible reports when justified by evidence and public interest.</p><p>The platform is designed for people who may face difficulties raising questions, accessing official information or seeking accountability through existing channels.</p></Section>
    <Section title="A publication, not a daily news feed"><p>We do not manufacture stories or allegations to fill a schedule. We review concerns, evaluate evidence and give relevant parties a fair opportunity to respond. Editorial standards determine whether a report is warranted.</p></Section>
    <Section title="What we do not promise"><ul><li>We do not guarantee coverage, publication, anonymity or action by an authority.</li><li>We do not accept payment for favourable coverage.</li><li>We do not treat an allegation as fact without verification.</li><li>We do not claim staff, awards, registration, an office or formal legal status that has not been published and verified.</li></ul></Section>
  </Page>;
}

export function EditorialPolicy() {
  return <Page title="Editorial policy" path="/editorial-policy" eyebrow="Standards" description="Our editorial decisions are based on evidence, fairness and public interest—not political affiliation, personal influence or payment.">
    <Section title="Accuracy and evidence"><p>We check claims against records and independent sources where possible. A document submitted to us is not automatically authentic. Reports distinguish allegations, evidence, verified facts, official statements and editorial conclusions.</p></Section>
    <Section title="Public interest and independence"><p>Publication must serve a clear public-interest purpose. Editorial decisions are not for sale and are not based on political affiliation, personal influence or payment. We do not accept payment for favourable coverage. Actual conflicts of interest should be identified and addressed before publication.</p></Section>
    <Section title="Fairness and right of reply"><p>We make reasonable efforts to put material factual questions to the people or institutions concerned and fairly represent relevant responses. A response is subject to verification, privacy and editorial review.</p></Section>
    <Section title="Privacy and source protection"><p>We minimise unnecessary personal information and assess the risks of identifying people. We take care with source information, while being honest that ordinary email cannot guarantee anonymity or confidentiality.</p></Section>
    <Section title="Sensitive information and legal risk"><p>Editors assess whether publication could cause avoidable harm, disclose private or protected information, compromise safety, or create legal risk. We redact details that are not necessary to explain the public issue.</p></Section>
    <Section title="Corrections and accountability"><p>Significant factual corrections are made transparently rather than silently hidden. We record relevant update and correction dates and invite substantiated correction requests.</p></Section>
  </Page>;
}

export function Verification() {
  const stages = ['Receive the submission and record its stated scope.', 'Conduct an initial screen for public interest, clarity, safety and feasibility.', 'Review supporting documents without assuming that a submitted document is authentic.', 'Check relevant dates, records and context.', 'Seek independent corroboration where reasonably available.', 'Contact the concerned authority with specific factual questions.', 'Assess its response alongside contradictory evidence and unanswered questions.', 'Conduct editorial, privacy and legal-risk review.', 'Decide whether publication is justified by evidence and public interest.', 'Record significant later developments and corrections.'];
  return <Page title="Verification methodology" path="/verification" eyebrow="How we work" description="Verification is a process of checking claims, records and context—not a label applied to every submission.">
    <Section title="From concern to publication"><ol>{stages.map(stage=><li key={stage}>{stage}</li>)}</ol></Section>
    <Section title="Different kinds of information"><ul><li><strong>Allegation:</strong> a claim made by a person or source, not established merely by being submitted.</li><li><strong>Documentary evidence:</strong> material relevant to a claim; its origin, completeness and meaning still need assessment.</li><li><strong>Independently corroborated information:</strong> a claim supported by a separate source or record we have checked.</li><li><strong>Official statement:</strong> an account provided by an authority, attributed and assessed rather than treated as conclusive by default.</li><li><strong>Editorial conclusion:</strong> our reasoned assessment of the evidence and its limits.</li></ul><p>Not every concern can be verified or published. We may ask for clarification; we do not promise coverage or a specific outcome.</p></Section>
  </Page>;
}

export function RightOfReply() {
  return <Page title="Right of reply" path="/right-of-reply" eyebrow="Fairness" description="Individuals, departments and institutions may provide a response or factual clarification about a published report or questions raised for a potential report.">
    <Section title="How to send a reply"><p>Please identify the report or correspondence, the specific factual claims you are addressing, any proposed corrections, supporting records and—where applicable—the authorised respondent and their role.</p><p><MailLink subject="Right of Reply — [Report or Issue]">Email a right-of-reply request</MailLink></p></Section>
    <Section title="Review and publication"><p>Responses are reviewed for relevance, authenticity, privacy and editorial standards. We may seek clarification and edit for length without changing meaning. Publication of a response is not automatic. Where a response is published, we aim to connect it to the relevant report and distinguish it from our independent assessment.</p></Section>
  </Page>;
}

export function Corrections() {
  return <Page title="Corrections policy" path="/corrections" eyebrow="Accountability" description="We take substantiated reports of factual errors seriously and make significant corrections visible.">
    <Section title="Report a possible error"><p>Tell us which report and passage is at issue, what you believe is inaccurate, what correction you propose and any supporting records. Affected parties may request review.</p><p><MailLink subject="Correction Request — [Report Title]">Email a correction request</MailLink></p></Section>
    <Section title="Review and record"><p>We recheck factual claims against available evidence and may ask follow-up questions. If a material error is confirmed, we correct it clearly and identify significant changes rather than silently hiding them. Dates and relevant updates are recorded on the report where appropriate. A request alone does not establish an error, and not every disagreement requires a correction.</p></Section>
  </Page>;
}

export function Privacy() {
  return <Page title="Privacy policy" path="/privacy" eyebrow="Information care" description="This policy describes the limits and intended handling of information voluntarily sent to Nazar-e-Awam. The final policy must be reviewed against the actual hosting configuration and applicable law before launch.">
    <Section title="Information sent by email"><p>If you email us, the message may contain your email address, contact information, the details you choose to share and attachments. We use this information to review a submission, assess evidence, seek clarification, consider a response or correction request, and communicate about the matter.</p></Section>
    <Section title="Private correspondence and publication"><p>Private correspondence is separate from published content and is not automatically published. If a report is considered, we assess whether information can be used safely and fairly. We minimise personal details and may redact identifying information where appropriate.</p></Section>
    <Section title="Access, retention and deletion"><p>Access to correspondence should be limited to people who need it for review. Information should be retained only as long as reasonably necessary for that purpose, accountability and applicable legal obligations, then securely deleted where feasible. These practices must be confirmed against actual email and hosting arrangements before launch; this statement is not a claim of secure storage.</p></Section>
    <Section title="Providers and legal disclosure"><p>Email and hosting providers may process information as part of delivering their services, under their own terms and systems. Information may be disclosed where legally required. We cannot promise that email is end-to-end encrypted, that anonymity is guaranteed, or that correspondence is confidential in every circumstance.</p></Section>
    <Section title="Your choices and enquiries"><p>Do not send passwords, OTPs, banking credentials, unnecessary identity documents, or classified or highly sensitive information through ordinary email without appropriate guidance. Privacy questions or requests can be sent to <MailLink subject="Privacy Enquiry">genz@nazar-e-awam.com</MailLink>.</p></Section>
  </Page>;
}

export function Terms() {
  return <Page title="Terms of use" path="/terms" eyebrow="Using this site" description="These terms explain the limits of this static public-interest publication and how published material may be used.">
    <Section title="Responsible use"><p>Use this website lawfully and do not interfere with its operation, misrepresent published material or use information to harass, threaten or expose people. Do not send unnecessary sensitive personal information.</p></Section>
    <Section title="Editorial discretion and publication"><p>Submissions may be reviewed, declined, or followed up at editorial discretion. Submission does not guarantee publication, a response, action by an authority or legal outcome. The site is not legal representation and does not replace official grievance procedures or emergency services.</p></Section>
    <Section title="Corrections and responses"><p>Factual correction requests and right-of-reply submissions are welcomed through the contact routes described on this site. Review and publication are subject to verification, privacy, fairness and editorial standards.</p></Section>
    <Section title="Intellectual property and links"><p>Unless a specific page or source states otherwise, site text is provided for public information. Please attribute material when quoting or sharing it, and respect third-party rights in linked records or documents. External links are provided for context; their content and availability are controlled by their publishers.</p></Section>
    <Section title="Responsibility"><p>We aim to publish carefully and correct significant factual errors transparently. Nothing in these terms removes responsibilities that apply to our own publications under applicable law.</p></Section>
  </Page>;
}

export function Governance() {
  return <Page title="Governance and transparency" path="/governance" eyebrow="Accountability" description="These are the principles intended to guide the project. Details that have not been verified are stated plainly, not inferred.">
    <Section title="Principles"><ul><li>Public-interest mission and evidence-led publication.</li><li>Editorial independence from funders and interested parties.</li><li>Transparent, explainable editorial decision-making.</li><li>Disclosure and management of relevant conflicts of interest.</li><li>Financial accountability and clear separation of funding decisions from editorial decisions.</li></ul></Section>
    <Section title="Project status"><p>The project is preparing for formal registration. Confirmed details will be published when available.</p><p>Governing members: <strong>Not yet published.</strong></p><p>Formal legal status: <strong>Not yet published.</strong></p><p>No registration number, board, nonprofit status or legal form is claimed here.</p></Section>
  </Page>;
}

export function Funding() {
  return <Page title="Funding disclosure" path="/funding" eyebrow="Independence" description="No donor, sponsor or financial figure is represented here without verified information.">
    <Section title="What we will disclose"><p>When verified funding information exists, it should identify the source and nature of donations or grants, relevant conditions, and operating expenses at an appropriate level of detail. Records should be documented and disclosed clearly.</p></Section>
    <Section title="Editorial independence"><p>Funders must not control favourable coverage, determine findings or suppress justified reporting. Funding decisions and editorial decisions should remain separate, with relevant conflicts disclosed and managed.</p></Section>
    <Section title="Current disclosure"><p>No donors, sponsors, grants or financial figures are published at this time. This is not a claim that the project has no costs or receives no support.</p></Section>
  </Page>;
}

export function OpenSource() {
  return <Page title="Open-source project" path="/open-source" eyebrow="Project transparency" description="We intend to make the website source code publicly available so its structure can be understood and improved.">
    <Section title="Repository status"><p><strong>Future GitHub repository:</strong> <span>Not yet published — repository URL to be added after a public repository is created.</span></p><p><strong>Licence:</strong> Pending. No licence is claimed until one is selected and added to the repository.</p></Section>
    <Section title="Contributing"><p>Once the repository is public, contributions should explain the proposed change and its purpose. Report technical issues with a concise description and steps to reproduce. Do not use public issues for private corrections, source identities or sensitive case material; use the appropriate email contact.</p></Section>
    <div className="callout"><strong>Never commit private submissions, personal data, credentials or confidential evidence.</strong> A public source repository is visible to everyone and is not a place to store correspondence or source material.</div>
  </Page>;
}

export function Contact() {
  const emailLinks = [
    ['General enquiries', 'General Enquiry'],
    ['Public submissions', 'Public Interest Submission — [Short Issue Title]'],
    ['Corrections', 'Correction Request — [Report Title]'],
    ['Right-of-reply requests', 'Right of Reply — [Report or Issue]'],
    ['Privacy enquiries', 'Privacy Enquiry'],
  ];
  return <Page title="Contact" path="/contact" eyebrow="Get in touch" description="Email is the contact route for enquiries, submissions, corrections, right-of-reply requests and privacy questions.">
    <Section title="Email Nazar-e-Awam"><p><a href="mailto:genz@nazar-e-awam.com">genz@nazar-e-awam.com</a></p><p>Choose the subject that best describes your message. Please do not send passwords, one-time codes, banking credentials, unnecessary identity documents or highly sensitive information through ordinary email.</p>{emailLinks.map(([label,subject])=><p key={label}><MailLink subject={subject}>{label} — email us</MailLink></p>)}</Section>
    <Section title="No office or phone listing"><p>No telephone number or physical office address is published here.</p></Section>
  </Page>;
}

export function Accessibility() {
  return <Page title="Accessibility" path="/accessibility" eyebrow="Access for everyone" description="We aim to make this publication readable and usable across devices, assistive technologies and different ways of navigating.">
    <Section title="Our accessibility goals"><ul><li>Keyboard navigation and visible focus states.</li><li>Semantic page structure and a clear heading hierarchy.</li><li>Descriptive link text and labels for search controls.</li><li>Readable colour contrast, line lengths and responsive layouts.</li><li>Meaningful alternative text for informative images.</li><li>Respect for reduced-motion preferences.</li></ul><p>We will address barriers as they are identified; this statement is an ongoing goal, not a claim of formal certification.</p></Section>
    <Section title="Report an access issue"><p>Tell us which page or feature is difficult to use and, if possible, what device or assistive technology is involved. <MailLink subject="Accessibility Issue">Email an accessibility issue</MailLink>.</p></Section>
  </Page>;
}

const pages = [
  ['/','Home'], ['/cases','Verified cases'], ['/official-responses','Official responses'], ['/submit','Submit a public problem'], ['/about','About Nazar-e-Awam'], ['/editorial-policy','Editorial policy'], ['/verification','Verification methodology'], ['/right-of-reply','Right of reply'], ['/corrections','Corrections policy'], ['/privacy','Privacy policy'], ['/terms','Terms of use'], ['/governance','Governance and transparency'], ['/funding','Funding disclosure'], ['/open-source','Open-source project'], ['/contact','Contact'], ['/accessibility','Accessibility'], ['/sitemap','HTML sitemap'],
];
export function Sitemap() {
  return <Page title="Sitemap" path="/sitemap" eyebrow="Find your way" description="A list of the public pages currently available on this site.">
    <Section title="Public pages"><ul>{pages.map(([path,label])=><li key={path}><Link to={path}>{label}</Link></li>)}</ul></Section>
    <Section title="Published reports">{articles.length ? <ul>{articles.map(item=><li key={item.slug}><Link to={`/cases/${item.slug}`}>{item.title}</Link></li>)}</ul> : <p>No verified reports have been published yet.</p>}</Section>
  </Page>;
}

export function NotFound() {
  return <><Metadata title="Page not found" path="/404" /><section className="container not-found"><div className="eyebrow">404 · Page not found</div><h1>That page is not in the record.</h1><p className="lead">The address may be incorrect, or the page may no longer be available.</p><div className="actions"><Link to="/" className="button">Home</Link><Link to="/cases" className="button secondary">Verified cases</Link><Link to="/submit" className="button secondary">Submit a problem</Link><Link to="/contact" className="button secondary">Contact</Link></div></section></>;
}
