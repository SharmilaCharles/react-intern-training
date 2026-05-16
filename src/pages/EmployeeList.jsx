import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Filter, Eye, Edit2, Trash2, ToggleLeft, ToggleRight } from 'lucide-react';
import Table from '../components/Table';
import Button from '../components/Button';
import Input from '../components/Input';
import Modal from '../components/Modal';
import EmployeeForm from '../components/EmployeeForm';
import api from '../services/api';
import toast from 'react-hot-toast';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const response = await api.get('/employees');
      setEmployees(response.data);
    } catch (error) {
      toast.error('Failed to load employees');
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (e, employee) => {
    e.stopPropagation(); // Prevent row click
    const newStatus = employee.status === 'Active' ? 'Inactive' : 'Active';
    
    try {
      await api.patch(`/employees/${employee.id}`, { status: newStatus });
      setEmployees(prev => 
        prev.map(emp => 
          emp.id === employee.id ? { ...emp, status: newStatus } : emp
        )
      );
      toast.success(`Status updated to ${newStatus}`);
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const deleteEmployee = async (e, id) => {
    e.stopPropagation();
    if (!window.confirm('Are you sure you want to delete this employee?')) return;
    
    try {
      await api.delete(`/employees/${id}`);
      setEmployees(prev => prev.filter(emp => emp.id !== id));
      toast.success('Employee deleted successfully');
    } catch (error) {
      toast.error('Failed to delete employee');
    }
  };

  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      header: 'Employee',
      render: (row) => (
        <div className="flex items-center gap-3">
          <img src={row.avatar} alt={row.name} className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700" />
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">{row.name}</p>
            <p className="text-xs text-slate-500">{row.email}</p>
          </div>
        </div>
      )
    },
    { header: 'Position', accessor: 'position' },
    { header: 'Department', accessor: 'department' },
    {
      header: 'Status',
      render: (row) => (
        <button
          onClick={(e) => toggleStatus(e, row)}
          className={`group flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium transition-all ${
            row.status === 'Active' 
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200' 
              : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400 hover:bg-slate-200'
          }`}
        >
          {row.status}
          {row.status === 'Active' ? (
            <ToggleRight className="text-green-600 dark:text-green-500 group-hover:scale-110 transition-transform" size={16} />
          ) : (
            <ToggleLeft className="text-slate-400 group-hover:scale-110 transition-transform" size={16} />
          )}
        </button>
      )
    },
    {
      header: 'Actions',
      render: (row) => (
        <div className="flex items-center gap-2">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/employees/${row.id}`);
            }}
            className="p-1.5 text-slate-500 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
          >
            <Eye size={18} />
          </button>
          <button 
            onClick={(e) => e.stopPropagation()}
            className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
          >
            <Edit2 size={18} />
          </button>
          <button 
            onClick={(e) => deleteEmployee(e, row.id)}
            className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Employees</h1>
          <p className="text-slate-500 dark:text-slate-400">Manage your company's talent pool.</p>
        </div>
        <Button 
          className="w-full sm:w-auto"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus size={20} />
          Add Employee
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input 
            placeholder="Search by name, email or position..." 
            icon={Search} 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="secondary">
          <Filter size={18} />
          Filters
        </Button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <Table 
          columns={columns} 
          data={filteredEmployees} 
          loading={loading}
          onRowClick={(row) => navigate(`/employees/${row.id}`)}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Employee"
      >
        <EmployeeForm 
          onSuccess={(newEmp) => {
            setEmployees(prev => [newEmp, ...prev]);
            setIsModalOpen(false);
          }}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default EmployeeList;
