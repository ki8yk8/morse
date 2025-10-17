import { useState } from "react";
import "./app.css";
import DotDash from "./components/dot-dash/dot-dash";
import useMorseSound from "./components/morse-sound/morse-sound";
import { english2Morse } from "./utils/convert";
import Modal from "./ui/modal/modal";

const WELCOME_WORD = "Morse";

function App() {
	const [show_welcome, set_show_welcome] = useState(true);
	const playMorse = useMorseSound(100);

	return (
		<>
			<Modal onClose={() => set_show_welcome(false)} isOpen={show_welcome}>
				Example of a modal
			</Modal>
			<header>
				<h1>
					Morse<span className="u-color-red-pantone">.</span>
				</h1>
			</header>

			<div>
				<DotDash
					content={english2Morse(WELCOME_WORD)}
					colors={[
						"var(--color-red-pantone)",
						"var(--color-rich-black)",
						"transparent",
					]}
				/>
				<button
					className="u-primary"
					onClick={() => playMorse(english2Morse(WELCOME_WORD))}
				>
					Play Morse Sound
				</button>
			</div>
		</>
	);
}

export default App;
