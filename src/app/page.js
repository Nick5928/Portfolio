import Navbar from "@/components/Navbar";
import ProjectCard  from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import HeroTitle from "@/components/HeroTitle";
import Image from "next/image";
import ContactIcons from "@/components/ContactIcons";
export default function Home() {
  return (
    <div className="grid">
      <Navbar />
      <div id="home" className="flex flex-col gap-2 min-h-[95vh] items-center justify-center">
        <HeroTitle />
        <p className="md:text-2xl text-center md:w-2/5">Computer Science student from Roanoke Rapids, passionate about software development and problem-solving.</p>
      </div>
      <section id="about">
        <h1>About Me</h1>
        <div className="flex gap-4 items-center justify-center">
          <Image
            src={"/headshot.jpg"}
            alt={`Nicholas Jones headshot`}
            width={400}
            height={400}
            className="rounded-full"
          />
          <p className="md:text-2xl md:w-2/5">Hi, I&apos;m Nicholas. I&apos;m a computer science student from Roanoke Rapids, North Carolina, passionate about building software and solving real-world problems through code. In my free time, I enjoy gaming, playing pickleball, and going for runs.</p>
        </div>
      </section>
      <section id="projects">
        <h1>Projects</h1>
        <div className="flex flex-col gap-4 items-center justify-center">
          <ProjectCard
          title="HireReady"
          description="This web app empowers users to enhance their resumes by providing personalized resume scoring based on the job description, helping optimize for Applicant Tracking Systems (ATS). Users can easily improve their chances of getting noticed by recruiters through actionable feedback. Additionally, the app generates a clean, copy-friendly profile summary that simplifies the application process making it quick and convenient to tailor and submit resumes across multiple job platforms."
          technologies={["Next.js", "React", "Node.js", "Supabase", "OpenAI API", "Tailwind CSS", "HTML/CSS"]}
          liveLink="https://hire-ready-ten.vercel.app/"
          repoLink="https://github.com/Nick5928/HireReady"
          image="/Project Images/hireready.png"
          />
          <ProjectCard
            title="Skyway"
            description="Developed a full-stack app enabling users to search hotels, view weather, and save trips with authentication. Integrated OpenWeather, Amadeus, and Google Places APIs to provide rich, location-based content. Implemented a responsive UI with React supporting real-time filtering, navigation, and CRUD trip management. Managed backend logic with Supabase/PostgreSQL for secure user-specific trip data."
            technologies={["React", "Node.js", "Supabase", "OpenWeather API", "Amadeus API", "Google Places API", "Tailwind CSS"]}
            liveLink=""
            repoLink=""
            image="/Project Images/coming_soon.png"
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
            technologies={["React Native", "Expo", "Express", ,"Firebase", "Tailwind CSS", "Node.js"]}
            liveLink=""
            repoLink=""
            image="/Project Images/coming_soon.png"
          />
        </div>
      </section>
      <section id="skills">
        <h1>Skills</h1>

        <div className="grid gap-5">

        
          <div className="grid grid-cols-10 gap-2">
            <p className="col-span-10 subtitle !text-left">Languages:</p>
            <SkillCard skill="JavaScript" image="https://skillicons.dev/icons?i=js" />
            <SkillCard skill="TypeScript" image="https://skillicons.dev/icons?i=ts" />
            <SkillCard skill="Python" image="https://skillicons.dev/icons?i=py" />
            <SkillCard skill="Java" image="https://skillicons.dev/icons?i=java" />
            <SkillCard skill="C" image="https://skillicons.dev/icons?i=c" />
            <SkillCard skill="C++" image="https://skillicons.dev/icons?i=cpp" />
            <SkillCard skill="HTML" image="https://skillicons.dev/icons?i=html" />
            <SkillCard skill="CSS" image="https://skillicons.dev/icons?i=css" />
          </div>

          <div className="grid grid-cols-10 gap-2">
            <p className="col-span-10 subtitle !text-left">Databases:</p>
            <SkillCard skill="PostgreSQL" image="https://skillicons.dev/icons?i=postgres" />
            <SkillCard skill="SQLite" image="https://skillicons.dev/icons?i=sqlite" />
            <SkillCard skill="Firebase" image="https://skillicons.dev/icons?i=firebase" />
            <SkillCard skill="Supabase" image="https://skillicons.dev/icons?i=supabase" />
            <SkillCard skill="Prisma" image="https://skillicons.dev/icons?i=prisma" />
          </div>

          <div className="grid grid-cols-10 gap-2">
            <p className="col-span-10 subtitle !text-left">Frameworks:</p>
            <SkillCard skill="React.js" image="https://skillicons.dev/icons?i=react" />
            <SkillCard skill="Next.js" image="https://skillicons.dev/icons?i=nextjs" />
            <SkillCard skill="Node.js" image="https://skillicons.dev/icons?i=nodejs" />
            <SkillCard skill="Nest.js" image="https://skillicons.dev/icons?i=nestjs" />
            <SkillCard skill="Flask" image="https://skillicons.dev/icons?i=flask" />
            <SkillCard skill="jQuery" image="https://skillicons.dev/icons?i=jquery" />
          </div>  
          <div className="grid grid-cols-10 gap-2">
            <p className="col-span-10 subtitle !text-left">Miscellaneous:</p>
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
        </div>
      </section>
      <section id="contact" className="flex flex-col">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <ContactIcons/>
      </section>
    </div>
  );
}
