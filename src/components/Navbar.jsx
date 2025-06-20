'use client';

export default function Navbar() {
  return (
    <nav className="h-[5vh] top-0 sticky w-full flex items-center justify-between px-8 py-4 bg-[var(--color-primary)] shadow z-50">
        <div className="text-xl font-bold">
            <a href="#home" className="hover:text-[var(--color-accent)]">NJ</a>
        </div>

      
        <div className="hidden md:flex space-x-6 text-lg font-medium">
            <a href="#about" className="hover:text-[var(--color-accent)]">ABOUT</a>
            <a href="#projects" className="hover:text-[var(--color-accent)]">PROJECTS</a>
            <a href="#skills" className="hover:text-[var(--color-accent)]">SKILLS</a>
            <a href="#contact" className="hover:text-[var(--color-accent)]">CONTACT</a>
        </div>

      
        <div>
            <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border rounded-md text-lg font-medium hover:bg-[var(--color-accent)]"
            >
                Resume
            </a>
        </div>
    </nav>
  );
}
