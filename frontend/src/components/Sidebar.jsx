import {
  LayoutDashboard,
  FolderOpen,
  Shield,
  FileText,
  AlertTriangle,
  Search,
  List,
  Zap,
  Target,
  BarChart3,
  Users,
  Settings,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navSections = [
    {
      title: "MAIN",
      items: [
        { icon: LayoutDashboard, label: "Dashboard", path: "/" },
        { icon: FolderOpen, label: "Projects", path: "/projects" },
        { icon: Shield, label: "Assessments", path: "/assessments" },
        { icon: FileText, label: "Reports", path: "/reports" },
      ],
    },
    {
      title: "SECURITY",
      items: [
        {
          icon: AlertTriangle,
          label: "Vulnerabilities",
          path: "/vulnerabilities",
        },
        { icon: Search, label: "Scans", path: "/scans" },
        { icon: List, label: "Findings", path: "/findings" },
      ],
    },
    {
      title: "TOOLS",
      items: [
        { icon: Zap, label: "AI Red Team", path: "/ai-red-team" },
        {
          icon: Target,
          label: "Penetration Testing",
          path: "/penetration-testing",
        },
        { icon: BarChart3, label: "Analytics", path: "/analytics" },
      ],
    },
    {
      title: "SETTINGS",
      items: [
        { icon: Users, label: "Team", path: "/team" },
        { icon: Settings, label: "Settings", path: "/settings" },
      ],
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 glass rounded-lg"
      >
        <svg
          className="w-6 h-6 text-foinik-text"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-60
          transform transition-transform duration-300 ease-in-out
          ${
            isMobileOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
        style={{
          background: "#0d1410",
        }}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div
            className="py-6 px-6"
            style={{
              paddingLeft: "24px", // Align with dashboard p-6 (24px)
            }}
          >
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/Phoenix.png"
                alt="FOINIK Logo"
                className="rounded-full"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  filter: "drop-shadow(0 0 8px rgba(125, 255, 143, 0.5))",
                }}
              />
              <span
                className="font-bold"
                style={{
                  color: "#ffffff",
                  fontSize: "30px",
                  fontWeight: 600,
                  fontFamily: "'Special Elite', 'Courier New', monospace",
                }}
              >
                FOINIK
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-6">
            {navSections.map((section) => (
              <div key={section.title}>
                <div
                  className="mb-2 px-4"
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#4a5854",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: "20px",
                    marginBottom: "8px",
                  }}
                >
                  {section.title}
                </div>
                <div className="space-y-0">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.path);
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMobileOpen(false)}
                        className={`
                          flex items-center gap-3 rounded-[10px]
                          transition-all duration-150 ease-out
                          ${active ? "" : ""}
                        `}
                        style={{
                          padding: "12px 16px",
                          margin: "4px 8px",
                          background: active ? "#7dff8f" : "transparent",
                          color: active ? "#0a0f0d" : "#7a8682",
                          fontWeight: active ? 600 : 500,
                        }}
                        onMouseEnter={(e) => {
                          if (!active) {
                            e.currentTarget.style.background =
                              "rgba(125, 255, 143, 0.08)";
                            e.currentTarget.style.color = "#a8b3ae";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!active) {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "#7a8682";
                          }
                        }}
                      >
                        <Icon
                          className="w-5 h-5"
                          style={{
                            color: active ? "#0a0f0d" : "#5a6662",
                          }}
                        />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile overlay */}
        {isMobileOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </aside>
    </>
  );
};

export default Sidebar;
