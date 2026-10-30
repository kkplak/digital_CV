const portraitPaths = {
  male: [
    'M7 9V7.5a5 5 0 0 1 5-5h1.5A3.5 3.5 0 0 1 17 6v3',
    'M7 8.5c2.8.1 4.7-.8 6.2-2.5 1 1.4 2.2 2.1 3.8 2.5V11a5 5 0 0 1-10 0V8.5',
    'M9 15.2V17l3 2 3-2v-1.8',
  ],
  female: [
    'M6.5 14.5h-1L6.5 8a5.5 5.5 0 0 1 11 0l1 6.5h-1',
    'M8 8.5c2.4.1 4.3-.8 5.6-2.3.6 1.2 1.4 2 2.4 2.3V11a4 4 0 0 1-8 0V8.5',
    'M9 14.4V17l3 2 3-2v-2.6',
  ],
};

export default function TestimonialAvatar({ variant, image }) {
  return (
    <div className="testimonial-avatar" aria-hidden="true">
      {image ? (
        <img src={image} alt="" className="avatar-image" />
      ) : (
        <svg className="avatar-portrait" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
          {portraitPaths[variant] ? (
            <>
              {portraitPaths[variant].map((path) => <path key={path} d={path} />)}
              <path d="M4 21v-1a4 4 0 0 1 2.7-3.8l2.3-.8M15 15.4l2.3.8A4 4 0 0 1 20 20v1" />
            </>
          ) : (
            <>
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2" />
            </>
          )}
        </svg>
      )}
    </div>
  );
}
