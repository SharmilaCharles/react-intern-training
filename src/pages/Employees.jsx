import EmployeeCard from '../components/EmployeeCard';

const Employees = () => {
  const employees = [
    { id: 1, name: 'John Doe', position: 'Senior Developer', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', department: 'Product' },
    { id: 3, name: 'Mike Johnson', position: 'UX Designer', department: 'Design' },
    { id: 4, name: 'Sarah Williams', position: 'Marketing Manager', department: 'Marketing' },
    { id: 5, name: 'Tom Brown', position: 'DevOps Engineer', department: 'Infrastructure' },
    { id: 6, name: 'Emily Davis', position: 'QA Lead', department: 'Quality' },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Employees</h1>
      <p className="page-subtitle">Manage and view your team members.</p>
      
      <div className="employees-grid">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            id={employee.id}
            name={employee.name}
            position={employee.position}
            department={employee.department}
          />
        ))}
      </div>
    </div>
  );
};

export default Employees;
