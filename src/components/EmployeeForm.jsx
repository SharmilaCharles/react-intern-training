import React, { useState } from 'react';
import { User, Mail, Briefcase, Building } from 'lucide-react';
import Input from './Input';
import Button from './Button';
import api from '../services/api';
import toast from 'react-hot-toast';

const EmployeeForm = ({ onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    department: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.position.trim()) newErrors.position = 'Role is required';
    if (!formData.department.trim()) newErrors.department = 'Department is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const newEmployee = {
        ...formData,
        status: 'Active',
        joinDate: new Date().toISOString().split('T')[0],
        avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
      };
      
      const response = await api.post('/employees', newEmployee);
      toast.success('Employee added successfully!');
      if (onSuccess) onSuccess(response.data);
    } catch (error) {
      toast.error('Failed to add employee');
      console.error('Error adding employee:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Full Name"
        name="name"
        placeholder="e.g. John Doe"
        icon={User}
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      
      <Input
        label="Email Address"
        name="email"
        type="email"
        placeholder="e.g. john@example.com"
        icon={Mail}
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      
      <Input
        label="Role"
        name="position"
        placeholder="e.g. Senior Developer"
        icon={Briefcase}
        value={formData.position}
        onChange={handleChange}
        error={errors.position}
      />
      
      <Input
        label="Department"
        name="department"
        placeholder="e.g. Engineering"
        icon={Building}
        value={formData.department}
        onChange={handleChange}
        error={errors.department}
      />

      <div className="flex gap-3 pt-4">
        <Button
          type="button"
          variant="secondary"
          className="flex-1"
          onClick={onCancel}
          disabled={loading}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="flex-1"
          loading={loading}
        >
          Add Employee
        </Button>
      </div>
    </form>
  );
};

export default EmployeeForm;
