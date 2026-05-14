import { useState } from 'react';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [emailUpdates, setEmailUpdates] = useState(true);

  return (
    <div className="page-container">
      <h1 className="page-title">Settings</h1>
      <p className="page-subtitle">Manage your application preferences.</p>
      
      <div className="settings-container">
        <div className="settings-section">
          <h2 className="settings-title">Preferences</h2>
          
          <div className="setting-item">
            <div className="setting-label">
              <label>Enable Notifications</label>
              <p className="setting-description">Receive push notifications</p>
            </div>
            <div className="toggle-switch">
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                id="notifications"
              />
              <label htmlFor="notifications" className="toggle-label"></label>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-label">
              <label>Dark Mode</label>
              <p className="setting-description">Enable dark theme</p>
            </div>
            <div className="toggle-switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                id="darkmode"
              />
              <label htmlFor="darkmode" className="toggle-label"></label>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-label">
              <label>Email Updates</label>
              <p className="setting-description">Receive email notifications</p>
            </div>
            <div className="toggle-switch">
              <input
                type="checkbox"
                checked={emailUpdates}
                onChange={(e) => setEmailUpdates(e.target.checked)}
                id="emailupdates"
              />
              <label htmlFor="emailupdates" className="toggle-label"></label>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2 className="settings-title">Account</h2>
          
          <div className="setting-item">
            <label>Account Status</label>
            <p className="setting-description">Your account is active and verified</p>
          </div>

          <div className="setting-item">
            <label>Last Login</label>
            <p className="setting-description">Today at 10:30 AM</p>
          </div>
        </div>

        <div className="settings-actions">
          <button className="save-btn">Save Settings</button>
          <button className="reset-btn">Reset to Default</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
