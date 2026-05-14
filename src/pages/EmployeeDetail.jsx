import { useParams, useNavigate } from 'react-router-dom';

const EmployeeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock employee data
  const employeeData = {
    1: { name: 'John Doe', position: 'Senior Developer', department: 'Engineering', email: 'john@example.com', phone: '555-0101' },
    2: { name: 'Jane Smith', position: 'Product Manager', department: 'Product', email: 'jane@example.com', phone: '555-0102' },
    3: { name: 'Mike Johnson', position: 'UX Designer', department: 'Design', email: 'mike@example.com', phone: '555-0103' },
    4: { name: 'Sarah Williams', position: 'Marketing Manager', department: 'Marketing', email: 'sarah@example.com', phone: '555-0104' },
    5: { name: 'Tom Brown', position: 'DevOps Engineer', department: 'Infrastructure', email: 'tom@example.com', phone: '555-0105' },
    6: { name: 'Emily Davis', position: 'QA Lead', department: 'Quality', email: 'emily@example.com', phone: '555-0106' },
  };

  const employee = employeeData[id];

  if (!employee) {
    return (
      <div className="page-container">
        <p className="error-message">Employee not found</p>
        <button onClick={() => navigate('/employees')} className="back-btn">
          Back to Employees
        </button>
      </div>
    );
  }

  return (
    <div className="page-container">
      <button onClick={() => navigate('/employees')} className="back-btn">
        ← Back to Employees
      </button>

      <div className="employee-detail">
        <div className="detail-header">
          <div className="detail-avatar">{employee.name.charAt(0)}</div>
          <div className="detail-header-info">
            <h1 className="detail-title">{employee.name}</h1>
            <p className="detail-position">{employee.position}</p>
          </div>
        </div>

        <div className="detail-grid">
          <div className="detail-item">
            <label>Department</label>
            <p>{employee.department}</p>
          </div>
          <div className="detail-item">
            <label>Email</label>
            <p>{employee.email}</p>
          </div>
          <div className="detail-item">
            <label>Phone</label>
            <p>{employee.phone}</p>
          </div>
          <div className="detail-item">
            <label>ID</label>
            <p>#{id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
