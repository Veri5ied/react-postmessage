import { Parent } from "./Parent";
import { Child } from "./Child";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Parent />} />
        <Route path="/child" element={<Child />} />
      </Routes>
    </div>
  );
}
