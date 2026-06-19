export default function NavBar() {
  return (
    <nav className="nav">
      <h1 className="site-title">
        <a href="">Site Name</a>
      </h1>
      <ul>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
