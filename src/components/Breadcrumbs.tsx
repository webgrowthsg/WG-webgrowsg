import { Link } from "react-router-dom";

interface Crumb {
  name: string;
  path?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, i) => (
          <li key={i}>
            {item.path && i < items.length - 1 ? (
              <Link to={item.path}>{item.name}</Link>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
            {i < items.length - 1 && <span className="sep" aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
