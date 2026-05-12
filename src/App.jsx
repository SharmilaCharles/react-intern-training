import { useState } from 'react'
import EmployeeList from './components/EmployeeList'
import './global.css'

function App() {
  
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Vinay', role: 'Frontend Developer', isActive: true },
    { id: 2, name: 'Deva', role: 'Backend Developer', isActive: true },
    { id: 3, name: 'Sai', role: 'UI Designer', isActive: false },
    { id: 4, name: 'Rakesh', role: 'Project Manager', isActive: true },
  ])

  const [newEmployee, setNewEmployee] = useState({ name: '', role: '' })

  
  const handleAddEmployee = (e) => {
    e.preventDefault()
    
   
    if (newEmployee.name.trim() === '' || newEmployee.role.trim() === '') {
      alert('Please fill in all fields')
      return
    }

    
    const employee = {
      id: Date.now(), 
      name: newEmployee.name,
      role: newEmployee.role,
      isActive: true
    }

    
    setEmployees([...employees, employee])
    
    
    setNewEmployee({ name: '', role: '' })
  }

  
  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id))
  }

  
  const handleToggleStatus = (id) => {
    setEmployees(employees.map(emp =>
      emp.id === id ? { ...emp, isActive: !emp.isActive } : emp
    ))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Employee Management System</h1>
      </header>

      <main className="app-main">
        {/* Add Employee Form */}
        <div className="form-container">
          <h2>Add New Employee</h2>
          <form onSubmit={handleAddEmployee} className="add-employee-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Employee Name"
                value={newEmployee.name}
                onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Job Role"
                value={newEmployee.role}
                onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
                className="input-field"
              />
            </div>
            <button type="submit" className="btn-add">
              Add Employee
            </button>
          </form>
          <p className="employee-count">Total Employees: {employees.length}</p>
        </div>

        {/* Employee List */}
        <div className="list-container">
          <h2>Employee Directory</h2>
          {employees.length === 0 ? (
            <p className="no-employees">No employees found. Add one to get started!</p>
          ) : (
            <EmployeeList
              employees={employees}
              onDelete={handleDeleteEmployee}
              onToggleStatus={handleToggleStatus}
            />
          )}
        </div>
      </main>
    </div>
  )
}

export default App
