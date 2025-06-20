import Navbar from "@/components/Navbar";
import ProjectCard  from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
export default function Home() {
  return (
    <div className="grid">
      <Navbar />
      <div id="home" className="flex flex-col gap-2 min-h-[95vh] items-center justify-center">
        <h1 className="text-7xl font-bold">Nicholas Jones</h1>
        <p className="text-2xl text-center w-[40%]">I&apos;m Nicholas Jones, a passionate Computer Science student from Roanoke Rapids, NC, with a strong enthusiasm for software development and problem-solving.</p>
      </div>
      
      <section id="projects">
        <h1>Projects</h1>
        <div className="flex flex-col gap-4 items-center justify-center">
          <ProjectCard
          title="HireReady"
          description="This web app empowers users to enhance their resumes by providing personalized resume scoring based on the job description, helping optimize for Applicant Tracking Systems (ATS). Users can easily improve their chances of getting noticed by recruiters through actionable feedback. Additionally, the app generates a clean, copy-friendly profile summary that simplifies the application process — making it quick and convenient to tailor and submit resumes across multiple job platforms."
          technologies={["Next.js", "React", "Node.js", "Supabase", "OpenAI API", "Tailwind CSS", "HTML/CSS"]}
          liveLink="https://hire-ready-ten.vercel.app/"
          repoLink="https://github.com/Nick5928/HireReady"
          image="/Project Images/hireready.png"
          />
          <ProjectCard
            title="Game500"
            description="A real-time multiplayer mobile app for playing the classic 500 trick-taking card game with friends."
            technologies={["React Native", "Expo", "Express", "Socket.IO", "Tailwind CSS", "Node.js"]}
            liveLink=""
            repoLink=""
            image="/Project Images/coming_soon.png"
          />
          <ProjectCard
            title="Ca$hKeeper"
            description="A financial manager mobile app used to track users' finances, keep up with their expenses and income."
            technologies={["React Native", "Expo", "Express", "Tailwind CSS", "Node.js"]}
            liveLink=""
            repoLink=""
            image="/Project Images/coming_soon.png"
          />
        </div>
        </section>
        <section id="experience">
          <h1>Test</h1>
          <p>Im a full-stack developer passionate about building modern web apps.</p>
        </section>
        <section id="skills">
          <h1>Skills</h1>

          
          <div className="grid grid-cols-10 gap-2">
            <p className="col-span-10">Languages</p>
            <SkillCard skill="JavaScript" image="https://skillicons.dev/icons?i=js" />
            <SkillCard skill="TypeScript" image="https://skillicons.dev/icons?i=ts" />
            <SkillCard skill="Python" image="https://skillicons.dev/icons?i=py" />
            <SkillCard skill="Java" image="https://skillicons.dev/icons?i=java" />
            <SkillCard skill="C" image="https://skillicons.dev/icons?i=c" />
            <SkillCard skill="C++" image="https://skillicons.dev/icons?i=cpp" />
            <SkillCard skill="HTML" image="https://skillicons.dev/icons?i=html" />
            <SkillCard skill="CSS" image="https://skillicons.dev/icons?i=css" />
          </div>

          <h1>Databases</h1>
          <div className="grid grid-cols-10 gap-2">
            <SkillCard skill="PostgreSQL" image="https://skillicons.dev/icons?i=postgres" />
            <SkillCard skill="SQLite" image="https://skillicons.dev/icons?i=sqlite" />
            <SkillCard skill="Firebase" image="https://skillicons.dev/icons?i=firebase" />
            <SkillCard skill="Supabase" image="https://skillicons.dev/icons?i=supabase" />
            <SkillCard skill="Prisma" image="https://skillicons.dev/icons?i=prisma" />
          </div>

          <h1>Frameworks</h1>
          <div className="grid grid-cols-10 gap-2">
            <SkillCard skill="React.js" image="https://skillicons.dev/icons?i=react" />
            <SkillCard skill="Next.js" image="https://skillicons.dev/icons?i=nextjs" />
            <SkillCard skill="Node.js" image="https://skillicons.dev/icons?i=nodejs" />
            <SkillCard skill="Nest.js" image="https://skillicons.dev/icons?i=nestjs" />
            <SkillCard skill="Flask" image="https://skillicons.dev/icons?i=flask" />
            <SkillCard skill="Bootstrap" image="https://skillicons.dev/icons?i=bootstrap" />
            <SkillCard skill="jQuery" image="https://skillicons.dev/icons?i=jquery" />
          </div>  
          <h1>Miscellaneous</h1>
          <div className="grid grid-cols-10 gap-2">
            <SkillCard skill="Bash" image="https://skillicons.dev/icons?i=bash" />
            <SkillCard skill="Git" image="https://skillicons.dev/icons?i=git" />
            <SkillCard skill="GitHub" image="https://skillicons.dev/icons?i=github" />
            <SkillCard skill="GitLab" image="https://skillicons.dev/icons?i=gitlab" />
            <SkillCard skill="Postman" image="https://skillicons.dev/icons?i=postman" />
            <SkillCard skill="Azure" image="https://skillicons.dev/icons?i=azure" />
            <SkillCard skill="Vercel" image="https://skillicons.dev/icons?i=vercel" />
            <SkillCard skill="VS Code" image="https://skillicons.dev/icons?i=vscode" />
            <SkillCard skill="Eclipse" image="https://skillicons.dev/icons?i=eclipse" />
            <SkillCard skill="Android Studio" image="https://skillicons.dev/icons?i=androidstudio" />
          </div>
        </section>
        <section id="contact">
          <h1>Test</h1>
          <p>Im a full-stack developer passionate about building modern web apps.</p>
        </section>
    </div>
  );
}
