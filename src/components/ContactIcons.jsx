export default function ContactIcons() {
  return (
    <div className="flex gap-6 justify-center mt-6">
      <a
        href="https://github.com/Nick5928"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:scale-110 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-16 h-16"
        >
          <path d="M12 0C5.37 0 0 5.373 0 12a12.004 12.004 0 0 0 8.207 11.385c.6.112.82-.258.82-.577v-2.014c-3.338.727-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.206.084 1.84 1.246 1.84 1.246 1.07 1.834 2.81 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.933 0-1.312.469-2.384 1.235-3.224-.124-.303-.535-1.52.117-3.168 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.553 3.296-1.23 3.296-1.23.654 1.648.243 2.865.12 3.168.77.84 1.233 1.912 1.233 3.224 0 4.61-2.804 5.63-5.475 5.922.43.372.823 1.104.823 2.227v3.3c0 .322.218.694.825.576A12.005 12.005 0 0 0 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/in/nicholas-w-jones/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:scale-110 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-16 h-16"
        >
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.5v2.16h.05c.49-.92 1.68-1.89 3.45-1.89C19.27 8.27 20 10.5 20 13.53V24h-4v-9.6c0-2.3-.82-3.88-2.87-3.88-1.56 0-2.49 1.05-2.89 2.07-.15.37-.19.89-.19 1.42V24h-4V8z" />
        </svg>
      </a>

      <a
        href="mailto:nwjones2024@gmail.com"
        aria-label="Email"
        className="hover:scale-110 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-16 h-16"
        >
          <path d="M12 13.065L0 4.5V19.5H24V4.5L12 13.065ZM12 10.935L24 2.5H0L12 10.935Z" />
        </svg>
      </a>
    </div>
  );
}