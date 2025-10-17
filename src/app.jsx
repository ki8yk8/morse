import "./app.css";
import DotDash from "./components/dot-dash/dot-dash";
import useMorseSound from "./components/morse-sound/morse-sound";

function App() {
	const playMorse = useMorseSound(100);

	return (
		<>
			<h1>Morse Code Signal Communicator</h1>
			<div>
				<DotDash
					content="-.-/---/...//./.-/-//-/---/-"
					colors={[
						"var(--color-red-pantone)",
						"var(--color-rich-black)",
						"transparent",
					]}
				/>
				<button onClick={() => playMorse(".-./-")}>Play Morse Sound</button>
			</div>
		</>
	);
}

export default App;
