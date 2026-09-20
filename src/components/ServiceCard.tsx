import { Link } from 'react-router-dom';
import { ArrowRight, Square } from 'lucide-react';
import { getIcon } from '@/data/iconMap';
import type { ServiceType } from '@/data/site';

export default function ServiceCard({ service }: { service: ServiceType }) {
  const IconComponent = getIcon(service.icon, Square);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md card-lift flex flex-col">
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-brand-50 rounded-lg">
            <IconComponent className="w-5 h-5 text-brand" />
          </div>
          <h3 className="text-lg font-bold text-charcoal">{service.name}</h3>
        </div>
        <p className="text-sm text-charcoal/70 leading-relaxed mb-4 flex-1">{service.description}</p>
        <Link
          to={`/${service.slug}/`}
          aria-label={`Learn more about ${service.name}`}
          className="inline-flex items-center gap-1.5 text-cta font-semibold text-sm hover:gap-2.5 transition-all"
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
