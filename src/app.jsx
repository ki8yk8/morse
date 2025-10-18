import { useState } from "react";
import "./app.css";
import Modal from "./ui/modal/modal";
import WelcomeModal from "./ui/welcome-modal/welcome-modal";

function App() {
	const [show_welcome, set_show_welcome] = useState(true);

	return (
		<>
			<Modal onClose={() => set_show_welcome(false)} isOpen={show_welcome}>
				<WelcomeModal />
			</Modal>

			<header>
				<h1>
					Morse<span className="u-color-red-pantone">.</span>
				</h1>
			</header>

			<div></div>
		</>
	);
}

export default App;
