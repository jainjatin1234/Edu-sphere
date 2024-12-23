import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { CoursesProvider } from "./utils/Context.jsx";

createRoot(document.getElementById("root")).render(
  <CoursesProvider>
    <App />
  </CoursesProvider>
);
