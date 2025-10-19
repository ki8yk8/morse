import { useState } from "react";
import "./app.css";
import Modal from "./ui/modal/modal";
import WelcomeModal from "./ui/welcome-modal/welcome-modal";
import Sidebar from "./ui/sidebar/sidebar";
import SIDEBAR_CONFIG from "./config/sidebar";

function App() {
	const [show_welcome, set_show_welcome] = useState(true);

	return (
		<>
			<Modal onClose={() => set_show_welcome(false)} isOpen={show_welcome}>
				<WelcomeModal />
			</Modal>

			<Sidebar config={SIDEBAR_CONFIG} />
			<main>
				<h3>Morse content here</h3>
			</main>
		</>
	);
}

export default App;
