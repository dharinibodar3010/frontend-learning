/*
Copilot Suggestion:
Create a reusable ProjectCard component that accepts
projectName, description and projectLink as props.
Display the project name, description and a clickable link.
*/

function ProjectCard(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        width: "300px",
        marginTop: "20px"
      }}
    >
      <h2>{props.projectName}</h2>

      <p>{props.description}</p>

      <a
        href={props.projectLink}
        target="_blank"
        rel="noreferrer"
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;