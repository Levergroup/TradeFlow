import { PricingCards } from '@/components/PricingCards';

export function PricingSection() {
  return (
    <section id="pricing" className="section">
      <div className="container-tf">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">
            Simple Pricing for Hard Workers. Cancel Anytime.
          </h2>
          <p className="mt-4 text-muted">
            Less than one hour of your billable rate per month. It pays for itself
            with the first quote you don&apos;t lose.
          </p>
        </div>

        <div className="mt-12">
          <PricingCards />
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          14-day free trial · No credit card required · Month-to-month
        </p>
      </div>
    </section>
  );
}
