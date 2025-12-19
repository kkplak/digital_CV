import './ContactInfo.css';

export default function ContactInfo({ contact }) {
  return (
    <div className="contact-info">
      <div className="contact-item">{contact.location}</div>
      <div className="contact-item">
        <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer">
          {contact.website}
        </a>
      </div>
      <div className="contact-item">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
      <div className="contact-item">
        <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
      </div>
      <div className="contact-item">
        <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer">
          {contact.linkedin.replace('@', '')}
        </a>
      </div>
      <div className="contact-item">{contact.permit}</div>
      <div className="contact-brand">{contact.brand}</div>
    </div>
  );
}
