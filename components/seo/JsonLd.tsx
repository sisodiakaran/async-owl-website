import { FEATURED_PROJECTS } from '@/lib/content'

const BASE_URL = 'https://asyncowl.com'
const PERSON_ID = `${BASE_URL}/#person`

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Karan Singh Sisodia',
  alternateName: 'AsyncOwl',
  url: BASE_URL,
  image: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/opengraph-image`,
    width: 1200,
    height: 630,
  },
  jobTitle: 'Technical Lead',
  worksFor: {
    '@type': 'Organization',
    name: 'LuminoGuru Pvt Ltd',
    url: 'https://luminoguru.com',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Rajasthan Technical University',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kota',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chandigarh',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'contact',
    url: `${BASE_URL}/#contact`,
  },
  sameAs: [
    'https://github.com/sisodiakaran',
    'https://www.linkedin.com/in/karansinghsisodia',
    'https://twitter.com/sisodiakaran',
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Internet of Things',
    'Software Architecture',
    'Embedded Systems',
    'Node-RED',
    'Python',
    'JavaScript',
    'ESP32',
    'Agentic AI Systems',
    'Big Data',
    'Neo4j',
    'VOIP',
    'Android Development',
  ],
  knowsLanguage: [
    { '@type': 'Language', name: 'Hindi' },
    { '@type': 'Language', name: 'Punjabi' },
    { '@type': 'Language', name: 'English' },
    { '@type': 'Language', name: 'Portuguese' },
  ],
  description:
    "AI & Software Engineering Professional with 16+ years of experience bridging software and hardware. Technical Lead at LuminoGuru Pvt Ltd. Open source contributor. Known online as @AsyncOwl.",
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Karan Singh Sisodia — AsyncOwl',
  description:
    'Personal portfolio of Karan Singh Sisodia (@AsyncOwl), AI & Software Engineering Professional.',
  author: { '@id': PERSON_ID },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  dateCreated: '2025-01-01T00:00:00Z',
  dateModified: '2026-01-01T00:00:00Z',
  url: BASE_URL,
  name: 'Karan Singh Sisodia (@AsyncOwl) — Portfolio',
  mainEntity: { '@id': PERSON_ID },
  hasPart: FEATURED_PROJECTS.map((p) => ({
    '@type': 'CreativeWork',
    name: p.name,
    description: p.description,
    url: p.url,
    author: { '@id': PERSON_ID },
    programmingLanguage: p.language,
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Projects', item: `${BASE_URL}/#projects` },
    { '@type': 'ListItem', position: 3, name: 'Contact', item: `${BASE_URL}/#contact` },
  ],
}

/** Escapes HTML-sensitive characters in JSON so it is safe inside a script tag. */
function sanitizeJsonForScript(json: string): string {
  return json.replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026')
}

const schemas = [personSchema, websiteSchema, profilePageSchema, breadcrumbSchema]

export function JsonLd() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: sanitizeJsonForScript(JSON.stringify(schema)),
          }}
        />
      ))}
    </>
  )
}
