interface FaqItem {
  q: string;
  a: string;
}

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <details key={i} className="faq-item">
          <summary>
            <span>{item.q}</span>
            <span className="faq-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </summary>
          <div className="faq-answer">
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
