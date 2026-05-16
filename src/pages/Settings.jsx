import React from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import { User, Bell, Shield, Moon, Globe } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Settings</h1>
        <p className="text-slate-500 dark:text-slate-400">Manage your profile and preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <nav className="space-y-1">
            {[
              { name: 'Profile', icon: User, active: true },
              { name: 'Notifications', icon: Bell },
              { name: 'Security', icon: Shield },
              { name: 'Appearance', icon: Moon },
              { name: 'Language', icon: Globe },
            ].map((item) => (
              <button
                key={item.name}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  item.active 
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <item.icon size={20} />
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card title="Profile Information" subtitle="Update your personal details">
            <div className="space-y-6 mt-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <Input label="First Name" defaultValue="Admin" />
                </div>
                <div className="flex-1">
                  <Input label="Last Name" defaultValue="User" />
                </div>
              </div>
              <Input label="Email Address" defaultValue="admin@example.com" />
              <div className="pt-4 flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </div>
          </Card>

          <Card title="Account Security" subtitle="Manage your password">
            <div className="space-y-6 mt-6">
              <Input label="Current Password" type="password" placeholder="••••••••" />
              <Input label="New Password" type="password" placeholder="••••••••" />
              <div className="pt-4 flex justify-end">
                <Button variant="secondary">Update Password</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
