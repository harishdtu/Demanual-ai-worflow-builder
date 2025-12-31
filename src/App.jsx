import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Canvas from "./pages/Canvas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </BrowserRouter>
  );
}
