const Reports = () => {
  const reports = [
    { id: 1, name: 'Monthly Sales Report', date: '2024-01-15', status: 'Completed' },
    { id: 2, name: 'Quarterly Performance Review', date: '2024-01-10', status: 'In Progress' },
    { id: 3, name: 'Annual Budget Analysis', date: '2024-01-05', status: 'Completed' },
    { id: 4, name: 'Customer Satisfaction Survey', date: '2024-01-01', status: 'Pending' },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Reports</h1>
      <p className="page-subtitle">View and manage all reports.</p>
      
      <div className="table-container">
        <table className="reports-table">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.name}</td>
                <td>{report.date}</td>
                <td>
                  <span className={`status-badge ${report.status.toLowerCase().replace(' ', '-')}`}>
                    {report.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn">Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
