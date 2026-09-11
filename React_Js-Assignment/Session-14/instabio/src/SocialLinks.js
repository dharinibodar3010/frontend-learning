function SocialLinks(props) {
  const backgroundColor =
    props.theme === "dark" ? "black" : "lightgray";

  const color =
    props.theme === "dark" ? "white" : "black";

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: color,
        padding: "15px",
        width: "300px",
        textAlign: "center"
      }}
    >
      <h3>Social Links</h3>

      {props.links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          style={{
            margin: "10px",
            color: color,
            textDecoration: "none"
          }}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;