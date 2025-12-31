🧠 Demanual AI – Frontend Assignment

A simplified AI workflow builder inspired by tools like n8n and LangFlow, built as part of the Demanual AI Frontend Developer Assignment.

The application includes:

A basic Login / Sign-Up page

A 2D workflow canvas where users can create, drag, and connect nodes visually.

🚀 Live Demo

🔗 Deployed on Vercel:
https://demanual-ai-worflow-builder.vercel.app/

🔗 GitHub Repository:
https://github.com/harishdtu/Demanual-ai-worflow-builder

🧩 Features
✅ Login / Sign-Up Page

Simple authentication UI (no backend required)

Clean, modern SaaS-style design

Redirects to workflow builder after login

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/423a2a49-8d4e-49a5-a21c-cd22767cdae9" />

✅ 2D Workflow Builder

Add new nodes dynamically

Drag & reposition nodes freely

Each node contains:

One input port

One output port

Connect nodes by dragging from output → input

Connection lines update automatically when nodes move

Grid-based canvas inspired by n8n / LangFlow
Screenshot:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e2f023ad-17a3-4a40-bc22-d5c89c2b624d" />

🎨 UI & Design

Modern, minimal UI

Soft gradients and subtle shadows

Clear visual distinction between input & output ports

Smooth interactions and animations

🛠️ Tech Stack

React (Vite)

React Flow – for workflow canvas

React Router DOM – routing

CSS / Inline Styling – UI styling

Vercel – deployment

📂 Project Structure
src/
 ├─ components/
 │   └─ CustomNode.jsx
 ├─ flow/
 │   └─ nodeTypes.js
 ├─ pages/
 │   ├─ Login.jsx
 │   └─ Canvas.jsx
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css

🧪 How to Run Locally
# Clone the repository
git clone https://github.com/<your-username>/demanual-ai.git

# Navigate to project folder
cd demanual-ai

# Install dependencies
npm install

# Start development server
npm run dev


The app will run on:

http://localhost:5173

📦 Deployment

The project is deployed using Vercel with:

Vite build output (dist)

SPA routing configuration for React Router

🧠 Design Decisions

React Flow was chosen to efficiently handle:

Dragging

Connecting nodes

Dynamic edge updates

Focus was on core workflow behavior rather than recreating full production complexity.

UI was kept clean and intuitive to reflect real-world AI workflow tools.

📌 Notes

No backend or authentication logic was required for this assignment.

All functionality runs fully on the frontend.

The goal was to demonstrate frontend fundamentals, interaction handling, and UI polish.

👤 Author

Harish Vasamsetti
