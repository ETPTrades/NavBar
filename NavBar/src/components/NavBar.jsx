import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <h1 className="site-title">
        <Link to="/">Site Name</Link>
      </h1>
      <ul>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
