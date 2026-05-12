import EmployeeCard from './EmployeeCard'
import '../global.css'

function EmployeeList({ employees, onDelete, onToggleStatus }) {
  // Dynamic rendering of employee cards
  return (
    <div className="employee-list">
      {employees.map(employee => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  )
}

export default EmployeeList
