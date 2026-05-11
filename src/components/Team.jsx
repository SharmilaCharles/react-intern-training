import TeamCard from './TeamCard';
import './Team.css';

const teamMembers = [
  {
    name: 'Arjun Mehta',
    role: 'Chief Executive Officer',
    emoji: '👨‍💼',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Engineering',
    emoji: '👩‍💻',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Rahul Das',
    role: 'Lead UI/UX Designer',
    emoji: '🎨',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Sneha Kapoor',
    role: 'Product Manager',
    emoji: '📋',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Vikram Nair',
    role: 'DevOps Engineer',
    emoji: '⚙️',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Isha Reddy',
    role: 'AI / ML Specialist',
    emoji: '🤖',
    linkedin: 'https://linkedin.com',
  },
];

function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <h2 className="section-title">Meet the Team</h2>
        <p className="section-subtitle">
          The brilliant minds behind NexaCore — each bringing world-class
          expertise and an obsession with quality.
        </p>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              emoji={member.emoji}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
