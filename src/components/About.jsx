import './About.css';

const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Team Members' },
  { value: '98%', label: 'Client Satisfaction' },
];

const features = [
  {
    icon: '💡',
    title: 'Innovation First',
    desc: 'We push the boundaries of what is possible with cutting-edge technology and creative thinking.',
  },
  {
    icon: '🛡️',
    title: 'Secure & Reliable',
    desc: 'Every solution we build is designed with enterprise-grade security and 99.9% uptime in mind.',
  },
  {
    icon: '⚡',
    title: 'Lightning Fast',
    desc: 'Performance is not an afterthought — it is baked into every line of code we write.',
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About NexaCore</h2>
        <p className="section-subtitle">
          A passionate team of engineers, designers, and strategists dedicated
          to transforming ideas into powerful digital experiences.
        </p>

        {/* Stats Row */}
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Features Row */}
        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
