/**
 * Feature comparison matrix for /features. Each cell is either included (with an
 * optional qualifier note), not included, or a plain text value (e.g. user
 * counts, support level).
 */

export type Cell =
  | { kind: 'yes'; note?: string }
  | { kind: 'no' }
  | { kind: 'text'; value: string };

const y = (note?: string): Cell => ({ kind: 'yes', note });
const n = (): Cell => ({ kind: 'no' });
const t = (value: string): Cell => ({ kind: 'text', value });

export type FeatureRow = {
  feature: string;
  description?: string;
  solo: Cell;
  crew: Cell;
  pro: Cell;
};

export type FeatureCategory = { name: string; rows: FeatureRow[] };

export const featureMatrix: FeatureCategory[] = [
  {
    name: 'Website & Lead Generation',
    rows: [
      {
        feature: 'Professional Trade Website',
        description:
          'SEO-optimized, mobile-first, built for your trade. Ranks on Google. Captures bookings 24/7.',
        solo: y('Included (trade-specific template)'),
        crew: y('Included (trade-specific template)'),
        pro: y('Premium (advanced SEO + conversion optimization)'),
      },
      {
        feature: 'Online Booking Form',
        description:
          'Customers book directly from your website into your calendar. No phone tag.',
        solo: y(),
        crew: y(),
        pro: y(),
      },
      {
        feature: 'Local SEO Setup',
        description:
          'Your suburb, your trade, page one of Google. Built in from day one.',
        solo: y('Basic local SEO'),
        crew: y('Enhanced local SEO'),
        pro: y('Advanced local SEO + reputation signals'),
      },
      {
        feature: 'Lead Capture CRM',
        description:
          'Every lead from your website saved automatically. Never lose a prospect again.',
        solo: y('Basic'),
        crew: y('Full CRM'),
        pro: y('Full CRM + automation'),
      },
    ],
  },
  {
    name: 'Job Management',
    rows: [
      {
        feature: 'Drag-and-Drop Scheduler',
        description:
          'See your whole week. Move jobs. Crew gets notified automatically.',
        solo: y(),
        crew: y(),
        pro: y(),
      },
      {
        feature: 'Unlimited Clients & Jobs',
        description: 'No caps on how many clients or jobs you can manage.',
        solo: y(),
        crew: y(),
        pro: y(),
      },
      {
        feature: 'Job Status Tracking',
        description:
          'Scheduled → In Progress → Complete. Know where every job stands at a glance.',
        solo: y(),
        crew: y(),
        pro: y(),
      },
      {
        feature: 'Customer Job History',
        description:
          'Full history of every job, quote, and invoice per customer. One tap to look up any client.',
        solo: y(),
        crew: y(),
        pro: y(),
      },
    ],
  },
  {
    name: 'Quoting & Invoicing',
    rows: [
      {
        feature: 'Digital Quotes',
        description:
          'Build a line-item quote on your phone in 90 seconds. Send before you leave the driveway.',
        solo: y(),
        crew: y(),
        pro: y(),
      },
      {
        feature: 'E-Signature Approval',
        description:
          'Customer approves the quote with a digital signature. Legally binding. No printing.',
        solo: y(),
        crew: y(),
        pro: y(),
      },
      {
        feature: 'Quote-to-Invoice Conversion',
        description:
          'Tap once to turn an approved quote into an invoice. Zero data entry.',
        solo: y(),
        crew: y(),
        pro: y(),
      },
      {
        feature: 'Automatic Invoicing',
        description:
          'Invoice auto-generates the moment you mark a job complete.',
        solo: y(),
        crew: y(),
        pro: y(),
      },
      {
        feature: 'Quote Follow-Up Automation',
        description:
          "If a quote isn't opened in 24 hours, an automatic reminder goes out. Stop losing jobs to silence.",
        solo: n(),
        crew: y(),
        pro: y(),
      },
    ],
  },
  {
    name: 'Payments',
    rows: [
      {
        feature: 'Card Payments (Stripe)',
        description:
          'Accept card on site or via payment link. Funds deposited next business day.',
        solo: y(),
        crew: y(),
        pro: y(),
      },
      {
        feature: 'Text-to-Pay',
        description:
          'Send a payment link via SMS. Customer pays from their phone. Get paid before you drive away.',
        solo: y(),
        crew: y(),
        pro: y(),
      },
      {
        feature: 'Automated Payment Reminders',
        description:
          "Overdue invoice? Automated SMS reminder goes out so you don't have to chase anyone.",
        solo: n(),
        crew: y(),
        pro: y(),
      },
      {
        feature: 'QuickBooks Export',
        description:
          'Export all jobs, invoices, and payments directly to QuickBooks for your accountant.',
        solo: n(),
        crew: y(),
        pro: y(),
      },
    ],
  },
  {
    name: 'Crew & Field',
    rows: [
      {
        feature: 'Field Worker Mobile App',
        description:
          'Your crew sees their jobs, taps start, taps done, takes photos. Works on any phone.',
        solo: n(),
        crew: y('Up to 5 users'),
        pro: y('Up to 10 users'),
      },
      {
        feature: 'Number of Users',
        description:
          'Owner plus crew members and office staff who can access the platform.',
        solo: t('1 user'),
        crew: t('Up to 5 users'),
        pro: t('Up to 10 users'),
      },
      {
        feature: 'Photo & Receipt Capture',
        description:
          'Crew takes before/after photos and receipt photos tied directly to the job record.',
        solo: n(),
        crew: y(),
        pro: y(),
      },
      {
        feature: 'GPS Job Check-In',
        description:
          'Crew checks in via GPS when they arrive. You see it in real time on your dashboard.',
        solo: n(),
        crew: y(),
        pro: y(),
      },
      {
        feature: 'Route Optimization',
        description:
          'Best route for multiple jobs in a day. Less windshield time, more billable time.',
        solo: n(),
        crew: y(),
        pro: y(),
      },
      {
        feature: 'Offline Mode',
        description:
          'Field app works without signal. Syncs automatically when connection returns.',
        solo: n(),
        crew: y(),
        pro: y(),
      },
    ],
  },
  {
    name: 'Customer Communications',
    rows: [
      {
        feature: 'Automatic SMS — On My Way',
        description:
          "Customer gets a text when the tech is en route. No more 'when are you coming?' calls.",
        solo: y('Basic'),
        crew: y('Automated'),
        pro: y('Automated + custom message'),
      },
      {
        feature: 'Job Completion SMS',
        description:
          'Customer gets a confirmation text when job is marked complete.',
        solo: y(),
        crew: y(),
        pro: y(),
      },
      {
        feature: 'Automated Review Requests',
        description:
          '24 hours after every completed job, customer gets a personal SMS asking for a Google review. Your profile builds itself.',
        solo: n(),
        crew: y(),
        pro: y(),
      },
      {
        feature: 'Automated Follow-Up Sequences',
        description:
          'Re-engagement sequences for dormant customers, upsell reminders, seasonal campaigns.',
        solo: n(),
        crew: n(),
        pro: y(),
      },
    ],
  },
  {
    name: 'Advanced (Pro Only)',
    rows: [
      {
        feature: 'AI Receptionist',
        description:
          'Answers calls, qualifies leads, and books jobs automatically. Never miss a lead at 9pm again.',
        solo: n(),
        crew: n(),
        pro: y(),
      },
      {
        feature: 'Reputation Dashboard',
        description:
          'Track all your Google reviews, ratings, and reputation signals across platforms in one view.',
        solo: n(),
        crew: n(),
        pro: y(),
      },
      {
        feature: 'Multi-Location Support',
        description:
          'Running more than one service area or location? Manage all of them from one account.',
        solo: n(),
        crew: n(),
        pro: y(),
      },
      {
        feature: 'Advanced Profit Reporting',
        description:
          'Revenue, costs, and profit per job, per crew member, per month. Know your numbers.',
        solo: n(),
        crew: n(),
        pro: y(),
      },
      {
        feature: 'Timesheet & Payroll Export',
        description:
          'Track crew hours per job. Export for payroll processing.',
        solo: n(),
        crew: n(),
        pro: y(),
      },
      {
        feature: 'Dedicated Onboarding',
        description:
          'A real human walks you through setup on a call. No YouTube tutorials required.',
        solo: n(),
        crew: n(),
        pro: y(),
      },
    ],
  },
  {
    name: 'Support',
    rows: [
      {
        feature: 'Support Level',
        solo: t('Email support'),
        crew: t('Priority email + chat'),
        pro: t('Dedicated onboarding + priority support'),
      },
      {
        feature: 'Free Trial',
        solo: y('14 days, no credit card'),
        crew: y('14 days, no credit card'),
        pro: y('14 days, no credit card'),
      },
    ],
  },
];

export const featureFaqs = [
  {
    question: 'Is the website really free or is there a catch?',
    answer:
      "No catch. Every TradeFlow plan includes a professional trade website built and hosted by us. You don't pay extra for it, and it doesn't disappear if you cancel — you own your content. The difference between tiers is the SEO depth and conversion optimization baked into the template.",
  },
  {
    question: 'What trades does TradeFlow work for?',
    answer:
      'Any trade where you quote jobs, schedule work, and invoice customers. Electricians, plumbers, HVAC techs, handymen, landscapers, roofers, painters, concreters, pest control, pool service, and more. If you bill by the job, TradeFlow works for you.',
  },
  {
    question: 'Will my crew actually use the mobile app?',
    answer:
      "The field app is three things: here are your jobs today, tap when you start, tap when you're done. That's it. If they can use Facebook, they can use TradeFlow. And if a crew member doesn't use it? You still run everything from your dashboard — nothing breaks.",
  },
  {
    question: 'Can I start on Solo and upgrade later?',
    answer:
      'Yes. Your data, your website, your clients, and your job history all carry over. Upgrading takes 30 seconds. Most people start on Solo and upgrade to Crew when they hire their first helper.',
  },
  {
    question: 'Does it integrate with QuickBooks?',
    answer:
      'QuickBooks export is included in Crew and Pro. Solo users can export invoices as CSV for manual import. Full two-way QuickBooks sync is on the Pro roadmap.',
  },
  {
    question: 'What happens to my website if I cancel?',
    answer:
      "You keep your content and can export it. We'll give you 30 days notice before anything changes. We'd rather you stay because TradeFlow works — not because you're locked in.",
  },
];
