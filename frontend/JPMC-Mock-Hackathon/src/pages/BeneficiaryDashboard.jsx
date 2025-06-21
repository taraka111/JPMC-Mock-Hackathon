import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// 🧒 Child's personalized data
const childProfile = {
  name: "Kavya",
  age: "2 years 3 months",
  weight: "7.6 kg",
  problem: "Mild Iron Deficiency",
  diet: [
    "Include green leafy vegetables (e.g., spinach)",
    "Add jaggery and dates for iron boost",
    "Daily intake of fortified cereals",
    "One boiled egg or dal per day",
    "Avoid tea/coffee near meal times"
  ]
};

const nutritionTips = [
  "🥦 Include iron-rich foods like leafy greens and lentils.",
  "🥛 Ensure daily intake of milk or dairy.",
  "🍓 Provide fresh fruits for vitamins and fiber.",
  "🍚 Add rice, roti, and vegetables to each meal.",
  "🥜 Include protein like eggs, pulses, and nuts (if no allergy).",
];

const videoList = [
  {
    title: "Breastfeeding Guidelines",
    url: "https://www.youtube.com/embed/or4OnMxihUg",
  },
  {
    title: "Child Nutrition Tips",
    url: "https://www.youtube.com/embed/4IC8OvK1OYw",
  },
  {
    title: "Healthy Diet for Kids",
    url: "https://www.youtube.com/embed/EIjg11UBp-U",
  },
];

const progressData = [
  { month: "Jan", weight: 6.5, height: 60 },
  { month: "Feb", weight: 6.8, height: 62 },
  { month: "Mar", weight: 7.1, height: 63.5 },
  { month: "Apr", weight: 7.4, height: 65 },
  { month: "May", weight: 7.6, height: 66 },
];

function BeneficiaryDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/login/beneficiary");
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#007bff" }}>Welcome, Beneficiary!</h2>

      {/* 👶 Personalized Child Info */}
      <section style={{ marginTop: "20px", backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "10px" }}>
        <h3>🧒 Child Profile</h3>
        <p><strong>Name:</strong> {childProfile.name}</p>
        <p><strong>Age:</strong> {childProfile.age}</p>
        <p><strong>Current Weight:</strong> {childProfile.weight}</p>
        <p><strong>Health Problem:</strong> {childProfile.problem}</p>
        <p><strong>Recommended Diet:</strong></p>
        <ul>
          {childProfile.diet.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h3>🍽️ General Nutrition Tips</h3>
        <ul>
          {nutritionTips.map((tip, idx) => (
            <li key={idx} style={{ margin: "8px 0" }}>{tip}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h3>🎥 Counselling Videos</h3>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {videoList.map((video, idx) => (
            <div key={idx} style={{ flex: "1 1 300px" }}>
              <p><strong>{video.title}</strong></p>
              <iframe
                width="100%"
                height="200"
                src={video.url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h3>📈 Child Growth Progress</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={progressData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" label={{ value: "Weight (kg)", angle: -90, position: "insideLeft" }} />
            <YAxis yAxisId="right" orientation="right" label={{ value: "Height (cm)", angle: -90, position: "insideRight" }} />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="weight" stroke="#8884d8" />
            <Line yAxisId="right" type="monotone" dataKey="height" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </section>

      <div style={{ marginTop: "40px" }}>
        <button
          onClick={handleLogout}
          style={{
            padding: "12px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            backgroundColor: "#d9534f",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            width: "200px"
          }}
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

export default BeneficiaryDashboard;
