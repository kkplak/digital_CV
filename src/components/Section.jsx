import './Section.css';

export default function Section({ title, children, className = '' }) {
  return (
    <section className={`cv-section ${className}`}>
      {title && <h2 className="section-title">{title}</h2>}
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}
