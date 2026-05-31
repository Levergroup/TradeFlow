/**
 * Avatar landing page data (SOP Section 5.1). Each avatar is a complete
 * standalone landing page — a visitor who lands directly on it has everything
 * needed to convert, with ALL copy in that avatar's specific language.
 */

export type Avatar = {
  slug: string;
  persona: string; // first-name persona
  role: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroHeadline: string;
  heroSub: string;
  proofStat: string;
  problems: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  benefits: { title: string; body: string }[];
  testimonial: { quote: string; name: string; role: string };
  pricingFraming: string;
  faqs: { question: string; answer: string }[];
  finalCta: { headline: string; sub: string };
};

export const avatars: Avatar[] = [
  {
    slug: 'solo-operator',
    persona: 'Mike',
    role: 'Solo Owner-Operator',
    metaTitle: 'TradeFlow for Solo Tradespeople — Run Your Whole Business From Your Truck',
    metaDescription:
      'You do the work AND run the business. TradeFlow is field service management software for small business that handles your website, quotes, scheduling, and payments — set up in 20 minutes.',
    badge: 'For Solo Owner-Operators',
    heroHeadline:
      "You're the electrician, the salesman, the scheduler, and the bookkeeper. TradeFlow takes the office work off your plate.",
    heroSub:
      'Quote on-site, get booked through your own website, and get paid by text — so you can spend your nights with your family instead of catching up on paperwork.',
    proofStat: 'Built for the 5M+ solo tradespeople running a business out of one truck',
    problems: [
      {
        title: 'The paperwork starts after the work ends',
        body: "You finish the job at 5, then spend two hours writing quotes, chasing invoices, and texting tomorrow's customers. The admin never stops.",
      },
      {
        title: 'Leads slip through the cracks',
        body: 'A missed call or a form you forgot to follow up on is a job — and a paycheck — gone. You can\'t answer the phone with your hands in a panel.',
      },
      {
        title: 'You look smaller than the work you do',
        body: 'Handwritten quotes and "I\'ll mail you an invoice" make great work look unprofessional. Customers hesitate, and some go with the bigger-looking outfit.',
      },
    ],
    steps: [
      {
        title: 'Capture',
        body: 'Your TradeFlow website books jobs while you work, and missed calls turn into texts you can answer between jobs.',
      },
      {
        title: 'Execute',
        body: 'Build a professional line-item quote on your phone before you leave the driveway and get it signed on the spot.',
      },
      {
        title: 'Collect',
        body: 'Mark the job done and the invoice sends itself. The customer taps to pay by card or text — money in days, not weeks.',
      },
    ],
    benefits: [
      { title: 'Win the job before you leave', body: 'On-site quotes with e-signature close while you\'re still standing in the kitchen.' },
      { title: 'Never lose a lead again', body: 'Website booking and missed-call text-back catch the work you used to miss.' },
      { title: 'Look like a real company', body: 'Branded website, quotes, and invoices make a one-person shop look established.' },
      { title: 'Get paid the same day', body: 'Card and text payments mean no more waiting on checks or chasing customers.' },
      { title: 'Your evenings back', body: 'Auto-invoicing and reminders kill the nightly paperwork pile.' },
      { title: 'One subscription, not five', body: 'Replace your website host, scheduler, invoicing app, and payment tool with one bill.' },
    ],
    testimonial: {
      quote:
        'I quote from my phone before I pull out of the driveway, and half the time I\'m paid before I get home. I got my nights back.',
      name: '[Replace with real testimonial]',
      role: 'Solo Electrician',
    },
    pricingFraming:
      'TradeFlow Solo is $39/month — less than one service call. It pays for itself the first time you don\'t lose a quote or forget to send an invoice.',
    faqs: [
      {
        question: "I'm a one-person shop — is this overkill for me?",
        answer:
          'Not at all. Solo is built specifically for one-person businesses. You get exactly what you need — website, quotes, scheduling, invoicing, and payments — without enterprise features (or enterprise prices) you\'d never touch.',
      },
      {
        question: 'Can I really set it up myself in 20 minutes?',
        answer:
          'Yes. You answer a few questions about your trade and TradeFlow generates your website and booking page for you. No designer, no developer, no manual. And support is one message away if you want a hand.',
      },
      {
        question: 'What if I get a lead while I\'m on a job?',
        answer:
          'Bookings from your website land straight on your calendar, and missed calls can text the customer back automatically — so you capture the work without stopping what you\'re doing.',
      },
      {
        question: 'Do I need a separate website?',
        answer:
          'No. A trade-specific, SEO-ready website with online booking is included in your plan. It replaces a Wix or Squarespace site and actually feeds jobs into the same system you run everything from.',
      },
    ],
    finalCta: {
      headline: 'Get your evenings back. Let TradeFlow run the office.',
      sub: 'Set up in 20 minutes. No credit card. Start taking jobs today.',
    },
  },
  {
    slug: 'office-manager',
    persona: 'Sarah',
    role: 'Office Manager / Dispatcher',
    metaTitle: 'TradeFlow for Office Managers — Stop Juggling Scheduling and Invoicing',
    metaDescription:
      'Running the office for a small crew? TradeFlow puts scheduling, dispatch, quoting, and invoicing in one place — so nothing falls through the cracks between the field and the books.',
    badge: 'For Office Managers & Dispatchers',
    heroHeadline:
      'You keep the whole crew running. TradeFlow gives you one screen instead of ten tabs.',
    heroSub:
      'Schedule jobs, dispatch the crew, send quotes, and invoice customers from one platform — no more re-typing the same job into four different tools.',
    proofStat: 'Trusted to coordinate scheduling and invoicing for 2–5 person crews',
    problems: [
      {
        title: 'You are the glue between field and office',
        body: 'Every job lives in a text, a calendar, a spreadsheet, and an invoice — and you\'re the one copying it between all four, all day.',
      },
      {
        title: 'Dispatch is a guessing game',
        body: 'Where\'s the crew? Did they finish? Is the next customer confirmed? You\'re calling techs instead of seeing it on a screen.',
      },
      {
        title: 'Invoicing falls behind the work',
        body: 'Jobs get done faster than they get billed. Revenue sits uninvoiced because the paperwork pile never shrinks.',
      },
    ],
    steps: [
      {
        title: 'Capture',
        body: 'Leads from the website and phone land in one inbox. You assign and schedule them in seconds — no re-typing.',
      },
      {
        title: 'Execute',
        body: 'Dispatch the crew to their phones, see job status update in real time, and send quotes for approval without leaving the screen.',
      },
      {
        title: 'Collect',
        body: 'Completed jobs auto-generate invoices. You review, send, and watch payments come in — no end-of-day data entry.',
      },
    ],
    benefits: [
      { title: 'One screen, not ten tabs', body: 'Scheduling, dispatch, quoting, and invoicing live in one place you actually control.' },
      { title: 'See the whole crew at a glance', body: 'Real-time job status means you stop calling techs to ask "are you done yet?"' },
      { title: 'Invoice the moment a job closes', body: 'Auto-generated invoices keep billing in lockstep with the work.' },
      { title: 'No more double entry', body: 'Enter a job once. It flows from lead to schedule to quote to invoice automatically.' },
      { title: 'Fewer scheduling mistakes', body: 'Drag-and-drop calendar and route optimization cut the double-bookings and backtracking.' },
      { title: 'Clean handoff to the books', body: 'QuickBooks export means month-end reconciliation takes minutes, not days.' },
    ],
    testimonial: {
      quote:
        'I went from five browser tabs and a paper calendar to one screen. I can see every job, every tech, and every unpaid invoice in one glance.',
      name: '[Replace with real testimonial]',
      role: 'Office Manager, 4-person HVAC crew',
    },
    pricingFraming:
      'TradeFlow Crew is $79/month for up to 5 users — far less than the hours you lose to double entry and the revenue that sits uninvoiced every week.',
    faqs: [
      {
        question: 'Will this replace the tools we already use?',
        answer:
          'For most small crews, yes. TradeFlow combines your scheduler, dispatch tool, quoting, and invoicing in one place, and exports to QuickBooks — so you can retire several subscriptions and stop copying data between them.',
      },
      {
        question: 'How hard is it to get the crew using the app?',
        answer:
          'The field app is a lightweight mobile PWA — no app-store download. Techs just see their jobs, capture photos, and tap to mark work complete. Because their schedule and pay-tied invoices flow through it, they have a reason to keep it open.',
      },
      {
        question: 'Can I control who sees what?',
        answer:
          'Yes. You manage scheduling, quoting, and invoicing from the office view, while field users see only their assigned jobs — keeping things simple for the crew and organized for you.',
      },
      {
        question: 'How does invoicing stay accurate?',
        answer:
          'Invoices generate automatically from the completed job — the line items, photos, and notes the crew captured carry straight through. You review and send, so billing matches the work without manual re-entry.',
      },
    ],
    finalCta: {
      headline: 'Run the whole operation from one screen.',
      sub: 'Bring scheduling, dispatch, and invoicing together. Free for 14 days.',
    },
  },
  {
    slug: 'crew-chief',
    persona: 'Devin',
    role: 'Growing Crew Chief',
    metaTitle: 'TradeFlow for Growing Crews — Scale From One Truck to Many Without the Chaos',
    metaDescription:
      'Scaling past one crew? TradeFlow gives you dispatch, profit tracking, and professional systems to grow — without the enterprise price of ServiceTitan.',
    badge: 'For Growing Crew Chiefs',
    heroHeadline:
      "You're adding trucks, but the systems that got you here won't get you there. TradeFlow scales with you.",
    heroSub:
      'Dispatch multiple crews, track profit per job, and run professional systems that make you look like the established outfit you\'re becoming — without enterprise software prices.',
    proofStat: 'Built for crew chiefs scaling from one truck to multiple teams',
    problems: [
      {
        title: 'What worked at one truck breaks at three',
        body: 'Group texts and a shared calendar fall apart fast when you\'re dispatching multiple crews to multiple jobs every day.',
      },
      {
        title: 'You can\'t see your real margins',
        body: 'Revenue is up, but is profit? Without job-level cost tracking, you\'re flying blind on which jobs and crews actually make money.',
      },
      {
        title: 'Enterprise tools want enterprise money',
        body: 'ServiceTitan is built — and priced — for big shops. You need professional systems now, not a contract that eats your growth.',
      },
    ],
    steps: [
      {
        title: 'Capture',
        body: 'Centralize every lead from your website, ads, and referrals, then route them to the right crew automatically.',
      },
      {
        title: 'Execute',
        body: 'Dispatch multiple crews with optimized routes, track job status live, and keep quotes and approvals moving without bottlenecking on you.',
      },
      {
        title: 'Collect',
        body: 'Auto-invoice on completion, capture costs against each job, and see profit per job and per crew in your reporting dashboard.',
      },
    ],
    benefits: [
      { title: 'Dispatch multiple crews', body: 'Assign and route several teams a day without the group-text chaos.' },
      { title: 'Profit per job, not just revenue', body: 'Tie expenses and labor to each job so you finally see what actually pays.' },
      { title: 'Systems that look the part', body: 'Professional quotes, invoices, and follow-ups that match the bigger competitors.' },
      { title: 'Automation that scales', body: 'Sequences for reviews, reminders, and follow-up run without adding office staff.' },
      { title: 'Reputation on autopilot', body: 'Automated review requests build the five-star presence that wins bigger jobs.' },
      { title: 'Grow without a contract', body: 'Month-to-month pricing that scales with your trucks — not a multi-year enterprise lock-in.' },
    ],
    testimonial: {
      quote:
        'We went from one truck to four without drowning. I can dispatch every crew and actually see which jobs make money — something I never had before.',
      name: '[Replace with real testimonial]',
      role: 'Owner, growing plumbing company',
    },
    pricingFraming:
      'TradeFlow Pro is $149/month for up to 10 users with profit reporting and automation — a fraction of what enterprise platforms charge, with no contract to sign.',
    faqs: [
      {
        question: 'How is this different from ServiceTitan?',
        answer:
          'ServiceTitan is powerful but built and priced for large shops — long contracts, steep onboarding, and a cost that punishes growth. TradeFlow gives growing 5–10 person operations the dispatch, automation, and profit tracking they need, month-to-month, at a fraction of the price.',
      },
      {
        question: 'Can it handle multiple crews and locations?',
        answer:
          'Yes. Pro supports multiple crews and multi-location operations, with dispatch and routing built to coordinate several teams a day from one dashboard.',
      },
      {
        question: 'Will I be able to see profit, not just revenue?',
        answer:
          'Yes. Tie expenses, receipts, and labor to each job, and the reporting dashboard shows profit per job and per crew — so you can double down on what works and fix what doesn\'t.',
      },
      {
        question: 'Will switching disrupt my crews?',
        answer:
          'You can migrate at your pace, and the field app is simple enough that crews pick it up in a day. Support helps you get set up so the transition doesn\'t cost you jobs.',
      },
    ],
    finalCta: {
      headline: 'Scale your crews without scaling the chaos.',
      sub: 'Professional systems and real profit visibility. Try it free for 14 days.',
    },
  },
  {
    slug: 'seasoned-tradesperson',
    persona: 'Linda',
    role: 'Seasoned Tradesperson Going Independent',
    metaTitle: 'TradeFlow for Independent Tradespeople — Simple Software, Real Human Support',
    metaDescription:
      'Going independent after years in the trade? TradeFlow is simple field service management software with real human support — get your own website, quotes, and payments set up in 20 minutes.',
    badge: 'For Independent & Transitioning Tradespeople',
    heroHeadline:
      'Decades of know-how, going out on your own. TradeFlow handles the business side so you can do the work you love.',
    heroSub:
      'A professional website, easy quoting, and get-paid-fast invoicing — built so plainly that you\'ll be up and running today, with real people to call when you need them.',
    proofStat: 'Made for tradespeople who know their craft, not business software',
    problems: [
      {
        title: 'You know the trade, not the tech',
        body: 'After years working for someone else, the tools side feels like a foreign language — and most software assumes you already speak it.',
      },
      {
        title: 'Starting from scratch is daunting',
        body: 'Website, scheduling, quotes, getting paid — going independent means setting up everything at once, and that\'s overwhelming.',
      },
      {
        title: 'You want a real person, not a chatbot',
        body: 'When something doesn\'t work, you want to talk to someone who helps — not dig through help articles or wait on a bot.',
      },
    ],
    steps: [
      {
        title: 'Capture',
        body: 'Answer a few simple questions and TradeFlow builds your website and booking page for you — customers can find and book you right away.',
      },
      {
        title: 'Execute',
        body: 'Create a clean, professional quote in plain steps, schedule the visit, and keep everything in one easy place.',
      },
      {
        title: 'Collect',
        body: 'When the job\'s done, the invoice is ready to send and your customer pays by card or text. No accounting degree required.',
      },
    ],
    benefits: [
      { title: 'Plain-language everything', body: 'No jargon, no clutter — buttons that say what they do, built for people new to software.' },
      { title: 'Set up in 20 minutes', body: 'Your website and booking page are generated for you. No designer, no learning curve.' },
      { title: 'Real human support', body: 'Talk to actual people who help you get set up and answer questions when you need them.' },
      { title: 'Look established from day one', body: 'A professional website, quotes, and invoices that earn trust the moment you go out on your own.' },
      { title: 'Get paid without the hassle', body: 'Customers tap to pay by card or text — no invoices to chase, no checks to deposit.' },
      { title: 'One simple monthly price', body: 'Everything in one place for one predictable bill — no piecing tools together.' },
    ],
    testimonial: {
      quote:
        'I spent 30 years as a plumber, never touched business software. I had my website and first booking the same afternoon — and a real person walked me through it.',
      name: '[Replace with real testimonial]',
      role: 'Independent Plumber',
    },
    pricingFraming:
      'TradeFlow Solo is $39/month — one simple price for your website, quoting, scheduling, and payments. No surprises, cancel anytime.',
    faqs: [
      {
        question: "I'm honestly not good with computers. Can I use this?",
        answer:
          'Yes — this is built for exactly that. The setup walks you through every step in plain language, the screens are simple, and real human support is one message or call away whenever you get stuck.',
      },
      {
        question: 'Do I have to build my own website?',
        answer:
          'No. You answer a few questions about your trade and TradeFlow builds a professional, mobile-friendly website with online booking for you. You can tweak it, but you don\'t have to.',
      },
      {
        question: 'What if I need help?',
        answer:
          'You get real human support, not just a chatbot. We help you get set up and answer your questions so you\'re never stuck on your own.',
      },
      {
        question: 'Can I start small and keep it simple?',
        answer:
          'Absolutely. The Solo plan gives you everything you need to run independently at one simple price, and you can cancel anytime. No contracts, no pressure to upgrade.',
      },
    ],
    finalCta: {
      headline: 'Going independent? Get set up today — we\'ll help.',
      sub: 'Simple software, real human support. Free for 14 days, no credit card.',
    },
  },
];

export function getAvatar(slug: string): Avatar | undefined {
  return avatars.find((a) => a.slug === slug);
}
