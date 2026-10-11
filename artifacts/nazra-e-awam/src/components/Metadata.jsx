import { useEffect } from 'react';

const SITE = 'https://nazra-e-awam.com';

export default function Metadata({ title, description, path = '/' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Nazar-e-Awam` : 'Nazar-e-Awam — Public Problems. Verified Facts. Official Responses.';
    document.title = fullTitle;
    const canonicalUrl = `${SITE}${path === '/' ? '/' : path}`;
    const setMeta = (selector, attribute, value) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const [key, content] = attribute;
        element.setAttribute(key, content);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };
    const summary = description || 'An independent public-interest platform examining public concerns through evidence, verification and the responses of concerned authorities.';
    setMeta('meta[name="description"]', ['name', 'description'], summary);
    setMeta('meta[property="og:title"]', ['property', 'og:title'], fullTitle);
    setMeta('meta[property="og:description"]', ['property', 'og:description'], summary);
    setMeta('meta[property="og:url"]', ['property', 'og:url'], canonicalUrl);
    setMeta('meta[name="twitter:title"]', ['name', 'twitter:title'], fullTitle);
    setMeta('meta[name="twitter:description"]', ['name', 'twitter:description'], summary);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [title, description, path]);
  return null;
}
