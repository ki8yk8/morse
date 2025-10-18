import { english2Morse } from "../../utils/convert";
import DotDash from "../../components/dot-dash//dot-dash";
import useMorseSound from "../../hooks/use-morse-sound/use-morse-sound";

const WELCOME_WORD = "Hello";

export default function WelcomeModal() {
	const playMorse = useMorseSound(100);

	return (
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
	);
}
