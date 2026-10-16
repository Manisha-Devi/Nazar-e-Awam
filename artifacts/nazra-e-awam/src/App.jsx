import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PageLayout } from './components/Shell';
import Home from './pages/Home';
import { Cases, ReportDetails } from './pages/Cases';
import OfficialResponses from './pages/OfficialResponses';
import { Accessibility, About, Contact, Corrections, EditorialPolicy, Funding, Governance, NotFound, Nonprofit, Privacy, RightOfReply, Sitemap, Submit, Terms, Verification } from './pages/InformationPages';

export default function App() {
  return <BrowserRouter><PageLayout><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cases" element={<Cases />} />
    <Route path="/cases/:slug" element={<ReportDetails />} />
    <Route path="/official-responses" element={<OfficialResponses />} />
    <Route path="/submit" element={<Submit />} />
    <Route path="/about" element={<About />} />
    <Route path="/editorial-policy" element={<EditorialPolicy />} />
    <Route path="/verification" element={<Verification />} />
    <Route path="/right-of-reply" element={<RightOfReply />} />
    <Route path="/corrections" element={<Corrections />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/governance" element={<Governance />} />
    <Route path="/funding" element={<Funding />} />
    <Route path="/nonprofit" element={<Nonprofit />} />
    <Route path="/open-source" element={<Navigate to="/nonprofit" replace />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/accessibility" element={<Accessibility />} />
    <Route path="/sitemap" element={<Sitemap />} />
    <Route path="*" element={<NotFound />} />
  </Routes></PageLayout></BrowserRouter>;
}
