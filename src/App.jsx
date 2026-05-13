import { useEffect, useState } from "react";
import { getEmployees } from "./services/EmployeeService";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // 🔹 Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (err) {
        setError("Failed to fetch employees");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔹 Search Filter
  const filteredEmployees = employees.filter((emp) =>
    `${emp.firstName} ${emp.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Dashboard</h1>

      {/* Search */}
      <EmployeeForm search={search} setSearch={setSearch} />

      {/* Loading */}
      {loading && <h2>Loading...</h2>}

      {/* Error */}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}

      {/* Employee List */}
      <div>
        {filteredEmployees.map((emp) => (
          <EmployeeCard key={emp.id} employee={emp} search={search} />
        ))}
      </div>
    </div>
  );
}

export default App;