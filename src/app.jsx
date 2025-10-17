import "./app.css";
import DotDash from "./components/dot-dash/dot-dash";
import useMorseSound from "./components/morse-sound/morse-sound";
import { english2Morse } from "./utils/convert";

const WELCOME_WORD = "Morse";

function App() {
	const playMorse = useMorseSound(100);

	return (
		<>
			<header>
				<h1>Morse</h1>
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
				<button className="u-primary" onClick={() => playMorse(english2Morse(WELCOME_WORD))}>
					Play Morse Sound
				</button>
			</div>
		</>
	);
}

export default App;
