import { Handle, Position } from "reactflow";

export default function CustomNode({ data }) {
  return (
    <div
      style={{
        width: 180,
        borderRadius: 12,
        background: "#ffffff",
        boxShadow:
          "0 10px 20px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.04)",
        border: "1px solid #e5e7eb",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
      }}
      className="hover:scale-[1.02]"
    >
      {/* Header */}
      <div
        style={{
          padding: "8px 12px",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          background:
            "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "white",
          fontWeight: 600,
          fontSize: 14,
        }}
      >
        {data.label}
      </div>

      {/* Body */}
      <div
        style={{
          padding: "10px 12px",
          fontSize: 12,
          color: "#475569",
        }}
      >
        Workflow Step
      </div>

      {/* Input */}
      <Handle
        type="target"
        position={Position.Left}
        style={{
          width: 12,
          height: 12,
          background: "#22c55e",
          border: "2px solid white",
        }}
      />

      {/* Output */}
      <Handle
        type="source"
        position={Position.Right}
        style={{
          width: 12,
          height: 12,
          background: "#6366f1",
          border: "2px solid white",
        }}
      />
    </div>
  );
}
