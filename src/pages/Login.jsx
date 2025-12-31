import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 50%, #faf5ff 100%)",
      }}
    >
      {/* Card */}
      <div
        style={{
          width: 360,
          background: "white",
          borderRadius: 16,
          padding: "32px 28px",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.05)",
        }}
      >
        {/* Logo / Title */}
        <h1
          style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: 700,
            marginBottom: 8,
            color: "#1e293b",
          }}
        >
          Demanual AI
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: 13,
            color: "#64748b",
            marginBottom: 24,
          }}
        >
          Sign in to your workflow dashboard
        </p>

        {/* Email */}
        <label style={{ fontSize: 12, color: "#475569" }}>
          Email
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          style={{
            width: "100%",
            padding: "10px 12px",
            marginTop: 6,
            marginBottom: 14,
            borderRadius: 8,
            border: "1px solid #e5e7eb",
            fontSize: 14,
          }}
        />

        {/* Password */}
        <label style={{ fontSize: 12, color: "#475569" }}>
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          style={{
            width: "100%",
            padding: "10px 12px",
            marginTop: 6,
            marginBottom: 20,
            borderRadius: 8,
            border: "1px solid #e5e7eb",
            fontSize: 14,
          }}
        />

        {/* Button */}
        <button
          onClick={() => navigate("/canvas")}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: 10,
            border: "none",
            background:
              "linear-gradient(135deg, #6366f1, #8b5cf6)",
            color: "white",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
            boxShadow:
              "0 8px 16px rgba(99,102,241,0.35)",
          }}
        >
          Login / Sign Up
        </button>

        {/* Footer */}
        <p
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "#94a3b8",
            marginTop: 16,
          }}
        >
          No backend required · Demo access
        </p>
      </div>
    </div>
  );
}
