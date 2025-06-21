import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import {
  Users,
  UserPlus,
  Edit3,
  Trash2,
  LogOut,
  Search,
  BarChart3,
  PieChart as PieChartIcon,
  User,
  Mail,
  Phone,
  MapPin,
  Save,
  X
} from "lucide-react";

// Mock data
const mockAWWs = [
  {
    _id: "1",
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    location: "Mumbai, Maharashtra",
    contact: "+91 9876543210"
  },
  {
    _id: "2",
    name: "Sunita Devi",
    email: "sunita.devi@example.com",
    location: "Delhi",
    contact: "+91 9876543211"
  },
  {
    _id: "3",
    name: "Meera Patel",
    email: "meera.patel@example.com",
    location: "Ahmedabad, Gujarat",
    contact: "+91 9876543212"
  }
];

const mockBeneficiaries = [
  {
    _id: "1",
    name: "Anita Kumar",
    email: "anita.kumar@example.com",
    phone: "+91 9876543213",
    address: "123 Main Street, Mumbai"
  },
  {
    _id: "2",
    name: "Rekha Singh",
    email: "rekha.singh@example.com",
    phone: "+91 9876543214",
    address: "456 Park Road, Delhi"
  },
  {
    _id: "3",
    name: "Kavita Joshi",
    email: "kavita.joshi@example.com",
    phone: "+91 9876543215",
    address: "789 Garden Lane, Pune"
  },
  {
    _id: "4",
    name: "Sita Rani",
    email: "sita.rani@example.com",
    phone: "+91 9876543216",
    address: "321 Hill View, Bangalore"
  },
  {
    _id: "5",
    name: "Geeta Sharma",
    email: "geeta.sharma@example.com",
    phone: "+91 9876543217",
    address: "654 Lake Side, Chennai"
  }
];

// CSS Styles Object
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    margin: 0,
    padding: 0
  },
  
  // Header Styles
  header: {
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    borderBottom: '1px solid #e5e7eb'
  },
  headerContent: {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '4rem'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#111827',
    margin: 0
  },
  logoutButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    border: 'none',
    fontSize: '0.875rem',
    fontWeight: '500',
    borderRadius: '0.375rem',
    color: '#ffffff',
    backgroundColor: '#dc2626',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    textDecoration: 'none'
  },
  
  // Navigation Styles
  nav: {
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
  },
  navContent: {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    gap: '2rem'
  },
  tabButton: {
    padding: '1rem 0.25rem',
    border: 'none',
    borderBottom: '2px solid transparent',
    backgroundColor: 'transparent',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s',
    color: '#6b7280'
  },
  tabButtonActive: {
    padding: '1rem 0.25rem',
    border: 'none',
    borderBottom: '2px solid #3b82f6',
    backgroundColor: 'transparent',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s',
    color: '#3b82f6'
  },
  tabContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  
  // Main Content Styles
  main: {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '1.5rem 1rem'
  },
  
  // Loading Styles
  loading: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50
  },
  loadingContent: {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    textAlign: 'center'
  },
  spinner: {
    width: '2rem',
    height: '2rem',
    border: '2px solid #e5e7eb',
    borderTop: '2px solid #3b82f6',
    borderRadius: '50%',
    margin: '0 auto',
    animation: 'spin 1s linear infinite'
  },
  
  // Grid Styles
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '1.5rem'
  },
  chartsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '1.5rem'
  },
  
  // Card Styles
  card: {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    border: '1px solid #e5e7eb'
  },
  cardHeader: {
    padding: '1rem 1.5rem',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.125rem',
    fontWeight: '500',
    color: '#111827'
  },
  cardContent: {
    padding: '1.5rem'
  },
  
  // Stats Card Styles
  statsCardContent: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    flexShrink: 0,
    marginRight: '1rem'
  },
  statsLabel: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#6b7280',
    margin: 0
  },
  statsValue: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#111827',
    margin: 0
  },
  
  // Form Styles
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    marginBottom: '1rem'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  formLabel: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.25rem',
    display: 'flex',
    alignItems: 'center'
  },
  formInput: {
    width: '100%',
    padding: '0.5rem 0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box'
  },
  formButtons: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap'
  },
  
  // Button Styles
  primaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    border: 'none',
    fontSize: '0.875rem',
    fontWeight: '500',
    borderRadius: '0.375rem',
    color: '#ffffff',
    backgroundColor: '#3b82f6',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  secondaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    fontSize: '0.875rem',
    fontWeight: '500',
    borderRadius: '0.375rem',
    color: '#374151',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  editButton: {
    color: '#3b82f6',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '0.875rem',
    fontWeight: '500'
  },
  deleteButton: {
    color: '#dc2626',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '0.875rem',
    fontWeight: '500'
  },
  
  // Table Styles
  tableContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    border: '1px solid #e5e7eb'
  },
  tableHeader: {
    padding: '1rem 1.5rem',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  tableTitle: {
    fontSize: '1.125rem',
    fontWeight: '500',
    color: '#111827'
  },
  searchContainer: {
    position: 'relative'
  },
  searchInput: {
    paddingLeft: '2.5rem',
    paddingRight: '1rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    minWidth: '200px'
  },
  searchIcon: {
    position: 'absolute',
    left: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
    pointerEvents: 'none'
  },
  tableWrapper: {
    overflowX: 'auto'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  tableHead: {
    backgroundColor: '#f9fafb'
  },
  tableHeadCell: {
    padding: '0.75rem 1.5rem',
    textAlign: 'left',
    fontSize: '0.75rem',
    fontWeight: '500',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    borderBottom: '1px solid #e5e7eb'
  },
  tableBodyCell: {
    padding: '1rem 1.5rem',
    fontSize: '0.875rem',
    borderBottom: '1px solid #e5e7eb'
  },
  tableCellName: {
    fontWeight: '500',
    color: '#111827'
  },
  tableCellRegular: {
    color: '#6b7280'
  },
  tableCellActions: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap'
  },
  
  // Empty State
  emptyState: {
    textAlign: 'center',
    padding: '2rem',
    color: '#6b7280'
  },
  
  // Responsive
  '@media (max-width: 768px)': {
    statsGrid: {
      gridTemplateColumns: '1fr'
    },
    chartsGrid: {
      gridTemplateColumns: '1fr'
    },
    formGrid: {
      gridTemplateColumns: '1fr'
    },
    navContent: {
      flexDirection: 'column',
      gap: '0.5rem',
      padding: '1rem'
    },
    tableHeader: {
      flexDirection: 'column',
      alignItems: 'stretch'
    }
  }
};

// CSS Animation
const spinKeyframes = `
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

function AdminDashboard() {
  const [awws, setAWWs] = useState([]);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [stats, setStats] = useState({ awwCount: 0, beneficiaryCount: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    contact: ""
  });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      setAWWs(mockAWWs);
      setBeneficiaries(mockBeneficiaries);
      setStats({
        awwCount: mockAWWs.length,
        beneficiaryCount: mockBeneficiaries.length
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    // Redirect to RoleSelector page
    window.location.href = "http://localhost:5173/RoleSelector";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 500));

      if (editingId) {
        const updatedAWWs = awws.map(aww =>
          aww._id === editingId
            ? { ...aww, ...formData, _id: editingId }
            : aww
        );
        setAWWs(updatedAWWs);
      } else {
        const newAWW = {
          ...formData,
          _id: Date.now().toString()
        };
        setAWWs([...awws, newAWW]);
      }

      setFormData({ name: "", email: "", password: "", location: "", contact: "" });
      setEditingId(null);
      setStats(prev => ({
        ...prev,
        awwCount: editingId ? awws.length : awws.length + 1
      }));

    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (aww) => {
    setFormData({ ...aww, password: "" });
    setEditingId(aww._id);
    setActiveTab("aww-management");
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this AWW?")) {
      try {
        await new Promise(resolve => setTimeout(resolve, 300));
        const updatedAWWs = awws.filter(aww => aww._id !== id);
        setAWWs(updatedAWWs);
        setStats(prev => ({ ...prev, awwCount: updatedAWWs.length }));
      } catch (error) {
        console.error("Error deleting AWW:", error);
      }
    }
  };

  const handleCancel = () => {
    setFormData({ name: "", email: "", password: "", location: "", contact: "" });
    setEditingId(null);
  };

  const chartData = [
    { name: "AWWs", value: stats.awwCount, color: "#3B82F6" },
    { name: "Beneficiaries", value: stats.beneficiaryCount, color: "#10B981" }
  ];

  const totalUsers = stats.awwCount + stats.beneficiaryCount;
  const awwPercentage = totalUsers > 0 ? ((stats.awwCount / totalUsers) * 100).toFixed(0) : 0;
  const beneficiariesPercentage = totalUsers > 0 ? ((stats.beneficiaryCount / totalUsers) * 100).toFixed(0) : 0;

  const pieChartLabel = ({ name }) => {
    if (name === "AWWs") return `AWWs ${awwPercentage}%`;
    if (name === "Beneficiaries") return `Beneficiaries ${beneficiariesPercentage}%`;
    return "";
  };

  const barData = [
    { name: "AWWs", count: stats.awwCount },
    { name: "Beneficiaries", count: stats.beneficiaryCount }
  ];

  const filteredAWWs = awws.filter(aww =>
    aww.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    aww.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (aww.location && aww.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredBeneficiaries = beneficiaries.filter(beneficiary =>
    beneficiary.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    beneficiary.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    beneficiary.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <style>
        {spinKeyframes}
        {`
          .form-input:focus {
            border-color: #3b82f6 !important;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
          }
          .search-input:focus {
            border-color: #3b82f6 !important;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
          }
          .logout-button:hover {
            background-color: #b91c1c !important;
          }
          .tab-button:hover {
            color: #374151 !important;
            border-bottom-color: #d1d5db !important;
          }
          .primary-button:hover {
            background-color: #2563eb !important;
          }
          .secondary-button:hover {
            background-color: #f9fafb !important;
          }
          .edit-button:hover {
            color: #1d4ed8 !important;
          }
          .delete-button:hover {
            color: #b91c1c !important;
          }
          @media (max-width: 768px) {
            .stats-grid {
              grid-template-columns: 1fr !important;
            }
            .charts-grid {
              grid-template-columns: 1fr !important;
            }
            .form-grid {
              grid-template-columns: 1fr !important;
            }
            .nav-content {
              flex-direction: column !important;
              gap: 0.5rem !important;
              padding: 1rem !important;
            }
            .table-header {
              flex-direction: column !important;
              align-items: stretch !important;
            }
          }
        `}
      </style>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div>
            <h1 style={styles.title}>Admin Dashboard</h1>
          </div>
          <div>
            <button
              onClick={handleLogout}
              style={styles.logoutButton}
              className="logout-button"
            >
              <LogOut style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav style={styles.nav}>
        <div style={styles.navContent} className="nav-content">
          {[
            { id: "overview", label: "Overview", icon: BarChart3 },
            { id: "aww-management", label: "AWW Management", icon: Users },
            { id: "beneficiaries", label: "Beneficiaries", icon: User },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {setActiveTab(tab.id); setSearchTerm("");}}
              style={activeTab === tab.id ? styles.tabButtonActive : styles.tabButton}
              className="tab-button"
            >
              <div style={styles.tabContent}>
                <tab.icon style={{ width: '1rem', height: '1rem' }} />
                <span>{tab.label}</span>
              </div>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main style={styles.main}>
        {isLoading && (
          <div style={styles.loading}>
            <div style={styles.loadingContent}>
              <div style={styles.spinner}></div>
              <p style={{ marginTop: '0.5rem', color: '#6b7280' }}>Loading...</p>
            </div>
          </div>
        )}

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            {/* Stats Cards */}
            <div style={styles.statsGrid} className="stats-grid">
              <div style={styles.card}>
                <div style={styles.statsCardContent}>
                  <div style={styles.statsIcon}>
                    <Users style={{ height: '1.75rem', width: '1.75rem', color: '#3b82f6' }} />
                  </div>
                  <div>
                    <dt style={styles.statsLabel}>Total AWWs</dt>
                    <dd style={styles.statsValue}>{stats.awwCount}</dd>
                  </div>
                </div>
              </div>

              <div style={styles.card}>
                <div style={styles.statsCardContent}>
                  <div style={styles.statsIcon}>
                    <User style={{ height: '1.75rem', width: '1.75rem', color: '#10b981' }} />
                  </div>
                  <div>
                    <dt style={styles.statsLabel}>Total Beneficiaries</dt>
                    <dd style={styles.statsValue}>{stats.beneficiaryCount}</dd>
                  </div>
                </div>
              </div>

              <div style={styles.card}>
                <div style={styles.statsCardContent}>
                  <div style={styles.statsIcon}>
                    <PieChartIcon style={{ height: '1.75rem', width: '1.75rem', color: '#8b5cf6' }} />
                  </div>
                  <div>
                    <dt style={styles.statsLabel}>AWW Ratio</dt>
                    <dd style={styles.statsValue}>
                      {stats.awwCount > 0
                        ? `${(stats.beneficiaryCount / stats.awwCount).toFixed(0)}:1`
                        : (stats.beneficiaryCount > 0 ? `${stats.beneficiaryCount}:0` : `0:0`)}
                    </dd>
                  </div>
                </div>
              </div>

              <div style={styles.card}>
                <div style={styles.statsCardContent}>
                  <div style={styles.statsIcon}>
                    <BarChart3 style={{ height: '1.75rem', width: '1.75rem', color: '#f59e0b' }} />
                  </div>
                  <div>
                    <dt style={styles.statsLabel}>Total Users</dt>
                    <dd style={styles.statsValue}>{stats.awwCount + stats.beneficiaryCount}</dd>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div style={styles.chartsGrid} className="charts-grid">
              <div style={styles.card}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#111827', marginBottom: '1rem' }}>
                  User Distribution
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={chartData}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      labelLine={false}
                      label={pieChartLabel}
                      animationDuration={500}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div style={styles.card}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#111827', marginBottom: '1rem' }}>
                  User Statistics
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barData}>
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* AWW Management Tab */}
        {activeTab === "aww-management" && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* AWW Form */}
            <div style={styles.tableContainer}>
              <div style={styles.cardHeader}>
                <UserPlus style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} />
                {editingId ? "Edit AWW" : "Add New AWW"}
              </div>
              <div style={styles.cardContent}>
                <form onSubmit={handleSubmit}>
                  <div style={styles.formGrid} className="form-grid">
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>
                        <User style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }} />
                        Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={styles.formInput}
                        className="form-input"
                        required
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>
                        <Mail style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }} />
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={styles.formInput}
                        className="form-input"
                        required
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>
                        Password {editingId ? "(leave blank to keep current)" : "*"}
                      </label>
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        style={styles.formInput}
                        className="form-input"
                        required={!editingId}
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>
                        <MapPin style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }} />
                        Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        style={styles.formInput}
                        className="form-input"
                      />
                    </div>
                    <div style={{ ...styles.formGroup, gridColumn: 'span 2' }}>
                      <label style={styles.formLabel}>
                        <Phone style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }} />
                        Contact
                      </label>
                      <input
                        type="text"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        style={styles.formInput}
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div style={{ ...styles.formButtons, marginTop: '1rem' }}>
                    <button
                      type="submit"
                      style={styles.primaryButton}
                      className="primary-button"
                    >
                      <Save style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
                      {editingId ? "Update AWW" : "Add AWW"}
                    </button>
                    {editingId && (
                      <button
                        type="button"
                        onClick={handleCancel}
                        style={styles.secondaryButton}
                        className="secondary-button"
                      >
                        <X style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* AWW List */}
            <div style={styles.tableContainer}>
              <div style={styles.tableHeader} className="table-header">
                <h2 style={styles.tableTitle}>AWW List</h2>
                <div style={styles.searchContainer}>
                  <div style={styles.searchIcon}>
                    <Search style={{ height: '1.25rem', width: '1.25rem' }} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search AWWs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={styles.searchInput}
                    className="search-input"
                  />
                </div>
              </div>
              <div style={styles.tableWrapper}>
                <table style={styles.table}>
                  <thead style={styles.tableHead}>
                    <tr>
                      <th style={styles.tableHeadCell}>Name</th>
                      <th style={styles.tableHeadCell}>Email</th>
                      <th style={styles.tableHeadCell}>Location</th>
                      <th style={styles.tableHeadCell}>Contact</th>
                      <th style={styles.tableHeadCell}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAWWs.map((aww, index) => (
                      <tr key={aww._id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                        <td style={{ ...styles.tableBodyCell, ...styles.tableCellName }}>{aww.name}</td>
                        <td style={{ ...styles.tableBodyCell, ...styles.tableCellRegular }}>{aww.email}</td>
                        <td style={{ ...styles.tableBodyCell, ...styles.tableCellRegular }}>{aww.location || "-"}</td>
                        <td style={{ ...styles.tableBodyCell, ...styles.tableCellRegular }}>{aww.contact || "-"}</td>
                        <td style={styles.tableBodyCell}>
                          <div style={styles.tableCellActions}>
                            <button
                              onClick={() => handleEdit(aww)}
                              style={styles.editButton}
                              className="edit-button"
                            >
                              <Edit3 style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }} />
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(aww._id)}
                              style={styles.deleteButton}
                              className="delete-button"
                            >
                              <Trash2 style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }} />
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredAWWs.length === 0 && (
                  <div style={styles.emptyState}>
                    <p>No AWWs found.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Beneficiaries Tab */}
        {activeTab === "beneficiaries" && (
          <div style={styles.tableContainer}>
            <div style={styles.tableHeader} className="table-header">
              <h2 style={styles.tableTitle}>Beneficiaries</h2>
              <div style={styles.searchContainer}>
                <div style={styles.searchIcon}>
                  <Search style={{ height: '1.25rem', width: '1.25rem' }} />
                </div>
                <input
                  type="text"
                  placeholder="Search beneficiaries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={styles.searchInput}
                  className="search-input"
                />
              </div>
            </div>
            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead style={styles.tableHead}>
                  <tr>
                    <th style={styles.tableHeadCell}>Name</th>
                    <th style={styles.tableHeadCell}>Email</th>
                    <th style={styles.tableHeadCell}>Phone</th>
                    <th style={styles.tableHeadCell}>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBeneficiaries.map((beneficiary, index) => (
                    <tr key={beneficiary._id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                      <td style={{ ...styles.tableBodyCell, ...styles.tableCellName }}>{beneficiary.name}</td>
                      <td style={{ ...styles.tableBodyCell, ...styles.tableCellRegular }}>{beneficiary.email}</td>
                      <td style={{ ...styles.tableBodyCell, ...styles.tableCellRegular }}>{beneficiary.phone}</td>
                      <td style={{ ...styles.tableBodyCell, ...styles.tableCellRegular }}>{beneficiary.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredBeneficiaries.length === 0 && (
                <div style={styles.emptyState}>
                  <p>No beneficiaries found.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminDashboard;