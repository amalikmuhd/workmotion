import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UiList, Add, Edit } from "./components/imports";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path="/edit/:id/:status" element={<Edit />} />
      <Route path="/add" element={<Add />} />
      <Route path="/" element={<UiList />} />
    </Routes>
  </Router>
);
