import './Footer.css';

const links = {
  Company: ['About Us', 'Careers', 'Blog', 'Press'],
  Services: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI & ML'],
  Support: ['Documentation', 'Community', 'Contact Us', 'Status'],
};

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        {/* Top Row */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">◈</span>
              <span className="logo-text">NexaCore</span>
            </div>
            <p className="footer-tagline">
              Building tomorrow's digital infrastructure, today.
            </p>
            {/* Social icons */}
            <div className="social-links">
              {['𝕏', '⬛ in', '🐙', '▶'].map((icon, i) => (
                <a key={i} href="#" className="social-icon" aria-label="social">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div className="footer-col" key={heading}>
              <h4 className="footer-heading">{heading}</h4>
              <ul className="footer-list">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="footer-link">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom">
          <p>© {year} NexaCore Inc. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
