import Card from "../components/Card";
import Button from "../components/Button";
import {
  FileText,
  Download,
  Eye,
  Calendar,
  User,
  TrendingUp,
} from "lucide-react";

const Reports = () => {
  const reports = [
    {
      id: 1,
      title: "E-Commerce Platform Security Audit Report",
      client: "Vodafone",
      type: "Penetration Test",
      date: "2025-06-10",
      author: "Spyros Argyrakos",
      status: "Final",
      findings: 15,
      critical: 2,
      size: "2.4 MB",
    },
    {
      id: 2,
      title: "Banking API Security Assessment",
      client: "SES",
      type: "Security Audit",
      date: "2025-06-05",
      author: "Spyros Argyrakos",
      status: "Draft",
      findings: 8,
      critical: 1,
      size: "1.8 MB",
    },
    {
      id: 3,
      title: "Healthcare System Compliance Report",
      client: "Thales",
      type: "Compliance Audit",
      date: "2025-05-28",
      author: "Spyros Argyrakos",
      status: "Final",
      findings: 20,
      critical: 3,
      size: "3.1 MB",
    },
    {
      id: 4,
      title: "Cloud Infrastructure Security Review",
      client: "IBM",
      type: "Security Audit",
      date: "2025-05-20",
      author: "Spyros Argyrakos",
      status: "Final",
      findings: 12,
      critical: 0,
      size: "2.0 MB",
    },
    {
      id: 5,
      title: "Mobile App Security Assessment",
      client: "Vodafone",
      type: "Penetration Test",
      date: "2025-05-15",
      author: "Spyros Argyrakos",
      status: "Final",
      findings: 18,
      critical: 2,
      size: "2.7 MB",
    },
    {
      id: 6,
      title: "Network Infrastructure Audit Report",
      client: "AlphaTech",
      type: "Security Audit",
      date: "2025-05-10",
      author: "Spyros Argyrakos",
      status: "Final",
      findings: 14,
      critical: 1,
      size: "2.2 MB",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Report Generated",
      report: "E-Commerce Platform Security Audit Report",
      user: "Spyros Argyrakos",
      time: "2 hours ago",
    },
    {
      id: 2,
      action: "Report Downloaded",
      report: "Banking API Security Assessment",
      user: "Spyros Argyrakos",
      time: "5 hours ago",
    },
    {
      id: 3,
      action: "Report Shared",
      report: "Healthcare System Compliance Report",
      user: "Spyros Argyrakos",
      time: "1 day ago",
    },
  ];

  return (
    <div className="space-y-6" style={{ padding: "24px" }}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2
            className="font-bold mb-2"
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            Reports
          </h2>
          <p
            style={{
              fontSize: "19px",
              color: "#a8b3ae",
            }}
          >
            View and manage security assessment reports
          </p>
        </div>
        <Button variant="primary">Generate Report</Button>
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        {reports.map((report) => (
          <Card
            key={report.id}
            className="hover:shadow-foinik-glow transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-4 flex-1">
                <div className="p-3 bg-foinik-accent/10 rounded-lg">
                  <FileText className="w-6 h-6 text-foinik-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-semibold mb-1"
                    style={{
                      fontSize: "19px",
                      fontWeight: 600,
                      color: "#ffffff",
                    }}
                  >
                    {report.title}
                  </h3>
                  <div
                    className="flex flex-wrap items-center gap-4"
                    style={{
                      fontSize: "17px",
                      color: "#a8b3ae",
                    }}
                  >
                    <span>{report.client}</span>
                    <span>•</span>
                    <span>{report.type}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(report.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{report.author}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${
                        report.status === "Final"
                          ? "bg-foinik-positive/20 text-foinik-positive"
                          : "bg-foinik-warning/20 text-foinik-warning"
                      }`}
                    >
                      {report.status}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "17px",
                      color: "#a8b3ae",
                    }}
                  >
                    {report.findings} findings • {report.critical} critical •{" "}
                    {report.size}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" className="p-2">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" className="p-2">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <h3
            className="font-semibold mb-4"
            style={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-foinik-bg-secondary/50 transition-colors"
              >
                <div className="p-2 rounded-lg bg-foinik-bg-secondary">
                  <TrendingUp className="w-4 h-4 text-foinik-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#ffffff",
                    }}
                  >
                    <span style={{ fontWeight: 500 }}>{activity.action}</span>:{" "}
                    {activity.report}
                  </p>
                  <div
                    className="flex items-center gap-2 mt-1"
                    style={{
                      fontSize: "15px",
                      color: "#6b7873",
                    }}
                  >
                    <span>{activity.user}</span>
                    <span>•</span>
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3
            className="font-semibold mb-4"
            style={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            Report Statistics
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span
                  style={{
                    fontSize: "17px",
                    color: "#a8b3ae",
                  }}
                >
                  Total Reports
                </span>
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "#ffffff",
                  }}
                >
                  {reports.length}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span
                  style={{
                    fontSize: "17px",
                    color: "#a8b3ae",
                  }}
                >
                  Final Reports
                </span>
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "#7dff8f",
                  }}
                >
                  {reports.filter((r) => r.status === "Final").length}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span
                  style={{
                    fontSize: "17px",
                    color: "#a8b3ae",
                  }}
                >
                  Draft Reports
                </span>
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "#ffd166",
                  }}
                >
                  {reports.filter((r) => r.status === "Draft").length}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span
                  style={{
                    fontSize: "17px",
                    color: "#a8b3ae",
                  }}
                >
                  Total Findings
                </span>
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "#ffffff",
                  }}
                >
                  {reports.reduce((sum, r) => sum + r.findings, 0)}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
