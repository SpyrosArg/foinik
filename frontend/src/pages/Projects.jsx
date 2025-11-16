import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import {
  Search,
  Plus,
  Filter,
  MoreVertical,
  FolderOpen,
  Clock,
  CheckCircle2,
} from "lucide-react";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform Security Audit",
      client: "TechCorp Inc.",
      status: "In Progress",
      statusColor: "bg-foinik-info/20 text-foinik-info",
      startDate: "2024-05-15",
      endDate: "2024-06-30",
      progress: 75,
      findings: 12,
      critical: 2,
      high: 4,
      medium: 6,
    },
    {
      id: 2,
      name: "Banking API Penetration Test",
      client: "FinanceBank",
      status: "In Progress",
      statusColor: "bg-foinik-info/20 text-foinik-info",
      startDate: "2024-06-01",
      endDate: "2024-07-15",
      progress: 45,
      findings: 8,
      critical: 1,
      high: 3,
      medium: 4,
    },
    {
      id: 3,
      name: "Healthcare System Assessment",
      client: "MediCare Systems",
      status: "In Progress",
      statusColor: "bg-foinik-info/20 text-foinik-info",
      startDate: "2024-04-20",
      endDate: "2024-06-20",
      progress: 90,
      findings: 15,
      critical: 3,
      high: 5,
      medium: 7,
    },
    {
      id: 4,
      name: "Cloud Infrastructure Review",
      client: "CloudStart",
      status: "In Progress",
      statusColor: "bg-foinik-info/20 text-foinik-info",
      startDate: "2024-06-10",
      endDate: "2024-07-30",
      progress: 30,
      findings: 5,
      critical: 0,
      high: 1,
      medium: 4,
    },
    {
      id: 5,
      name: "Mobile App Security Assessment",
      client: "AppTech Solutions",
      status: "Completed",
      statusColor: "bg-foinik-positive/20 text-foinik-positive",
      startDate: "2024-03-01",
      endDate: "2024-04-30",
      progress: 100,
      findings: 20,
      critical: 2,
      high: 6,
      medium: 12,
    },
    {
      id: 6,
      name: "Network Infrastructure Audit",
      client: "NetCorp",
      status: "Completed",
      statusColor: "bg-foinik-positive/20 text-foinik-positive",
      startDate: "2024-02-15",
      endDate: "2024-03-31",
      progress: 100,
      findings: 18,
      critical: 1,
      high: 5,
      medium: 12,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterStatus === "all" ||
      (filterStatus === "active" && project.status === "In Progress") ||
      (filterStatus === "completed" && project.status === "Completed");
    return matchesSearch && matchesFilter;
  });

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
            Projects
          </h2>
          <p
            style={{
              fontSize: "19px",
              color: "#a8b3ae",
            }}
          >
            Manage and track your security assessment projects
          </p>
        </div>
        <Button variant="primary">
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foinik-text-secondary" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl text-foinik-text-primary placeholder-foinik-text-muted focus:outline-none transition-all"
              style={{
                background: "rgba(20, 31, 26, 0.4)",
                border: "1px solid rgba(125, 255, 143, 0.15)",
                fontSize: "13px",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#7dff8f";
                e.currentTarget.style.boxShadow =
                  "0 0 0 3px rgba(125, 255, 143, 0.1)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(125, 255, 143, 0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-foinik-text-secondary" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2.5 rounded-[14px] text-foinik-text-primary focus:outline-none transition-all"
              style={{
                background: "rgba(20, 31, 26, 0.6)",
                border: "1px solid rgba(125, 255, 143, 0.15)",
                fontSize: "13px",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#7dff8f";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(125, 255, 143, 0.15)";
              }}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="hover:shadow-foinik-glow transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-foinik-accent/10 rounded-lg">
                  <FolderOpen className="w-5 h-5 text-foinik-accent" />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{
                      fontSize: "19px",
                      fontWeight: 600,
                      color: "#ffffff",
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#a8b3ae",
                    }}
                  >
                    {project.client}
                  </p>
                </div>
              </div>
              <button className="p-1 hover:bg-foinik-bg-secondary rounded">
                <MoreVertical className="w-4 h-4 text-foinik-text-secondary" />
              </button>
            </div>

            <div className="mb-4">
              <span
                className={`px-2 py-1 text-xs font-medium rounded ${project.statusColor}`}
              >
                {project.status}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div>
                <div
                  className="flex items-center justify-between mb-1"
                  style={{
                    fontSize: "17px",
                  }}
                >
                  <span style={{ color: "#a8b3ae" }}>Progress</span>
                  <span
                    className="font-medium tabular-nums"
                    style={{
                      color: "#ffffff",
                      fontWeight: 600,
                      fontFamily: "'SF Mono', 'Monaco', 'Consolas', monospace",
                    }}
                  >
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full bg-foinik-bg-primary rounded-full h-2">
                  <div
                    className="bg-foinik-accent h-2 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div
                className="flex items-center gap-4"
                style={{
                  fontSize: "17px",
                }}
              >
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" style={{ color: "#6b7873" }} />
                  <span style={{ color: "#a8b3ae" }}>
                    {new Date(project.endDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2
                    className="w-4 h-4"
                    style={{ color: "#6b7873" }}
                  />
                  <span style={{ color: "#a8b3ae" }}>
                    {project.findings} findings
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-foinik-border">
              <div
                className="flex items-center justify-between"
                style={{
                  fontSize: "13px",
                }}
              >
                <div className="flex items-center gap-3">
                  <span style={{ color: "#ff5757" }}>
                    {project.critical} Critical
                  </span>
                  <span style={{ color: "#ffd166" }}>{project.high} High</span>
                  <span style={{ color: "#64b5f6" }}>
                    {project.medium} Medium
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <Card>
          <div className="text-center py-12">
            <FolderOpen className="w-12 h-12 text-foinik-text-muted mx-auto mb-4" />
            <p className="text-foinik-text-secondary">No projects found</p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Projects;
