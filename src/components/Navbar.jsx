function Navbar({ color }) {
  return (
    <nav className={color ? "navbar navbar-bg" : "navbar"}>
      <p>
        <a href="#skills">Skills</a>
      </p>
      <p>
        <a href="#projects">Projects</a>
      </p>
    </nav>
  );
}

export default Navbar;
