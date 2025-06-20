export default function ProjectCard({
  title,
  description,
  technologies,
  liveLink,
  repoLink,
  image,
}) {
  return (
    <div className="bg-[var(--color-primary)] text-[var(--color-text)] rounded-2xl shadow-md w-[40%] transition-all">
    
      {image && (
        <div className="rounded-xl p-2 mb-6 flex items-center justify-center">
          <img
            src={image}
            alt={`${title} preview`}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}


      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-[var(--color-accent)]">
          {title}
        </h3>
        <p className="mb-4">{description}</p>

        {technologies?.length > 0 && (
          <ul className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, i) => (
              <li
                key={i}
                className="px-3 py-1 text-sm bg-[var(--color-bg)] text-[var(--color-primary)] rounded-full"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="flex gap-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded font-medium bg-[var(--color-accent)] text-white hover:opacity-90 transition"
            >
              Go to Site
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[var(--color-accent)] text-[var(--color-accent)] rounded font-medium hover:bg-[var(--color-bg)] transition"
            >
              View Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
