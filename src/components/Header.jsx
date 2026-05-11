import './Header.css';

function Header() {
  return (
    <header className="header">
      {/* ── Navigation Bar ── */}
      <nav className="navbar">
        <div className="nav-logo">
          <span className="logo-icon">◈</span>
          <span className="logo-text">NexaCore</span>
        </div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#footer">Contact</a></li>
          <li>
            <a href="#about" className="nav-cta">Get Started</a>
          </li>
        </ul>
      </nav>

      {/* ── Hero Section ── */}
      <div className="hero">
        <div className="hero-badge">🚀 Building the Future</div>
        <h1 className="hero-title">
          We are <span className="hero-highlight">NexaCore</span>
        </h1>
        <p className="hero-description">
          Empowering businesses with next-generation software solutions.
          We craft beautiful, scalable, and intelligent products that drive
          real-world impact.
        </p>
        <div className="hero-actions">
          <a href="#about" className="btn btn-primary">Discover More</a>
          <a href="#team" className="btn btn-ghost">Meet the Team</a>
        </div>

        {/* Decorative blobs */}
        <div className="blob blob-1" aria-hidden="true" />
        <div className="blob blob-2" aria-hidden="true" />
      </div>
    </header>
  );
}

export default Header;
