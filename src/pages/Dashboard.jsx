import React, { useState, useEffect } from 'react';
import { Users, UserCheck, Building2, TrendingUp } from 'lucide-react';
import Card from '../components/Card';
import api from '../services/api';
import { Spinner } from '../components/Loader';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/employees');
        const employees = response.data;
        
        const activeEmployees = employees.filter(e => e.status === 'Active').length;
        const departments = [...new Set(employees.map(e => e.department))].length;
        
        setStats({
          total: employees.length,
          active: activeEmployees,
          departments: departments,
          growth: '+12.5%'
        });
      } catch (error) {
        console.error('Failed to fetch stats', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []);

  if (loading) return <div className="flex justify-center p-20"><Spinner size="lg" /></div>;

  const statCards = [
    { title: 'Total Employees', value: stats.total, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { title: 'Active Employees', value: stats.active, icon: UserCheck, color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20' },
    { title: 'Departments', value: stats.departments, icon: Building2, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    { title: 'Growth Rate', value: stats.growth, icon: TrendingUp, color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-900/20' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h1>
        <p className="text-slate-500 dark:text-slate-400">Welcome to your employee management portal.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, idx) => (
          <Card key={idx}>
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.title}</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Activity" subtitle="Latest employee updates">
          <div className="space-y-4 mt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 font-bold">
                  {i}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Employee #{i} details updated</p>
                  <p className="text-xs text-slate-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Upcoming Holidays" subtitle="Calendar events">
          <div className="mt-4 p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
            <Building2 size={40} className="text-slate-300 mb-2" />
            <p className="text-slate-500 dark:text-slate-400 text-sm">No holidays this week</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
