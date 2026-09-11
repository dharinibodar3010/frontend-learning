import ProfileCard from "./ProfileCard";
import SocialLinks from "./SocialLinks";
import ProjectCard from "./ProjectCard";

function App() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/"
    },
    {
      name: "GitHub",
      url: "https://github.com/"
    }
  ];

  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px"
      }}
    >
      <h1>InstaBio</h1>

      <ProfileCard
        name="Dharini"
        profilePic="https://i.pravatar.cc/150"
        bio="Learning React and becoming a Full Stack Developer."
      />

      <SocialLinks
        links={socialLinks}
        theme="light"
      />

      <ProjectCard
        projectName="InstaBio"
        description="A simple React profile and social links application."
        projectLink="https://github.com/"
      />
    </div>
  );
}

export default App;