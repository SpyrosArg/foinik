import Card from '../components/Card';
import Button from '../components/Button';
import StatCard from '../components/StatCard';
import { Shield, Calendar, TrendingUp, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Assessments = () => {
  const stats = [
    {
      value: '18',
      label: 'Total Assessments',
      change: '+5',
      changeType: 'positive',
      icon: Shield,
    },
    {
      value: '6',
      label: 'Scheduled',
      change: '+2',
      changeType: 'positive',
      icon: Calendar,
    },
    {
      value: '92%',
      label: 'Success Rate',
      change: '+3%',
      changeType: 'positive',
      icon: TrendingUp,
    },
    {
      value: '4',
      label: 'Critical Issues',
      change: '-2',
      changeType: 'positive',
      icon: AlertTriangle,
    },
  ];

  const securityScoreTrend = [
    { month: 'Jan', score: 72 },
    { month: 'Feb', score: 75 },
    { month: 'Mar', score: 78 },
    { month: 'Apr', score: 82 },
    { month: 'May', score: 85 },
    { month: 'Jun', score: 87 },
  ];

  const assessments = [
    {
      id: 1,
      name: 'Web Application Security Assessment',
      type: 'Penetration Test',
      status: 'Completed',
      date: '2024-06-10',
      score: 92,
      findings: 15,
      critical: 1,
    },
    {
      id: 2,
      name: 'Network Infrastructure Audit',
      type: 'Security Audit',
      status: 'In Progress',
      date: '2024-06-15',
      score: 85,
      findings: 8,
      critical: 0,
    },
    {
      id: 3,
      name: 'API Security Assessment',
      type: 'Penetration Test',
      status: 'Scheduled',
      date: '2024-06-20',
      score: null,
      findings: null,
      critical: null,
    },
    {
      id: 4,
      name: 'Cloud Security Review',
      type: 'Security Audit',
      status: 'Completed',
      date: '2024-06-05',
      score: 88,
      findings: 12,
      critical: 2,
    },
    {
      id: 5,
      name: 'Mobile App Security Test',
      type: 'Penetration Test',
      status: 'Scheduled',
      date: '2024-06-25',
      score: null,
      findings: null,
      critical: null,
    },
  ];

  const templates = [
    {
      id: 1,
      name: 'OWASP Top 10 Assessment',
      description: 'Comprehensive assessment based on OWASP Top 10 vulnerabilities',
      duration: '2-3 weeks',
      icon: Shield,
    },
    {
      id: 2,
      name: 'Penetration Testing',
      description: 'Full-scale penetration testing with detailed reporting',
      duration: '3-4 weeks',
      icon: AlertTriangle,
    },
    {
      id: 3,
      name: 'Compliance Audit',
      description: 'Security compliance audit (ISO 27001, SOC 2, etc.)',
      duration: '4-6 weeks',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="space-y-6" style={{ padding: '24px' }}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 
            className="font-bold mb-2"
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#ffffff',
            }}
          >
            Assessments
          </h2>
          <p 
            style={{
              fontSize: '19px',
              color: '#a8b3ae',
            }}
          >
            Manage security assessments and view results
          </p>
        </div>
        <Button variant="primary">Schedule Assessment</Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Security Score Trend */}
      <Card>
        <h3 
          className="font-semibold mb-4"
          style={{
            fontSize: '24px',
            fontWeight: 600,
            color: '#ffffff',
          }}
        >
          Security Score Trend
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={securityScoreTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(125, 255, 143, 0.1)" />
            <XAxis dataKey="month" stroke="#a8b3ae" />
            <YAxis stroke="#a8b3ae" domain={[0, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a251f',
                border: '1px solid rgba(125, 255, 143, 0.2)',
                borderRadius: '8px',
              }}
              labelStyle={{ color: '#ffffff' }}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#7dff8f"
              strokeWidth={3}
              dot={{ fill: '#7dff8f', r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Assessment Templates */}
      <div>
        <h3 
          className="font-semibold mb-4"
          style={{
            fontSize: '24px',
            fontWeight: 600,
            color: '#ffffff',
          }}
        >
          Assessment Templates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.map((template) => {
            const Icon = template.icon;
            return (
              <Card key={template.id} className="hover:shadow-foinik-glow transition-all cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-foinik-accent/10 rounded-lg">
                    <Icon className="w-6 h-6 text-foinik-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="font-semibold mb-2"
                      style={{
                        fontSize: '19px',
                        fontWeight: 600,
                        color: '#ffffff',
                      }}
                    >
                      {template.name}
                    </h4>
                    <p 
                      className="mb-3"
                      style={{
                        fontSize: '17px',
                        color: '#a8b3ae',
                      }}
                    >
                      {template.description}
                    </p>
                    <div 
                      className="flex items-center gap-2"
                      style={{
                        fontSize: '17px',
                        color: '#6b7873',
                      }}
                    >
                      <Clock className="w-4 h-4" />
                      <span>{template.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Assessments */}
      <Card>
        <h3 
          className="font-semibold mb-4"
          style={{
            fontSize: '24px',
            fontWeight: 600,
            color: '#ffffff',
          }}
        >
          Recent Assessments
        </h3>
        <div className="space-y-4">
          {assessments.map((assessment) => (
            <div
              key={assessment.id}
              className="p-4 bg-foinik-bg-secondary/50 rounded-lg border border-foinik-border hover:border-foinik-accent/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 
                    className="font-semibold mb-1"
                    style={{
                      fontSize: '19px',
                      fontWeight: 600,
                      color: '#ffffff',
                    }}
                  >
                    {assessment.name}
                  </h4>
                  <p 
                    style={{
                      fontSize: '17px',
                      color: '#a8b3ae',
                    }}
                  >
                    {assessment.type}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded ${
                    assessment.status === 'Completed'
                      ? 'bg-foinik-positive/20 text-foinik-positive'
                      : assessment.status === 'In Progress'
                      ? 'bg-foinik-info/20 text-foinik-info'
                      : 'bg-foinik-warning/20 text-foinik-warning'
                  }`}
                >
                  {assessment.status}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div>
                  <p 
                    style={{
                      fontSize: '13px',
                      color: '#6b7873',
                      marginBottom: '4px',
                    }}
                  >
                    Date
                  </p>
                      <p 
                        style={{
                          fontSize: '17px',
                          color: '#ffffff',
                        }}
                      >
                        {new Date(assessment.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    {assessment.score !== null && (
                      <>
                        <div>
                          <p 
                            style={{
                              fontSize: '13px',
                              color: '#6b7873',
                              marginBottom: '4px',
                            }}
                          >
                            Score
                          </p>
                          <p 
                            style={{
                              fontSize: '17px',
                              fontWeight: 600,
                              color: '#ffffff',
                            }}
                          >
                            {assessment.score}%
                          </p>
                        </div>
                        <div>
                          <p 
                            style={{
                              fontSize: '13px',
                              color: '#6b7873',
                              marginBottom: '4px',
                            }}
                          >
                            Findings
                          </p>
                          <p 
                            style={{
                              fontSize: '17px',
                              color: '#ffffff',
                            }}
                          >
                            {assessment.findings}
                          </p>
                        </div>
                        <div>
                          <p 
                            style={{
                              fontSize: '13px',
                              color: '#6b7873',
                              marginBottom: '4px',
                            }}
                          >
                            Critical
                          </p>
                          <p 
                            style={{
                              fontSize: '17px',
                              color: '#ff5757',
                            }}
                          >
                            {assessment.critical}
                          </p>
                        </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Assessments;

