import "./app.css";
import DotDash from "./components/dot-dash/dot-dash";

function App() {
	return (
		<>
			<h1>Morse Code Signal Communicator</h1>
			<p>
				<DotDash
					content="-.-/---/...//./.-/-//-/---/-"
					colors={[
						"var(--color-red-pantone)",
						"var(--color-rich-black)",
						"transparent",
					]}
				/>
			</p>
		</>
	);
}

export default App;
