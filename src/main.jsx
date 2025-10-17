import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./stylesheets/reset.css";
import "./stylesheets/colors.css";
import "./index.css";
import "./stylesheets/typography.css";
import "./stylesheets/component.css";

import App from "./app.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
