import './TagList.css';

export default function TagList({ items, className = '' }) {
  return (
    <ul className={`tag-list ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="tag-item">{item}</li>
      ))}
    </ul>
  );
}
