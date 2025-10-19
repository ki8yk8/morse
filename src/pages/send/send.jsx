import { useEffect, useState } from "react";
import useMorseSound from "../../hooks/use-morse-sound/use-morse-sound";

import "./style.css";
import { FaCircle, FaMinus } from "react-icons/fa";

export default function SendPage() {
	const playMorse = useMorseSound(100);
	const [playing, set_playing] = useState({
		dot: false,
		dash: false,
	});

	useEffect(() => {
		window.addEventListener("keydown", handle_key_pressed);

		return () => window.removeEventListener("keydown", handle_key_pressed);
	}, []);

	const handle_key_pressed = (event) => {
		console.log(event.key);
		if (event.key === ".") {
			playMorse(".");
			set_playing((prev) => ({ ...prev, dot: true }));

			setTimeout(() => {
				set_playing((prev) => ({ ...prev, dot: false }));
			}, 100);
		}

		if (event.key === "-") {
			playMorse("-");
			set_playing((prev) => ({ ...prev, dash: true }));

			setTimeout(() => {
				set_playing((prev) => ({ ...prev, dash: false }));
			}, 100);
		}
	};

	return (
		<>
			<h2>Send Morse Code</h2>
			<p>Press '.' and '-' on your keyboard to send dot and dash</p>

			<section className="morse_hint">
				<div className={playing.dot ? "active" : ""}>
					<FaCircle size="0.5rem" />
				</div>
				<div className={playing.dash ? "active" : ""}>
					<FaMinus />
				</div>
			</section>
		</>
	);
}
