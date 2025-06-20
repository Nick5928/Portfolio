export default function SkillCard({ skill, image }) {
  return (
    <div className="bg-[var(--color-primary)] text-[var(--color-text)] rounded-2xl shadow-md w-28 h-28 flex flex-col items-center justify-center p-4 transition-all duration-300 transform hover:scale-110">
      <img src={image} alt={skill} className="w-10 h-10 mb-2" />
      <h3 className="text-sm font-semibold text-center">
        {skill}
      </h3>
    </div>
  );
}