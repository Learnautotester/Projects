
import './App.css';
import { useState, useEffect } from 'react';
export default function App() {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const ROWS_PER_PAGE = 10;

  // -------------------------
  // Step 1: Fetch API data
  // -------------------------
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );

        if (!response.ok) {
          throw new Error("Fetch failed");
        }

        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        alert("failed to fetch data");
      }
    };

    fetchEmployees();
  }, []);

  // -------------------------
  // Step 2: Pagination logic
  // -------------------------
  const totalPages = Math.ceil(employees.length / ROWS_PER_PAGE);

  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const endIndex = startIndex + ROWS_PER_PAGE;

  const currentPageData = employees.slice(startIndex, endIndex);

  // -------------------------
  // Step 3: Button handlers
  // -------------------------
  const handlePrevious = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage === totalPages) return;
    setCurrentPage((prev) => prev + 1);
  };

  // -------------------------
  // Step 4: UI Rendering
  // -------------------------
  return (
    <div style={{ padding: "20px" }}>
      {/* Title */}
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Employee Data Table
      </h1>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead style={{ backgroundColor: "#009879", color: "white" }}>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Role</th>
          </tr>
        </thead>

        <tbody>
          {currentPageData.map((emp) => (
            <tr key={emp.id}>
              <td style={tdStyle}>{emp.id}</td>
              <td style={tdStyle}>{emp.name}</td>
              <td style={tdStyle}>{emp.email}</td>
              <td style={tdStyle}>{emp.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button style={buttonStyle} onClick={handlePrevious}>
          Previous
        </button>

        <span style={pageStyle}>{currentPage}</span>

        <button style={buttonStyle} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

// -------------------------
// Styles
// -------------------------
const thStyle = {
  padding: "12px",
  textAlign: "left",
};

const tdStyle = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
};

const buttonStyle = {
  padding: "8px 14px",
  backgroundColor: "#009879",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const pageStyle = {
  padding: "8px 14px",
  border: "1px solid #009879",
  backgroundColor: "#009879",
  borderRadius: "4px",
  color: "white",
};


