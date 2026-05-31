import type { Metadata } from 'next';
import Script from 'next/script';
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
import { organizationSchema, websiteSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';

const fontDisplay = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const fontBody = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.parentCompany }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    site: site.social.twitterHandle,
  },
  other: {
    'ai-content-declaration': `${site.url}/llms.txt`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = site.analytics.gtmId;

  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <head>
        <link rel="llms" href={`${site.url}/llms.txt`} />
        <link rel="llms-full" href={`${site.url}/llms-full.txt`} />
      </head>
      <body>
        {/* GTM noscript — must be the FIRST child of <body>. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>

        <JsonLd data={[organizationSchema(), websiteSchema()]} />

        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieConsent />

        {/* GTM — afterInteractive ONLY. Never also load a raw GA4 script
            (double-firing). GA4 is configured inside GTM as a Google Tag. */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      </body>
    </html>
  );
}
