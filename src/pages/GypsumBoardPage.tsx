import { CheckCircle2, Layers, DollarSign, LayoutGrid, Clock, Shield } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';a
import { IMAGES, SERVICES } from '@/data/site';
import { Link } from 'react-router-dom';

const SPECIFICATIONS = [
  { label: 'Frame', value: 'Galvanised steel studs and tracks (75mm or 92mm)' },
  { label: 'Boards', value: 'Gypsum board, 12.5mm thickness, both sides' },
  { label: 'Finish', value: 'Jointed, skimmed, and ready for paint or wallpaper' },
  { label: 'Insulation', value: 'Optional Rockwool acoustic infill (50mm)' },
  { label: 'Height', value: 'Up to 4 metres standard; taller on request' },
  { label: 'Fire Rating', value: 'Fire-rated systems available on request' },
];

const BENEFITS = [
  { icon: DollarSign, title: 'Cost-Effective', description: 'More affordable than permanent walls while delivering the same functionality.' },
  { icon: LayoutGrid, title: 'Flexible Design', description: 'Easily reconfigure layouts as your team and space needs evolve.' },
  { icon: Clock, title: 'Quick Installation', description: 'Faster to install than traditional walls, minimising office disruption.' },
  { icon: Shield, title: 'Durable', description: 'Sturdy construction that withstands daily commercial use for years.' },
];

const GYPSUM_FAQS = [
  {
    q: 'How thick is a gypsum board partition?',
    a: 'Standard gypsum board partitions are typically 75mm to 100mm thick, depending on the frame system and whether acoustic insulation is included.',
  },
  {
    q: 'Can gypsum partitions include Rockwool insulation?',
    a: 'Yes. Rockwool is installed within the partition cavity during construction. This combination provides both acoustic insulation and fire-rated performance.',
  },
  {
    q: 'Can gypsum partitions support shelving or wall-mounted screens?',
    a: 'Yes. We reinforce the frame at specific points to support heavier items. Let us know during the site assessment what you plan to mount.',
  },
  {
    q: 'Is gypsum board fire-rated?',
    a: 'Fire-rated gypsum board systems are available and can be specified to meet Singapore fire code requirements for commercial premises.',
  },
];

export default function GypsumBoardPage() {
  // Get service data for this page
  const service = SERVICES.find(s => s.slug === 'gypsum-board-partition');

  return (
    <>
      {/* UPDATED SEO COMPONENT WITH PROPER METADATA */}
      <SEO
        title={service?.seoTitle || 'Gypsum Board Partition Contractor Singapore'}
        description={service?.metaDescription || 'Professional gypsum board partition installation in Singapore. Durable, cost-effective office solutions. Includes optional Rockwool acoustic insulation. Free quote.'}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Office Partitioning', path: '/office-partitioning/' },
          { name: 'Gypsum Board Partition', path: '/gypsum-board-partition/' },
        ]}
        faqs={service?.faqs || GYPSUM_FAQS}
        serviceSchema={service ? { name: service.name, description: service.longDescription } : { name: 'Gypsum Board Partition' }}
      />

      {/* Hero */}
      <section className="relative pt-16 lg:pt-20">
        <div className="relative h-[400px] lg:h-[480px] overflow-hidden">
          <img
            src={IMAGES.gypsumHero}
            alt="Professional gypsum board partition installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900/80 to-brand-800/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-max px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
                Gypsum Board Partition Contractor Singapore
              </h1>
            </div>
          </div>
        </div>
        <Breadcrumb items={[
          { label: 'Home', path: '/' },
          { label: 'Office Partitioning', path: '/office-partitioning/' },
          { label: 'Gypsum Board Partition' },
        ]} />
      </section>

      {/* What Is */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6">What Is a Gypsum Board Partition?</h2>
              <div className="space-y-4 text-base text-charcoal/80 leading-relaxed">
                <p>
                  A gypsum board partition is a non-load-bearing wall system built from a galvanised steel frame clad with gypsum boards on both sides. The frame consists of vertical studs and horizontal tracks, creating a rigid structure that is then boarded, jointed, and finished to a smooth surface ready for paint or wallpaper.
                </p>
                <p>
                  Gypsum partitions are the most common office partitioning choice in Singapore because they offer an excellent balance of cost, speed, and performance. They create solid, private rooms that look and feel like permanent walls, but can be installed in a fraction of the time and removed or reconfigured if your office layout changes.
                </p>
                <p>
                  The cavity between the boards can be filled with Rockwool stone wool insulation, which improves acoustic performance and adds fire resistance. This makes gypsum partitions suitable for meeting rooms, private offices, and any space where sound privacy matters.
                </p>
              </div>
            </div>
            <div className="bg-bg-light rounded-xl p-6 lg:p-8">
              <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-brand" />
                System Specification
              </h3>
              <dl className="space-y-3">
                {SPECIFICATIONS.map((spec, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 pb-3 border-b border-gray-200 last:border-0 last:pb-0">
                    <dt className="font-semibold text-charcoal text-sm sm:w-32 shrink-0">{spec.label}</dt>
                    <dd className="text-sm text-charcoal/70">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-bg-light">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">Key Benefits</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-brand-50 rounded-lg mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="font-bold text-charcoal text-base mb-2">{benefit.title}</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best For */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6">Best For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Private offices', 'Meeting rooms', 'Staff pantries', 'General office subdivision', 'Server and storage rooms', 'Quiet work zones'].map((item, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-cta shrink-0" />
                  <span className="text-sm text-charcoal/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rockwool Cross-link */}
      <section className="section-padding bg-bg-light">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-md flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">Gypsum + Rockwool Acoustic Option</h2>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                Add Rockwool stone wool insulation within your gypsum partition cavity for improved acoustic performance and fire resistance. Ideal for meeting rooms and confidential office spaces.
              </p>
            </div>
            <Link
              to="/office-partitioning/"
              aria-label="Learn more about all office partitioning options"
              className="btn-primary shrink-0"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion items={service?.faqs || GYPSUM_FAQS} />
        </div>
      </section>

      <CTASection
        title="Get Your Gypsum Partition Quote"
        subtitle="Free site assessment and detailed quotation"
        buttonText="Request Free Quote"
      />
    </>
  );
}
