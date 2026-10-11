export default function App() {
  return (
    <div className="site-shell" data-testid="page-project-entry">
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#top" data-testid="link-home">
            <span className="brand-mark" aria-hidden="true">S</span>
            <span>AC Sukoon</span>
          </a>
          <span className="topbar-note" data-testid="text-page-context">Project entry point</span>
        </div>
      </header>

      <main id="top" className="page-wrap">
        <section className="intro" aria-labelledby="page-title">
          <div>
            <div className="eyebrow" data-testid="text-project-label">A new foundation</div>
            <h1 id="page-title" data-testid="text-page-title">
              A clear start.<br />
              <span>Room to continue.</span>
            </h1>
            <p className="intro-copy" data-testid="text-intro">
              The AC Sukoon project now has a React and Vite foundation. This page is an honest
              starting point while the original product experience is still to be brought in.
            </p>
            <div className="action-row">
              <a className="action-link" href="#migration" data-testid="link-migration-note">
                Read the migration note
              </a>
              <a className="action-link secondary" href="#foundation" data-testid="link-foundation">
                See the foundation
              </a>
            </div>
          </div>

          <aside className="status-panel" aria-label="Project status" data-testid="card-project-status">
            <div className="status-top">
              <span className="status-label">Current status</span>
              <span className="status-dot" aria-hidden="true" />
            </div>
            <h2 className="status-title" data-testid="status-foundation-ready">Foundation ready</h2>
            <p className="status-detail">
              React 19 and Vite are in place. Original product screens have not been migrated.
            </p>
          </aside>
        </section>

        <section className="foundation" id="foundation" aria-labelledby="foundation-title">
          <div className="section-heading">
            <h2 id="foundation-title" data-testid="text-foundation-title">Project foundation</h2>
            <span className="section-kicker">Technology supplied for this project</span>
          </div>
          <div className="tech-list" aria-label="Project technology" data-testid="list-technology">
            <span className="tech-chip" data-testid="technology-react">React 19</span>
            <span className="tech-chip" data-testid="technology-bootstrap">Bootstrap</span>
            <span className="tech-chip" data-testid="technology-chartjs">Chart.js</span>
            <span className="tech-chip" data-testid="technology-react-chartjs">react-chartjs-2</span>
            <span className="tech-chip" data-testid="technology-swiper">Swiper</span>
          </div>
        </section>

        <section className="migration" id="migration" aria-labelledby="migration-title">
          <div>
            <div className="eyebrow">A note on what’s here</div>
            <h2 id="migration-title" data-testid="text-migration-title">Product screens are not here yet.</h2>
          </div>
          <div className="migration-copy">
            <p data-testid="text-migration-detail">
              The original source and product details were not included with this workspace. Because
              of that, this entry point does not assume what “AC” means or what the product does.
            </p>
            <p>
              No product flows, data, or service claims have been added. This page is a simple
              project introduction—not a preview of the original app.
            </p>
            <div className="honesty-note" data-testid="notice-migration-scope">
              The React/Vite foundation is ready; the original experience still needs its source
              material before it can be represented faithfully.
            </div>
          </div>
        </section>

        <footer className="footer" data-testid="page-footer">
          <span className="footer-name">AC Sukoon</span>
          <span>Project foundation · Original screens not migrated</span>
        </footer>
      </main>
    </div>
  );
}
