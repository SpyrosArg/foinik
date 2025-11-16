import { useState } from 'react';
import StatCard from '../components/StatCard';
import Card from '../components/Card';
import Button from '../components/Button';
import { 
  FolderOpen, 
  Search, 
  AlertTriangle, 
  Shield,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Dashboard = () => {
  const [userName] = useState('Spyros');

  // Sample data
  const stats = [
    {
      value: '24',
      label: 'Total Projects',
      change: '+12%',
      changeType: 'positive',
      icon: FolderOpen,
    },
    {
      value: '8',
      label: 'Active Scans',
      change: '+3',
      changeType: 'positive',
      icon: Search,
    },
    {
      value: '5',
      label: 'Critical Findings',
      change: '-2',
      changeType: 'positive',
      icon: AlertTriangle,
    },
    {
      value: '87%',
      label: 'Security Score',
      change: '+5%',
      changeType: 'positive',
      icon: Shield,
    },
  ];

  const vulnerabilityTrends = [
    { month: 'Jan', Critical: 12, High: 24, Medium: 45, Low: 67 },
    { month: 'Feb', Critical: 10, High: 22, Medium: 43, Low: 65 },
    { month: 'Mar', Critical: 8, High: 20, Medium: 41, Low: 63 },
    { month: 'Apr', Critical: 7, High: 18, Medium: 39, Low: 61 },
    { month: 'May', Critical: 6, High: 16, Medium: 37, Low: 59 },
    { month: 'Jun', Critical: 5, High: 15, Medium: 35, Low: 57 },
  ];

  const scanResults = [
    { date: '2024-06-01', passed: 45, failed: 12 },
    { date: '2024-06-02', passed: 48, failed: 10 },
    { date: '2024-06-03', passed: 50, failed: 8 },
    { date: '2024-06-04', passed: 52, failed: 7 },
    { date: '2024-06-05', passed: 55, failed: 5 },
    { date: '2024-06-06', passed: 58, failed: 4 },
    { date: '2024-06-07', passed: 60, failed: 3 },
  ];

  const activeProjects = [
    {
      id: 1,
      name: 'E-Commerce Platform Security Audit',
      client: 'TechCorp Inc.',
      status: 'In Progress',
      progress: 75,
      findings: 12,
      critical: 2,
    },
    {
      id: 2,
      name: 'Banking API Penetration Test',
      client: 'FinanceBank',
      status: 'In Progress',
      progress: 45,
      findings: 8,
      critical: 1,
    },
    {
      id: 3,
      name: 'Healthcare System Assessment',
      client: 'MediCare Systems',
      status: 'In Progress',
      progress: 90,
      findings: 15,
      critical: 3,
    },
    {
      id: 4,
      name: 'Cloud Infrastructure Review',
      client: 'CloudStart',
      status: 'In Progress',
      progress: 30,
      findings: 5,
      critical: 0,
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'scan',
      message: 'Completed security scan for E-Commerce Platform',
      time: '2 minutes ago',
      icon: CheckCircle2,
      color: 'text-foinik-positive',
    },
    {
      id: 2,
      type: 'finding',
      message: 'New critical vulnerability found in Banking API',
      time: '15 minutes ago',
      icon: AlertTriangle,
      color: 'text-foinik-negative',
    },
    {
      id: 3,
      type: 'project',
      message: 'Healthcare System Assessment 90% complete',
      time: '1 hour ago',
      icon: TrendingUp,
      color: 'text-foinik-info',
    },
    {
      id: 4,
      type: 'report',
      message: 'Security report generated for TechCorp Inc.',
      time: '2 hours ago',
      icon: CheckCircle2,
      color: 'text-foinik-positive',
    },
    {
      id: 5,
      type: 'scan',
      message: 'Automated scan started for Cloud Infrastructure',
      time: '3 hours ago',
      icon: Clock,
      color: 'text-foinik-info',
    },
  ];

  return (
    <div className="space-y-6" style={{ padding: '24px' }}>
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 
          className="font-bold mb-2"
          style={{
            fontSize: '36px',
            fontWeight: 600,
            color: '#ffffff',
          }}
        >
          Welcome back, {userName}
        </h2>
        <p 
          style={{
            fontSize: '21px',
            color: '#a8b3ae',
          }}
        >
          Here's what's happening with your security assessments today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vulnerability Trends */}
        <Card>
          <h3 
            className="font-semibold mb-4"
            style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#ffffff',
            }}
          >
            Vulnerability Trends
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={vulnerabilityTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(125, 255, 143, 0.05)" />
              <XAxis dataKey="month" stroke="#a8b3ae" />
              <YAxis stroke="#a8b3ae" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0a0f0d',
                  border: '1px solid rgba(125, 255, 143, 0.15)',
                  borderRadius: '12px',
                  padding: '12px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                }}
                labelStyle={{ 
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: 600,
                  marginBottom: '8px',
                }}
                itemStyle={{
                  color: '#a8b3ae',
                  fontSize: '13px',
                }}
              />
              <Legend />
              <Area type="monotone" dataKey="Critical" stackId="1" stroke="#ff5757" fill="#ff5757" fillOpacity={0.6} />
              <Area type="monotone" dataKey="High" stackId="1" stroke="#ffd166" fill="#ffd166" fillOpacity={0.6} />
              <Area type="monotone" dataKey="Medium" stackId="1" stroke="#64b5f6" fill="#64b5f6" fillOpacity={0.6} />
              <Area type="monotone" dataKey="Low" stackId="1" stroke="#7dff8f" fill="#7dff8f" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Scan Results */}
        <Card>
          <h3 
            className="font-semibold mb-4"
            style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#ffffff',
            }}
          >
            Scan Results (Last 7 Days)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={scanResults}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(125, 255, 143, 0.05)" />
              <XAxis dataKey="date" stroke="#a8b3ae" tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} />
              <YAxis stroke="#a8b3ae" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0a0f0d',
                  border: '1px solid rgba(125, 255, 143, 0.15)',
                  borderRadius: '12px',
                  padding: '12px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                }}
                labelStyle={{ 
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: 600,
                  marginBottom: '8px',
                }}
                itemStyle={{
                  color: '#a8b3ae',
                  fontSize: '13px',
                }}
              />
              <Legend />
              <Bar dataKey="passed" fill="#7dff8f" radius={[8, 8, 0, 0]} />
              <Bar dataKey="failed" fill="#ff5757" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Active Projects and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Projects */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 
              className="font-semibold"
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#ffffff',
              }}
            >
              Active Projects
            </h3>
            <Button variant="ghost" className="text-sm">
              View All
            </Button>
          </div>
          <div className="space-y-0">
            {activeProjects.map((project, index) => (
              <div
                key={project.id}
                className="py-4 transition-all duration-150 ease-out"
                style={{
                  borderBottom: index < activeProjects.length - 1 ? '1px solid rgba(125, 255, 143, 0.04)' : 'none',
                  paddingLeft: '0',
                  paddingRight: '0',
                  paddingTop: '16px',
                  paddingBottom: '16px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(125, 255, 143, 0.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 
                      className="font-semibold mb-1"
                      style={{
                        fontSize: '19px',
                        fontWeight: 600,
                        color: '#ffffff',
                      }}
                    >
                      {project.name}
                    </h4>
                    <p 
                      className="text-sm"
                      style={{
                        fontSize: '17px',
                        color: '#6b7873',
                      }}
                    >
                      {project.client}
                    </p>
                  </div>
                  <span 
                    className="px-2 py-1 text-xs font-medium rounded"
                    style={{
                      background: 'rgba(100, 181, 246, 0.2)',
                      color: '#64b5f6',
                      fontSize: '11px',
                      fontWeight: 600,
                      borderRadius: '6px',
                    }}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span 
                      style={{
                        fontSize: '17px',
                        color: '#a8b3ae',
                      }}
                    >
                      Progress
                    </span>
                    <span 
                      className="font-medium tabular-nums"
                      style={{
                        fontSize: '17px',
                        color: '#ffffff',
                        fontWeight: 600,
                        fontFamily: "'SF Mono', 'Monaco', 'Consolas', monospace",
                      }}
                    >
                      {project.progress}%
                    </span>
                  </div>
                  <div 
                    className="w-full rounded-full h-2"
                    style={{
                      background: '#0a0f0d',
                    }}
                  >
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{ 
                        width: `${project.progress}%`,
                        background: '#7dff8f',
                      }}
                    />
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span 
                      style={{
                        fontSize: '17px',
                        color: '#a8b3ae',
                      }}
                    >
                      Findings: <span style={{ color: '#ffffff' }}>{project.findings}</span>
                    </span>
                    <span 
                      style={{
                        fontSize: '17px',
                        color: '#a8b3ae',
                      }}
                    >
                      Critical: <span style={{ color: '#ff5757' }}>{project.critical}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 
              className="font-semibold"
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#ffffff',
              }}
            >
              Recent Activity
            </h3>
            <Button variant="ghost" className="text-sm">
              View All
            </Button>
          </div>
          <div className="space-y-0">
            {recentActivity.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 py-3 transition-all duration-150 ease-out"
                  style={{
                    borderBottom: index < recentActivity.length - 1 ? '1px solid rgba(125, 255, 143, 0.04)' : 'none',
                    paddingLeft: '0',
                    paddingRight: '0',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(125, 255, 143, 0.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <div 
                    className="p-2 rounded-lg"
                    style={{
                      background: 'rgba(18, 25, 21, 0.5)',
                    }}
                  >
                    <Icon 
                      className="w-4 h-4" 
                      style={{
                        color: activity.color === 'text-foinik-positive' ? '#7dff8f' : 
                               activity.color === 'text-foinik-negative' ? '#ff5757' : 
                               activity.color === 'text-foinik-info' ? '#64b5f6' : '#a8b3ae',
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p 
                      style={{
                        fontSize: '17px',
                        color: '#ffffff',
                      }}
                    >
                      {activity.message}
                    </p>
                    <p 
                      className="mt-1"
                      style={{
                        fontSize: '15px',
                        color: '#6b7873',
                      }}
                    >
                      {activity.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <h3 
          className="font-semibold mb-4"
          style={{
            fontSize: '24px',
            fontWeight: 600,
            color: '#ffffff',
          }}
        >
          Quick Actions
        </h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">New Project</Button>
          <Button variant="secondary">Start Scan</Button>
          <Button variant="secondary">Generate Report</Button>
          <Button variant="ghost">View Analytics</Button>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;

