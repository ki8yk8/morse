import { useState } from "react";
import "./app.css";
import DotDash from "./components/dot-dash/dot-dash";
import useMorseSound from "./components/morse-sound/morse-sound";
import { english2Morse } from "./utils/convert";
import Modal from "./ui/modal/modal";

const WELCOME_WORD = "Hello";

function App() {
	const [show_welcome, set_show_welcome] = useState(true);
	const playMorse = useMorseSound(100);

	return (
		<>
			<Modal onClose={() => set_show_welcome(false)} isOpen={show_welcome}>
				<>
					<h4>
						Hey Chief <span className="u-font-emoji">👋</span>
					</h4>
					<small style={{ marginTop: "0.25rem" }}>
						Learn, and communicate with morse. Multiple learning, practice, and
						communication mode with right settings tuned for you.
					</small>
					<div
						style={{
							marginTop: "1rem",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							gap: "2rem",
							marginTop: "1rem",
						}}
					>
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
							Listen to dits-dahs <span className="u-font-emoji">🔊</span>
						</button>
					</div>
				</>
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
