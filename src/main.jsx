import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./theme.css";
import { InfoProvider } from "./context/info.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <InfoProvider>
        <App />
    </InfoProvider>
    // <React.StrictMode>
    // </React.StrictMode>
);
