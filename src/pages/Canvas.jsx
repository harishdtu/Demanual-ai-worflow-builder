import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useEdgesState,
  useNodesState,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import { useCallback } from "react";
import CustomNode from "../components/CustomNode";

/* ✅ ONE stable nodeTypes object */
const nodeTypes = {
  custom: CustomNode,
};

export default function Canvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
  (params) =>
    setEdges((eds) =>
      addEdge(
        {
          ...params,
          animated: true,
          style: {
            stroke: "#6366f1",
            strokeWidth: 2.5,
          },
        },
        eds
      )
    ),
  []
);


  const addNode = () => {
    setNodes((nds) => [
      ...nds,
      {
        id: crypto.randomUUID(),
        type: "custom",
        position: { x: 250, y: 250 },
        data: { label: `Node ${nds.length + 1}` },
      },
    ]);
  };

  return (
    <ReactFlowProvider>
      <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
        {/* Top Bar */}
<div
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "64px",
    background: "white",
    borderBottom: "1px solid #e5e7eb",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
  }}
>
  <h1 style={{ fontWeight: 600 }}>
    Demanual AI – Workflow Builder
  </h1>

  <button
    onClick={addNode}
    style={{
      background: "#4f46e5",
      color: "white",
      padding: "8px 12px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "14px",
    }}
  >
    ➕ Add Node
  </button>
</div>


        <div
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            nodesDraggable
            nodesConnectable
            fitView
          >
            <Background variant="dots" gap={16} size={1} />
            <Controls />
          </ReactFlow>
        </div>
      </div>
    </ReactFlowProvider>
  );
}
