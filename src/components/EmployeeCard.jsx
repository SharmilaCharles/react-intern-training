function EmployeeCard({ employee, search }) {
  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return (
      <span>
        {parts.map((part, index) => 
          regex.test(part) ? (
            <span key={index} style={styles.highlight}>{part}</span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </span>
    );
  };

  const fullName = `${employee.firstName} ${employee.lastName}`;

  return (
    <div style={styles.card}>
      <h3>{highlightText(fullName, search)}</h3>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <p>Department: {employee.company?.department}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px"
  },
  highlight: {
    backgroundColor: "#ffd700",
    fontWeight: "bold",
    padding: "2px 4px",
    borderRadius: "3px",
    color: "#000"
  }
};

export default EmployeeCard;