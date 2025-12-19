import './ExperienceItem.css';

export default function ExperienceItem({ 
  title, 
  company, 
  location, 
  period, 
  description,
  bullets,
  subExperience
}) {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <h3 className="experience-title">{title}</h3>
        {company && <div className="experience-company">{company}</div>}
        <div className="experience-meta">
          {period && <span className="experience-period">{period}</span>}
          {location && period && <span className="meta-separator">, </span>}
          {location && <span className="experience-location">{location}</span>}
        </div>
      </div>
      {bullets && bullets.length > 0 && (
        <ul className="experience-bullets">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
      
      {subExperience && subExperience.length > 0 && (
        <div className="sub-experience-section">
          <div className="sub-experience-header">Clients and services provided</div>
          {subExperience.map((subExp, index) => (
            <div key={index} className="sub-experience-item">
              <div className="sub-experience-title-row">
                <span className="sub-experience-title">{subExp.title}</span>
                <span className="sub-experience-separator">, </span>
                <span className="sub-experience-company">{subExp.company}</span>
                {subExp.period && (
                  <>
                    <span className="sub-experience-separator-period"> </span>
                    <span className="sub-experience-period">{subExp.period}</span>
                  </>
                )}
              </div>
              {subExp.bullets && subExp.bullets.length > 0 && (
                <ul className="sub-experience-bullets">
                  {subExp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
