import '../global.css'

function EmployeeCard({ employee, onDelete, onToggleStatus }) {
  // Conditional styling based on active status
  const cardClassName = `employee-card ${employee.isActive ? 'active' : 'inactive'}`
  const statusText = employee.isActive ? 'Active' : 'Inactive'
  const statusButtonText = employee.isActive ? 'Deactivate' : 'Activate'

  return (
    <div className={cardClassName}>
      <div className="card-header">
        <div className="employee-info">
          <h3 className="employee-name">{employee.name}</h3>
          <p className="employee-role">{employee.role}</p>
        </div>
        <span className={`status-badge ${employee.isActive ? 'active' : 'inactive'}`}>
          {statusText}
        </span>
      </div>

      <div className="card-actions">
        <button
          onClick={() => onToggleStatus(employee.id)}
          className={`btn-toggle ${employee.isActive ? 'deactivate' : 'activate'}`}
        >
          {statusButtonText}
        </button>
        <button
          onClick={() => onDelete(employee.id)}
          className="btn-delete"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default EmployeeCard
