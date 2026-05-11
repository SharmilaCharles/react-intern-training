import './TeamCard.css';

function TeamCard({ name, role, emoji, linkedin }) {
  return (
    <div className="team-card">
      <div className="card-glow" aria-hidden="true" />

      {/* Avatar */}
      <div className="avatar">
        <span className="avatar-emoji">{emoji}</span>
      </div>

      {/* Info */}
      <h3 className="member-name">{name}</h3>
      <p className="member-role">{role}</p>

      {/* Divider */}
      <div className="card-divider" />

      {/* Social */}
      <a
        href={linkedin || '#'}
        className="linkedin-btn"
        target="_blank"
        rel="noreferrer"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
        Connect
      </a>
    </div>
  );
}

export default TeamCard;
