import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
  const cards = [
    { id: 1, title: 'Total Users', value: '2,543', icon: '👥', color: 'blue' },
    { id: 2, title: 'Revenue', value: '$45,234', icon: '💰', color: 'green' },
    { id: 3, title: 'Reports', value: '1,234', icon: '📊', color: 'purple' },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Dashboard</h1>
      <p className="page-subtitle">Welcome back! Here's your overview.</p>
      
      <div className="cards-grid">
        {cards.map((card) => (
          <DashboardCard
            key={card.id}
            title={card.title}
            value={card.value}
            icon={card.icon}
            color={card.color}
          />
        ))}
      </div>

      <div className="chart-section">
        <h2 className="section-title">Recent Activity</h2>
        <div className="chart-placeholder">
          <p>Chart visualization would go here</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
