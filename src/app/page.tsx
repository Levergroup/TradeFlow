import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { homeFaqs } from '@/lib/faq';
import {
  softwareApplicationSchema,
  faqSchema,
} from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Hero } from '@/components/home/Hero';
import { PainChain } from '@/components/home/PainChain';
import { BeforeAfter } from '@/components/home/BeforeAfter';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Features } from '@/components/home/Features';
import { SocialProof } from '@/components/home/SocialProof';
import { PricingSection } from '@/components/home/PricingSection';
import { LeadMagnet } from '@/components/home/LeadMagnet';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/home/FinalCTA';
import { Divider } from '@/components/Divider';

export const metadata: Metadata = pageMetadata({
  title: 'TradeFlow — Field Service Management Software for Small Business',
  description:
    'TradeFlow is all-in-one field service management software for small business. Build a website, book jobs, send quotes, and get paid from one platform. Setup in 20 minutes.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[softwareApplicationSchema(), faqSchema(homeFaqs)]} />
      <Hero />
      <Divider />
      <PainChain />
      <Divider />
      <BeforeAfter />
      <Divider />
      <HowItWorks />
      <Divider />
      <Features />
      <Divider />
      <SocialProof />
      <Divider />
      <PricingSection />
      <Divider />
      <LeadMagnet />
      <Divider />
      <FAQ
        items={homeFaqs}
        subtitle="Everything you need to know before you start your free trial."
      />
      <Divider />
      <FinalCTA />
    </>
  );
}
