import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Assessments from './pages/Assessments';
import Reports from './pages/Reports';

// Placeholder pages for other routes
const PlaceholderPage = ({ title, description }) => (
  <div className="space-y-6 p-6">
    <div>
      <h2 className="text-3xl font-bold text-foinik-text-primary mb-2">{title}</h2>
      <p className="text-foinik-text-secondary">{description}</p>
    </div>
  </div>
);

const Vulnerabilities = () => (
  <PlaceholderPage
    title="Vulnerabilities"
    description="View and manage security vulnerabilities across all projects"
  />
);

const Scans = () => (
  <PlaceholderPage
    title="Scans"
    description="Manage and monitor security scans"
  />
);

const Findings = () => (
  <PlaceholderPage
    title="Findings"
    description="Review and track security findings"
  />
);

const AIRedTeam = () => (
  <PlaceholderPage
    title="AI Red Team"
    description="AI-powered penetration testing and security assessment tools"
  />
);

const PenetrationTesting = () => (
  <PlaceholderPage
    title="Penetration Testing"
    description="Schedule and manage penetration testing engagements"
  />
);

const Analytics = () => (
  <PlaceholderPage
    title="Analytics"
    description="Security analytics and insights dashboard"
  />
);

const Team = () => (
  <PlaceholderPage
    title="Team"
    description="Manage team members and permissions"
  />
);

const Settings = () => (
  <PlaceholderPage
    title="Settings"
    description="Configure platform settings and preferences"
  />
);

const AppContent = () => {
  const location = useLocation();
  
  const getPageTitle = (pathname) => {
    const titles = {
      '/': 'Dashboard',
      '/projects': 'Projects',
      '/assessments': 'Assessments',
      '/reports': 'Reports',
      '/vulnerabilities': 'Vulnerabilities',
      '/scans': 'Scans',
      '/findings': 'Findings',
      '/ai-red-team': 'AI Red Team',
      '/penetration-testing': 'Penetration Testing',
      '/analytics': 'Analytics',
      '/team': 'Team',
      '/settings': 'Settings',
    };
    return titles[pathname] || 'Dashboard';
  };

  return (
    <div 
      className="flex h-screen overflow-hidden" 
      style={{ 
        position: 'relative', 
        zIndex: 1,
        background: 'radial-gradient(ellipse at top left, #1a2d24 0%, #0f1813 25%, #0a0f0d 50%, #000000 100%)',
        backgroundAttachment: 'fixed',
      }}
    >
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0" style={{ position: 'relative', zIndex: 1 }}>
        <TopNav title={getPageTitle(location.pathname)} />
        <main 
          className="flex-1 overflow-y-auto scrollbar-hide" 
          style={{ 
            position: 'relative', 
            zIndex: 1,
            paddingTop: '0',
            marginTop: '0',
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/vulnerabilities" element={<Vulnerabilities />} />
            <Route path="/scans" element={<Scans />} />
            <Route path="/findings" element={<Findings />} />
            <Route path="/ai-red-team" element={<AIRedTeam />} />
            <Route path="/penetration-testing" element={<PenetrationTesting />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/team" element={<Team />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
