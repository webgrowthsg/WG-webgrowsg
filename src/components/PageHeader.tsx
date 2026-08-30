import { Breadcrumbs } from "./Breadcrumbs";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs: { name: string; path?: string }[];
  children?: React.ReactNode;
}

export function PageHeader({ eyebrow, title, lead, crumbs, children }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="container">
        <Breadcrumbs items={crumbs} />
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="page-title">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
