import ReactDOM from "react-dom/client";
import { App } from "./components/app.jsx";
import './styles.css';

const rootElment = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(rootElment);

reactRoot.render(<App />);
