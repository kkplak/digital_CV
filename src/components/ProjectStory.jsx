import { FlowingImages, ProjectVideo } from './ProjectGallery';

function StorySections({ sections }) {
  if (!sections.length) return null;
  return (
    <>
      {sections.map(section => (
        <section key={section.heading} className="project-story-section">
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </section>
      ))}
    </>
  );
}

export default function ProjectStory({ project, story, images }) {
  const lead = story.lead && <p className="project-lead">{story.lead}</p>;
  const [primaryImage, ...restImages] = images;
  return (
    <div className="project-story-flow">
      {project.video?.url && <ProjectVideo src={project.video.url} caption={project.video.caption} projectName={project.name} />}
      {lead}
      {primaryImage && <FlowingImages images={[primaryImage]} projectName={project.name} />}
      <StorySections sections={story.sections} />
      {restImages.length > 0 && <FlowingImages images={restImages} projectName={project.name} startIndex={1} />}
    </div>
  );
}
