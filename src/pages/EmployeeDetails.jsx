import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Briefcase, Building } from 'lucide-react';
import api from '../services/api';
import Button from '../components/Button';
import Card from '../components/Card';
import { Spinner } from '../components/Loader';
import toast from 'react-hot-toast';

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await api.get(`/employees/${id}`);
        setEmployee(response.data);
      } catch (error) {
        toast.error('Employee not found');
        navigate('/employees');
      } finally {
        setLoading(false);
      }
    };
    fetchEmployee();
  }, [id, navigate]);

  if (loading) return <div className="flex justify-center p-20"><Spinner size="lg" /></div>;
  if (!employee) return null;

  return (
    <div className="space-y-6">
      <button 
        onClick={() => navigate('/employees')}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
      >
        <ArrowLeft size={20} />
        Back to List
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <Card className="text-center">
            <div className="relative inline-block mx-auto mb-4">
              <img 
                src={employee.avatar} 
                alt={employee.name} 
                className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-800 shadow-lg"
              />
              <span className={`absolute bottom-2 right-2 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 ${
                employee.status === 'Active' ? 'bg-green-500' : 'bg-slate-400'
              }`}></span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{employee.name}</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-6">{employee.position}</p>
            
            <div className="flex gap-2">
              <Button className="flex-1">Message</Button>
              <Button variant="secondary" className="flex-1">Edit</Button>
            </div>
          </Card>
        </div>

        {/* Details Card */}
        <div className="lg:col-span-2">
          <Card title="Employee Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Email Address</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{employee.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Phone Number</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{employee.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500">
                  <Building size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Department</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{employee.department}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500">
                  <Briefcase size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Position</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{employee.position}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500">
                  <Calendar size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Join Date</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{employee.joinDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Office Location</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">New York, USA</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
