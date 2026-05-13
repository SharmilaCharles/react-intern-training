function EmployeeForm({ search, setSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default EmployeeForm;