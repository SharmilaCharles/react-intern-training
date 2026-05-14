import { Link } from 'react-router-dom';

const EmployeeCard = ({ id, name, position, department }) => {
  return (
    <div className="employee-card">
      <div className="employee-avatar">
        {name.charAt(0).toUpperCase()}
      </div>
      <div className="employee-info">
        <h3 className="employee-name">{name}</h3>
        <p className="employee-position">{position}</p>
        <p className="employee-department">{department}</p>
      </div>
      <Link to={`/employees/${id}`} className="employee-link">
        View Details →
      </Link>
    </div>
  );
};

export default EmployeeCard;
